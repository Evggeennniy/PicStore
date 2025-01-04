from django.urls import path, include
from dj_rest_auth import views as auth_views
from django.urls import path

from . import views


urlpatterns = [
    path('', include('dj_rest_auth.urls')),
    path('registration/', include('dj_rest_auth.registration.urls'))
]