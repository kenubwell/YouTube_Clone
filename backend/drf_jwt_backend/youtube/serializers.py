from dataclasses import field
from rest_framework import serializers
from .models import Comment, Reply
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username"]

class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer(many =False, read_only=True)
    class Meta:
        model = Comment
        fields = ['id', 'video_id', 'text', 'likes', 'dislikes', 'user_id']
        depth = 1


class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields = ['id', 'text', 'comment_id', 'user_id']
        depth = 1

    comment_id = serializers.IntegerField(write_only = True)