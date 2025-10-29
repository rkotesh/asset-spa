from django.http import HttpResponse

def index(request):
    return HttpResponse("Queries app working successfully!")
