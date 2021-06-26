from django.conf.urls import url
from .views import main

urlpatterns = [
    url('api', main),
    url('', main)
]