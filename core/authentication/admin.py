from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomerUser

@admin.register(CustomerUser)
class CustomUserAdmin(UserAdmin):
    model = CustomerUser
    fieldsets = UserAdmin.fieldsets + (
        ("Додаткові поля", {'fields': ('phone_number',)}),  # Зробіть це кортежем
    )
