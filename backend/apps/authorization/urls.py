from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


app_name = "auth"

# Views 🖥
from . import views

# Routes 🪧
urlpatterns = [
    path(f'{ app_name }/login/', TokenObtainPairView.as_view(), name="auth-login"),
    path(f'{ app_name }/refresh/', TokenRefreshView.as_view(), name="auth-refresh"),
    path(f'{ app_name }/register/', views.RegisterView.as_view(), name="auth-register"),
]