from django.conf.urls import url
from .views import UserView

urlpatterns = [
    url('api', UserView.as_view()),
    #url('', main)
]