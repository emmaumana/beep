from django.db import models

from model_utils.models import TimeStampedModel


# Models 🗂
class Event(TimeStampedModel):
    '''Model definition for Event.'''
    title = models.CharField(max_length=100)
    description = models.TextField()
    cover = models.ImageField(null=True, blank=True, upload_to="events/")
    location = models.CharField(max_length=50)
    date_start = models.DateTimeField(auto_now=False, auto_now_add=False)
    date_end = models.DateTimeField(auto_now=False, auto_now_add=False)
    attendees = models.ManyToManyField(to='users.User', related_name='events', blank=True)
    likes = models.ManyToManyField(to='users.User', related_name='events_liked', blank=True)
    created_by = models.ForeignKey(to='users.User', on_delete=models.CASCADE, blank=True, null=True, related_name='events_created')
    editor = models.ForeignKey(to='users.User', on_delete=models.CASCADE, blank=True, null=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        '''Meta definition for Event.'''

        verbose_name = 'Event'
        verbose_name_plural = 'Events'

    def __str__(self):
        return self.title