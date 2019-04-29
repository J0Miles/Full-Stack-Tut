from django.db import models

# Create your models here.
class Lead(models.Model):
    name = model.CharField(max_length=100)
    email = model.EmailField(max_length=100, unique=True)
    message = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
