from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status

# Models 🗂
from . import models as UsersModels

# Serializers 📦
from . import serializers as UsersSerializers

# Views 🖥
class UserList(APIView):
	"""
	View to list all users in the system.

	* Requires token authentication.
	* Only admin users are able to access this view.
	"""
	permission_classes = [permissions.IsAdminUser]

	def get(self, request, format=None):
		"""
		Return a list of all users.
		"""
		users = UsersModels.User.objects.all()
		serializer = UsersSerializers.UserSerializer(users, many=True, context={ 'request': request })
		return Response(data=serializer.data, status=status.HTTP_200_OK)

	def post(self, request, format=None):
		"""
		Method for a new user.
		"""
		serializer = UsersSerializers.UserSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(data=serializer.data, status=status.HTTP_201_CREATED)
		else:
			return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserDetail(APIView):
	"""
	View to a especific user.
	Methods: get, patch, delete.
	* Requires token authentication.
	"""
	permission_classes = [permissions.IsAuthenticated]

	def get_object(self, pk):
		return get_object_or_404(UsersModels.User, id=pk)

	def get(self, request,  pk, format=None):
		user = self.get_object(pk=pk)
		serializer = UsersSerializers.UserDetailSerializer(user, context={ 'request': request })
		return Response(data=serializer.data, status=status.HTTP_200_OK)

	def patch(self, request,  pk, format=None):
		user = self.get_object(pk=pk)
		serializer = UsersSerializers.UserUpdateSerializer(user, data=request.data, partial=True)

		if serializer.is_valid():
			serializer.save()
			return Response(data=serializer.data, status=status.HTTP_200_OK)
		else:
			return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	def delete(self, request,  pk, format=None):
		user = self.get_object(pk=pk)
		user.delete()
		return Response(data={ "message": "User deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
