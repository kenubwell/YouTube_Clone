from django.urls import path
from . import views

urlpatterns = [
    path('comment/', views.CommentsList.as_view()),
    path('comment/<int:pk>/', views.CommentDetail.as_view()), 
    path('reply/', views.ReplyList.as_view()), 

]