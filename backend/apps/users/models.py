from django.db import models
from django.contrib.auth.models import AbstractUser

from model_utils.models import TimeStampedModel

# Custom managers ⚙️
from .managers import CustomUserManager


# Models 🗂
class User(AbstractUser, TimeStampedModel):
    '''Model definition for User.'''
    # class ImageField(models.ImageField):
    #     def value_to_string(self, obj):
    #         return obj.fig.url

    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    username = models.CharField(max_length=50, unique=True)
    email = models.EmailField(max_length=254, unique=True)
    avatar = models.ImageField(null=True, blank=True, upload_to="avatars/")
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    object = CustomUserManager()

    USERNAME_FIELD = 'email'
    # Email & Password are required by default.
    REQUIRED_FIELDS = ['first_name', 'last_name']

    class Meta:
        '''Meta definition for User.'''

        verbose_name = 'User'
        verbose_name_plural = 'Users'

    def full_name(self):
        return f'{ self.first_name } { self.last_name }'

    def __str__(self):
        return self.full_name()

    def save(self, *args, **kwargs):
        # Creating username from email for a new user
        # if username isn't provided.
        if self.pk is None and not self.username:
            local, at, domain = self.email.rpartition('@')
            self.username = local
        return super().save(*args, **kwargs)