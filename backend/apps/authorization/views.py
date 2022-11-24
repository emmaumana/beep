from django.contrib.auth import get_user_model
from rest_framework import generics
from rest_framework.permissions import AllowAny

# Serializers 📦
from . import serializers as AuthSerializers

# Views 🖥
class RegisterView(generics.CreateAPIView):
    queryset = get_user_model().object.all()
    permission_classes = [AllowAny]
    serializer_class = AuthSerializers.RegisterSerializer

