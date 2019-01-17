from django.conf.urls import url
from .views import ArticleViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ArticleViewSet, basename='articles')
urlpatterns = router.urls


# urlpatterns = [
#   url(r'^$', ArticleListView.as_view()),
#   url(r'^(?P<pk>\d+)/$', ArticleDetailView.as_view()),
#   url(r'create/', ArticleCreateView.as_view()),
#   url(r'^(?P<pk>\d+)/delete/', ArticleDeleteView.as_view()),
#   url(r'^(?P<pk>\d+)/update/', ArticleUpdateView.as_view()),
# ]
