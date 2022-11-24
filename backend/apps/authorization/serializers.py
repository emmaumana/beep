from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from rest_framework.validators import UniqueValidator

# Custom Serializers 📦
from apps.users import models as UserModels


# Serializers 📦
class RegisterSerializer(serializers.ModelSerializer):
	email = serializers.EmailField(
		required=True,
		# Email should be unique ⤵
		validators=[UniqueValidator(queryset=UserModels.User.objects.all())]
		)
	password = serializers.CharField(
		write_only=True,
		required=True,
		validators=[validate_password]
		)
	password_confirmed = serializers.CharField(write_only=True, required=True)

	class Meta:
		model = UserModels.User
		fields = [
			'first_name',
			'last_name',
			'username',
			'email',
			'password',
			'password_confirmed',
		]

	def validate(self, attrs):
		if attrs['password'] != attrs['password_confirmed']:
			raise serializers.ValidationError({ 'password': 'Password fields didn\'t match.' })
		return attrs


	def create(self, validated_data):
		user = UserModels.User.objects.create_user(
			first_name = validated_data['first_name'],
			last_name  = validated_data['last_name'],
			username   = validated_data['username'],
			email      = validated_data['email'],
			password   = validated_data['password'],
		)

		return user