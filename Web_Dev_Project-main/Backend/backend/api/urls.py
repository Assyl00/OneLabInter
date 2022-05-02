from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token
from api.views import CategoryListAPIView, ProductDetailAPIView, category_product, order_list

urlpatterns = [
    path('login/', obtain_jwt_token),
    # path('categories/', category_list),
    # path('categories/<int:category_id>/', category_detail),
    # path('categories/<int:category_id>/products', product_list),
    # path('products/<int:product_id>/', product_detail),

    path('categories/', CategoryListAPIView.as_view()),

    path('product/<int:pk>/', ProductDetailAPIView.as_view()),

    path('categories/<int:pk>/products', category_product),

    path('orders/', order_list),

    # path('products/<int:pk>/', ProductDetailAPIView.as_view())





    # path('companies/', companies),
    # path('companies/<int:company_id>/', companies_id),
    # path('companies/<int:company_id>/vacancies', company_vacanies),
    # path('vacancies/', vacancies),
    # path('vacancies/<int:vacancy_id>/', vacancies_id),
    # path('vacancies/top_ten/', top_ten_vacancies),
]