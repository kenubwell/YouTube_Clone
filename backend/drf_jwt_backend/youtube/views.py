from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.views import APIView
from .models import Comment, Reply
from .serializers import CommentSerializer, ReplySerializer 

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

class CommentsList(APIView):
    # A class-based view that lists all songs or creates a new song

    @permission_classes([AllowAny])
    def get(self, request, format=None):
        comments = Comment.objects.all()
        # the following serializer is going to take our songs table and convert to json
        serializers = CommentSerializer(comments, many=True)
        return Response(serializers.data, status=status.HTTP_200_OK)


    @permission_classes([IsAuthenticated])
    def post(self, request, format=None):
        serializers = CommentSerializer(data=request.data)
        # the following validates that API user input is true or accurate to the database
        serializers.is_valid(raise_exception=True)
        serializers.save()
        return Response(serializers.data, status=status.HTTP_201_CREATED)

class CommentDetail(APIView):
    # A class-based view that retrieves (by id), updates, or deletes a song

    @permission_classes([IsAuthenticated])
    def get(self, request, pk, format=None):
        comment = get_object_or_404(Comment, pk=pk)
        serializer = CommentSerializer(comment)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @permission_classes([IsAuthenticated])
    def put(self, request, pk, format=None):
        comment = get_object_or_404(Comment, pk=pk)
        serializer = CommentSerializer(comment, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    @permission_classes([IsAuthenticated])
    def post(self, request, format=None):
        serializers = CommentSerializer(data=request.data)
        # the following validates that API user input is true or accurate to the database
        serializers.is_valid(raise_exception=True)
        serializers.save()
        return Response(serializers.data, status=status.HTTP_201_CREATED)


# @api_view(['GET', 'POST'])
# @permission_classes([IsAuthenticated])
# def user_cars(request):
#     print(
#         'User ', f"{request.user.id} {request.user.email} {request.user.username}")
#     if request.method == 'POST':
#         serializer = CarSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save(user=request.user)
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#     elif request.method == 'GET':
#         cars = Car.objects.filter(user_id=request.user.id)
#         serializer = CarSerializer(cars, many=True)
#         return Response(serializer.data)
