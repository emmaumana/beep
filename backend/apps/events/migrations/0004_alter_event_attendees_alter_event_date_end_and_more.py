# Generated by Django 4.1.3 on 2022-11-14 18:14

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('events', '0003_remove_event_likes_event_likes'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='attendees',
            field=models.ManyToManyField(blank=True, related_name='events', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='event',
            name='date_end',
            field=models.DateTimeField(),
        ),
        migrations.AlterField(
            model_name='event',
            name='date_start',
            field=models.DateTimeField(),
        ),
        migrations.AlterField(
            model_name='event',
            name='likes',
            field=models.ManyToManyField(blank=True, related_name='events_liked', to=settings.AUTH_USER_MODEL),
        ),
    ]
