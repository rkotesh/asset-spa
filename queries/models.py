
from django.db import models
from django.conf import settings

STATUS = (('open','Open'),('in_progress','In Progress'),('closed','Closed'))

class QueryRequest(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=30, choices=STATUS, default='open')
    response = models.TextField(blank=True)
    def __str__(self): return f'Query {self.id}: {self.title}'
