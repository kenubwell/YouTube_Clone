from django.http import Http404
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import permission_classes
from rest_framework.views import APIView
from .models import Comment, Reply
from .serializers import CommentSerializer, ReplySerializer 


class VideoComments(APIView):

    @permission_classes([AllowAny])
    def get(self, request, video_id):
        video_comments = Comment.objects.filter(video_id = video_id)
        serializers = CommentSerializer(video_comments, many=True)
        return Response(serializers.data, status=status.HTTP_200_OK)


class CommentPost(APIView):

    @permission_classes([IsAuthenticated])
    def post(self, request):
        serializers = CommentSerializer(data=request.data)
        # the following validates that API user input is true or accurate to the database
        serializers.is_valid(raise_exception=True)
        serializers.save(user=request.user)
        return Response(serializers.data, status=status.HTTP_201_CREATED)


class CommentUpdate(APIView):

    @permission_classes([IsAuthenticated])
    def put(self, request, pk):
        comment = get_object_or_404(Comment, pk=pk)
        serializer = CommentSerializer(comment, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ReplyDetails(APIView):

    @permission_classes([IsAuthenticated])
    def get(self, request, pk):
        replies = Reply.objects.filter(comment_id = pk)
        serializers = ReplySerializer(replies, many=True)
        return Response(serializers.data, status=status.HTTP_200_OK)
        

    @permission_classes([IsAuthenticated])
    def post(self, request, pk):
        comment_id = pk
        temp_data = request.data
        temp_data['comment_id'] = comment_id
        serializers = ReplySerializer(data=temp_data)
        serializers.is_valid(raise_exception=True)
        serializers.save(user=request.user)
        return Response(serializers.data, status=status.HTTP_201_CREATED)


