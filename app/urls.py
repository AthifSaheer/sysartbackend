from django.urls import path
from . import views

urlpatterns = [
    path('home/<str:code>/', views.home, name="home"),
    path('register/account/', views.register, name="register"),
    path('login/', views.login, name="login"),
]

