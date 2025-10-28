from django.db import models
from django.conf import settings
# Create your models here.

ASSET_TYPE_CHOICES = (
    ('pdf','PDF'),
    ('image','Image'),
    ('text','Text'),
)

class Asset(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    file = models.FileField(upload_to='assets/')
    thumbnail = models.ImageField(upload_to='assets/thumbnails/', blank=True, null=True)
    asset_type = models.CharField(max_length=20, choices=ASSET_TYPE_CHOICES)
    uploaded_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    size = models.BigIntegerField(null=True, blank=True)
    public = models.BooleanField(default=False)
    keywords = models.CharField(max_length=512, blank=True)
    def __str__(self): return self.title