from django.conf.urls import url
from .views import main

urlpatterns = [
    url('portal', main),
    url('', main)
]