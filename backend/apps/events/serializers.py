from rest_framework import serializers

# Models 🗂
from . import models as EventModels
from apps.users import models as UserModels

# Serializers 📦
class EventSerializer(serializers.ModelSerializer):

	class Meta:
		model = EventModels.Event
		fields = [
			'id',
			'title',
			'description',
			'cover',
			'location',
			'attendees',
			'likes',
			'date_start',
            'date_end',
			'created_by',
		]


class EventDetailSerializer(EventSerializer):

	class Meta:
		model = EventModels.Event
		fields = EventSerializer.Meta.fields + [
			'attendees',
			'description',
			'date_start',
			'date_end',
			'created_by',
			'editor',
			'is_active',
			'created',
			'modified',
		]

class EventUpdateSerializer(serializers.ModelSerializer):
	attendees = serializers.CharField()
	likes = serializers.CharField()

	class Meta:
		model = EventModels.Event
		fields = [
			'title',
			'attendees',
			'likes',
			'cover',
			'location',
			'description',
			'date_start',
			'date_end',
			'editor',
			'is_active',
		]

	def validate_attendees(self, user_id):
		attendee = UserModels.User.objects.get(id=user_id)
		return [attendee]

	def validate_likes(self, user_id):
		like = UserModels.User.objects.get(id=user_id)
		return [like]

	def update(self, event, validated_data):
		attendee = validated_data.pop('attendees')[0] if 'attendees' in validated_data else None
		like = validated_data.pop('likes')[0] if 'likes' in validated_data else None

		if( attendee ):
			if event.attendees.contains(attendee):
				event.attendees.remove(attendee)
			else:
				event.attendees.add(attendee)

		if( like ):
			if event.likes.contains(like):
				event.likes.remove(like)
			else:
				event.likes.add(like)
		
		for key in validated_data:
			setattr(event, key, validated_data[key])
		event.save()
		return event


class EventCreateSerializer(serializers.ModelSerializer):
	class Meta:
		model = EventModels.Event
		fields = [
			'id',
			'title',
			'description',
			'cover',
			'location',
			'date_start',
			'date_end',
			'created_by',
			'editor',
		]