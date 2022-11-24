from django.urls import path

app_name = "users"

# Views 🖥
from . import views

# Routes 🪧
urlpatterns = [
    path(f'{ app_name }/', views.UserList.as_view(), name="user-listing"),
    path(f'{ app_name }/<pk>/', views.UserDetail.as_view(), name="user-detail"),
]