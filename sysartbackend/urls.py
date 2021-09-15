from django.views.generic import TemplateView
from django.urls import path, include
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('app.urls')),
    path('', TemplateView.as_view(template_name='index.html'))
]
