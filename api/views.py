# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework.utils import serializer_helpers
from api.models import User

from django.shortcuts import render
from rest_framework import generics
from .serializers import UserSerializer
from .models import User

# Create your views here.
#def main(request):
#  return HttpResponse("Hello World!")

class UserView(generics.CreateAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer