from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient
from django.contrib.auth import get_user_model
from rest_framework.test import APITestCase
from rest_framework import status
from .models import CustomerUser

class UserRegistrationTest(TestCase):
    def setUp(self):
        self.client = APIClient()  # Створення клієнта API для тестування
        self.url = '/api/auth/registration/'  # Ваш endpoint для реєстрації

    def test_user_registration(self):
        # Дані для реєстрації
        data = {
            'username': 'fflrlflrllrg',
            'email': 'testuser@example.com',
            'password1': 'strongpassword1234',
            'password2': 'strongpassword1234',
        }
        
        # Виконання POST-запиту на реєстрацію користувача
        response = self.client.post(self.url, data, format='json')

        # Перевірка статусу відповіді
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        # Перевірка, чи створений користувач
        user = get_user_model().objects.get(email='testuser@example.com')
        self.assertIsNotNone(user)

    def test_user_registration_password_mismatch(self):
        # Дані з неправильними паролями
        data = {
            'username': 'fflrlflrllrg',
            'email': 'testuser2@example.com',
            'password1': 'strongpassword1234',
            'password2': 'wrongpassword1234',
        }
        
        # Виконання POST-запиту на реєстрацію користувача
        response = self.client.post(self.url, data, format='json')
        # Перевірка статусу відповіді (неуспішна реєстрація)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

        # Перевірка, що користувач не був створений
        users = get_user_model().objects.filter(email='testuser2@example.com')
        self.assertEqual(users.count(), 0)




class LoginTestCase(APITestCase):
    def setUp(self):
        """
        Створення користувача для тестування логіну.
        """
        self.user = CustomerUser.objects.create_user(username="testuser", password="testpassword")
        self.login_url = "/api/auth/login/"  # Шлях до вашого ендпоінту логіну

    def test_login_success(self):
        """
        Тест успішного логіну з правильними даними.
        """
        data = {"username": "testuser", "password": "testpassword"}
        response = self.client.post(self.login_url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn("key", response.data)  # Перевірка, що токен повертається

    def test_login_failure(self):
        """
        Тест помилкового логіну з неправильними даними.
        """
        data = {"username": "testuser", "password": "wrongpassword"}
        response = self.client.post(self.login_url, data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertNotIn("key", response.data)  # Токен не повинен повертатись

    def test_login_missing_fields(self):
        """
        Тест, коли передаються неповні дані.
        """
        data = {"username": "testuser"}
        response = self.client.post(self.login_url, data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("password", response.data)  # Перевірка, що є помилка для поля "password"
        self.assertEqual(response.data["password"][0], "This field is required.")  # Точна перевірка повідомлення
