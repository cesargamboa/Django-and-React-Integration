from rest_framework.generics import  ListAPIView, RetrieveAPIView, RetrieveUpdateAPIView, CreateAPIView,RetrieveDestroyAPIView
from practice_app.models import Article
from .serializers import ArticleSerializer
from rest_framework import viewsets

# class ArticleListView(ListAPIView):
#   queryset = Article.objects.all()
#   serializer_class = ArticleSerializer


# class ArticleDetailView(RetrieveAPIView):
#   queryset = Article.objects.all()
#   serializer_class = ArticleSerializer

# class ArticleCreateView(CreateAPIView):
#   queryset = Article.objects.all()
#   serializer_class = ArticleSerializer

# class ArticleDeleteView(RetrieveDestroyAPIView):
#   queryset = Article.objects.all()
#   serializer_class = ArticleSerializer

# class ArticleUpdateView(RetrieveUpdateAPIView):
#   queryset = Article.objects.all()
#   serializer_class = ArticleSerializer

class ArticleViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
