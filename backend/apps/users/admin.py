from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

# Models to register 🗂
from .models import User


# Models registrations 🗃

@admin.register(User)
class UserAdmin(BaseUserAdmin):
    readonly_fields = ['created', 'modified']
    list_filter = ['is_admin', 'is_superuser', 'is_active']
    list_display = ['full_name', 'username', 'email', 'is_active', 'id']
    search_fields = ['first_name', 'last_name', 'email']

    fieldsets = (
        ('Basic Info', {'fields': ('first_name', 'last_name',
         'username', 'email', 'avatar', 'password')}),
        ('Permissions', {'fields': ('is_active', 'is_staff',
         'is_superuser')}),
        ('Info', {'fields': ('last_login', 'created', 'modified')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2'),
        }),
    )