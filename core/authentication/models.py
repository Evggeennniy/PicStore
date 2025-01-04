from django.contrib.auth.models import AbstractUser
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

class CustomerUser(AbstractUser):
    phone_number = PhoneNumberField(blank=True, null=True)

# Create your models here.
