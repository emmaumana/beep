from django.contrib import admin

from apps.users import models as UserModels

# Models to register 🗂
from .models import Event

# Models registrations 🗃
@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    '''Admin View for Event'''
    readonly_fields = ['editor', 'created', 'modified']
    list_display = ['title', 'location', 'date_start', 'date_end', 'created_by', 'editor', 'is_active', 'id']
    list_filter = ['location', 'created_by', 'is_active']
    search_fields = ['title']
    filter_horizontal = ['attendees', 'likes']

    def save_model(self, request, obj, form, change):
        user = UserModels.User.objects.filter(id=request.user.id)[0]
        obj.editor = user
        super().save_model(request, obj, form, change)