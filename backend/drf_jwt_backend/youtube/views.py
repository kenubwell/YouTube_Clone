from django.http import Http404
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import permission_classes
from rest_framework.views import APIView
from .models import Comment, Reply
from .serializers import CommentSerializer, ReplySerializer 



class CommentsList(APIView):

    @permission_classes([AllowAny])
    def get(self, request):
        comments = Comment.objects.all()
        # the following serializer is going to take our songs table and convert to json
        serializers = CommentSerializer(comments, many=True)
        return Response(serializers.data, status=status.HTTP_200_OK)


    @permission_classes([IsAuthenticated])
    def post(self, request):
        serializers = CommentSerializer(data=request.data)
        # the following validates that API user input is true or accurate to the database
        serializers.is_valid(raise_exception=True)
        serializers.save(user=request.user)
        return Response(serializers.data, status=status.HTTP_201_CREATED)



class CommentDetails(APIView):

    @permission_classes([IsAuthenticated])
    def get(self, request, pk):
        comment = get_object_or_404(Comment.objects.filter(user_id=request.user.id), pk=pk)
        serializer = CommentSerializer(comment)
        return Response(serializer.data, status=status.HTTP_200_OK)


    @permission_classes([IsAuthenticated])
    def put(self, request, pk, format=None):
        comment = get_object_or_404(Comment, pk=pk)
        serializer = CommentSerializer(comment, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ReplyComment(APIView):
    @permission_classes([IsAuthenticated])
    def post(self, request, pk):
        comment_id = pk
        temp_data = request.data
        temp_data['comment_id'] = comment_id
        serializers = ReplySerializer(data=temp_data)
        serializers.is_valid(raise_exception=True)
        serializers.save(user=request.user)
        return Response(serializers.data, status=status.HTTP_201_CREATED)


