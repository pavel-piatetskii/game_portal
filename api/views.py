# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework.utils import serializer_helpers
from api.models import User

from django.shortcuts import render
from rest_framework import generics, status
from .serializers import UserSerializer, CreateUserSerializer
from .models import User
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.
#def main(request):
#  return HttpResponse("Hello World!")

class UserView(generics.CreateAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer

class CreareUserView(APIView)
  serializer_class = CreateUserSerializer

  def post(self, request, format=none):
    # if not self.request.session.exists(self.request.session.session_key)
    #   self.request.session.create()

    serializer = self.serializer_class(data=request.data)
    #if 