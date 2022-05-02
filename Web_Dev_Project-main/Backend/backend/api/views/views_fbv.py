from rest_framework.decorators import api_view, permission_classes

from django.http.request import HttpRequest
from django.http.response import HttpResponse, JsonResponse
from rest_framework.permissions import IsAuthenticated

from rest_framework.request import Request
from rest_framework.response import Response

from api.models import Category, Product, Feedback, Order
from api.serializers import ProductSerializer, CategorySerializer2, FeedbackSerializer, OrderSerializer


# @api_view(['GET', 'POST'])
# def category_list(request):
#     if request.method == 'GET':
#         categories = Category.objects.filter(name__contains='5').order_by('-id')
#         serializer = CategorySerializer2(categories, many=True)
#         return Response(serializer.data)
#
#     elif request.method == 'POST':
#         serializer = CategorySerializer2(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors)
#
#
# @api_view(['GET', 'PUT', 'DELETE'])
# def category_detail(request, category_id):
#     try:
#         category = Category.objects.get(id=category_id)
#     except Category.DoesNotExist as e:
#         return Response({'message': str(e)}, status=400)
#
#     if request.method == 'GET':
#         serializer = CategorySerializer2(category)
#         return Response(serializer.data)
#     elif request.method == 'PUT':
#         serializer = CategorySerializer2(instance=category, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors)
#     elif request.method == 'DELETE':
#         category.delete()
#         return Response({'message': 'deleted'}, status=204)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def feedback_list(request):
    if request.method == 'GET':
        feedbacks = Feedback.objects.all()
        serializer = FeedbackSerializer(feedbacks, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = FeedbackSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


@api_view(['GET'])
def category_product(request, pk):
    if request.method == 'GET':
        products = Product.objects.all().filter(category=pk)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def order_list(request):
    if request.method == 'GET':
        categories = Order.objects.all()
        serializer = OrderSerializer(categories, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
