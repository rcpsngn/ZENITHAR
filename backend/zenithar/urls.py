from django.contrib import admin
from django.urls import path
from django.http import JsonResponse

def home(request):
    return JsonResponse({"message": "ZENITHAR API Running"})

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home),
]
