from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', include('users.urls')),
    path('api/assets/', include('assets.urls')),
    path('api/queries/', include('queries.urls')),
]