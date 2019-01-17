from rest_framework.generics import ListAPIView, RetrieveAPIView
from practice_app.models import Article
from .serializers import ArticleSerializer

class ArticleListView(ListAPIView):
  queryset = Article.objects.all()
  serializer_class = ArticleSerializer


class ArticleDetailView(RetrieveAPIView):
  queryset = Article.objects.all()
  serializer_class = ArticleSerializer
