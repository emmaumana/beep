from rest_framework import serializers

# Models 🗂
from . import models as UsersModels
from apps.events import models as EventModels

# Serializers 📦
class UserSerializer(serializers.ModelSerializer):
	# avatar = serializers.SerializerMethodField()

	class Meta:
		model = UsersModels.User
		fields = [
			'id',
			'first_name',
			'last_name',
			'username',
			'email',
			'avatar',
			'created',
		]

	# def get_avatar(self, user):
	# 	request = self.context.get('request')
	# 	image_url = user.avatar.url if user.avatar and hasattr(user.avatar, 'url') else None
	# 	if image_url:
	# 		return request.build_absolute_uri(image_url)
	# 	return None


class UserDetailSerializer(UserSerializer):

	class Meta:
		model = UsersModels.User
		fields = [
			'id',
			'first_name',
			'last_name',
			'username',
			'email',
			'avatar',
			'is_admin',
			'events',
			'events_liked',
			'events_created'
		]


class UserUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = UsersModels.User
		fields = [
			'first_name',
			'last_name',
			'username',
			'email',
			'avatar',
		]