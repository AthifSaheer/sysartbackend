from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.routers import DefaultRouter
from django.urls import path, include
# from .views import register
from . import views

router = DefaultRouter()
# router.register('register/account', views.register, basename="register")

urlpatterns = [
    path('', include(router.urls)),
    path('home/<str:code>/', views.home, name="home"),
    path('register/account/', views.register, name="register"),
    path('login/', views.login, name="login"),
    path('logout/', views.logout, name="logout"),
    # path('login', obtain_auth_token, name="login"),
]

