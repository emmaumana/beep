from django.urls import path

app_name = "events"

# Views 🖥
from . import views

# Routes 🪧
urlpatterns = [
    path(f'{ app_name }/', views.EventList.as_view(), name="event-listing"),
    path(f'{ app_name }/<pk>/', views.EventDetail.as_view(), name="event-detail"),
]