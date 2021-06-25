from django.conf.urls import include, url
from .views import main

urlpatterns = [
    url('portal', main),
    url('', main)
]