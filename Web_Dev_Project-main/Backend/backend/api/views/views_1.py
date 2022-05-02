from django.shortcuts import render
import json
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from api.models import  Category, Product
from api.serializers import  CategorySerializer2, ProductSerializer

# Create your views here.

@csrf_exempt
def category_list(request):
    if request.method == 'GET':
        categories = Category.objects.filter().order_by('id')
        serializer = CategorySerializer2(categories, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = CategorySerializer2(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)

# @csrf_exempt
# def product_list(request):
#     if request.method == 'GET':
#         categories = Category.objects.filter().order_by('id')
#         serializer = CategorySerializer2(categories, many=True)
#         return JsonResponse(serializer.data, safe=False)
#
#     elif request.method == 'POST':
#         data = json.loads(request.body)
#         serializer = CategorySerializer2(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data)
#         return JsonResponse(serializer.errors)
# def company_vacanies(request, company_id):
#     try:
#         vacancies = Vacancy.objects.filter(company=company_id)
#     except Exception as e:
#         return JsonResponse({'message': str(e)})
#
#     vacancies_json = [vacancy.to_json() for vacancy in vacancies]
#     return JsonResponse(vacancies_json, safe=False)

@csrf_exempt
def category_detail(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    if request.method == 'GET':
        serializer = CategorySerializer2(category)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        data = json.loads(request.body)
        serializer = CategorySerializer2(instance=category, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)
    elif request.method == 'DELETE':
        category.delete()
        return JsonResponse({'message': 'deleted'}, status=204)

@csrf_exempt
def product_detail(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    if request.method == 'GET':
        serializer = ProductSerializer(product)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        data = json.loads(request.body)
        serializer = ProductSerializer(instance=category, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)
    elif request.method == 'DELETE':
        product.delete()
        return JsonResponse({'message': 'deleted'}, status=204)


def company_vacancy(request, category_id):
    try:
        products = Product.objects.all().filter(category=category_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    if request.method == 'GET':
        serializer = ProductSerializer(products)
        return JsonResponse(serializer.data)
