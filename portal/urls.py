from django.conf.urls import include, url
from .views import main

urlpatterns = [
    url('', main)
]