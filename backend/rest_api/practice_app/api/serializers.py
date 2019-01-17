from rest_framework import serializers
from practice_app.models import Article

class ArticleSerializer(serializers.ModelSerializer):
  class Meta:
    model = Article
    fields = ('id', 'title', 'content')
