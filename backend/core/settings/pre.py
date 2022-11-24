from .pro import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# CORS
CORS_ALLOWED_ORIGINS = [
    "http://localhost:8080",
    "http://localhost:8000",
    'http://127.0.0.1',
]

# SSL Redirections
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
SECURE_SSL_REDIRECT = True