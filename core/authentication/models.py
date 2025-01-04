from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

class CustomerUser(AbstractUser):
    phone_number = PhoneNumberField(blank=True, null=True)
    groups = models.ManyToManyField(
        Group,
        related_name="customer_users",  # унікальний related_name для CustomerUser
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name="customer_user_permissions",  # унікальний related_name
    )
