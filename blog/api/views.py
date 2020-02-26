from rest_framework import viewsets
from .serializers import BlogPageSerializer

from blog.models import BlogPage


class BlogPageSet(viewsets.ModelViewSet):
    serializer_class = BlogPageSerializer
    queryset = BlogPage.objects.all()
    http_method_names = ['get']