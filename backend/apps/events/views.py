from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status

# Models 🗂
from . import models as EventModels

# Serializers 📦
from . import serializers as EventSerializers

# Views 🖥
class EventList(APIView):
    """
    View to list all events in the system.

    * Requires token authentication.
    """
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, format=None):
        """
        Return a list of all events.
        """
        queryset = EventModels.Event.objects.prefetch_related('attendees').order_by('created').all()
        serializer = EventSerializers.EventSerializer(queryset, many=True, context={ 'request': request })
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        """
        Method for a new event.
        """
        serializer = EventSerializers.EventCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.validated_data['created_by'] = request.user
            serializer.validated_data['editor'] = request.user
            serializer.save()
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EventDetail(APIView):
    """
    View to a especific event.
    Methods: get, post, patch, delete.

    * Requires token authentication.
    """
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self, pk):
        return get_object_or_404(EventModels.Event, id=pk)

    def get(self, request,  pk, format=None):
        queryset = self.get_object(pk=pk)
        serializer = EventSerializers.EventDetailSerializer(queryset, context={ 'request': request })
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def patch(self, request,  pk, format=None):
        event = self.get_object(pk=pk)
                
        serializer = EventSerializers.EventUpdateSerializer(event, data=request.data, partial=True)

        if serializer.is_valid():
            # adding the new editor
            serializer.validated_data['editor'] = request.user
            serializer.save()
            return Response(EventSerializers.EventDetailSerializer(event).data, status=status.HTTP_200_OK)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request,  pk, format=None):
        event = self.get_object(pk=pk)
        event.delete()
        return Response(data={ "message": "Event deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
