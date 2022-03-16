from django.urls import path
from . import views

urlpatterns = [
    path('comment/', views.get_all_cars),
    path('comment/<int:pk>/', views.CommentDetail.as_view), 
    path('reply/', views.ReplyList.as_view), 

]