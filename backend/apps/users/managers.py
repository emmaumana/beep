from django.db import models
from django.contrib.auth.models import BaseUserManager

# Custom managers ⚙️
class CustomUserManager(BaseUserManager):

    def create_user(self, email, password, **other_fields):
        """
        Creates and saves a User with the given email and password.
        """
        if not email:
            raise ValueError('Users must have an email')
        if not password:
            raise ValueError('Users must have a password')

        user = self.model(
            email=self.normalize_email(email),
            **other_fields
        )
        user.set_password(password)
        # Creating username from email if needed
        if not other_fields['username']:
            local, at, domain = email.rpartition('@')
            user.username = local

        user.save()

        return user


    def create_staffuser(self, email, password, **other_fields):
        """
        Creates and saves a staff user with the given email and password.
        """
        other_fields.setdefault('is_staff', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError('Staff users must be assigned to is_staff=True')

        return self.create_user(email, password, **other_fields)


    def create_superuser(self, email, password, **other_fields):
        """
        Creates and saves a Superuser with the given email and password.
        """
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_admin', True)
        other_fields.setdefault('is_superuser', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError('Superuser must be assigned to is_staff=True')

        if other_fields.get('is_admin') is not True:
            raise ValueError('Superuser must be assigned to is_admin=True')

        if other_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must be assigned to is_superuser=True')

        return self.create_user(email, password, **other_fields)