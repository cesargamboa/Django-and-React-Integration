from django.conf.urls import url
from .views import ArticleListView, ArticleDetailView



urlpatterns = [
  url(r'^$', ArticleListView.as_view()),
  url(r'^(?P<pk>\d+)/$', ArticleDetailView.as_view())
]
