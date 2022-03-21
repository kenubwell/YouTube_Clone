from django.urls import path
from . import views

urlpatterns = [
    path('comment/', views.CommentPost.as_view()),
    path('comment/<int:pk>/', views.CommentUpdate.as_view()), 
    path('comment/reply/<int:pk>/', views.ReplyDetails.as_view()),
    path('comment/<slug:video_id>/', views.VideoComments.as_view()),

]