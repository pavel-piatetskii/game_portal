# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class User(models.Model):
  name = models.CharField(max_length=32, default="", unique=True)
  password = models.CharField(max_length=256)
  created_at = models.DateTimeField(auto_now_add=True)