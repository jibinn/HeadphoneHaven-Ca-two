from django.urls import path
from base.views import product_views as views

urlpatterns = [
    path('create/', views.createProduct, name='product-create'),
    path('upload/', views.uploadimage, name='image-upload'),
    path('update/<str:pk>/', views.updateProducts, name='product-update'),
    path('delete/<str:pk>/', views.deleteProduct, name='product-delete'),
    path('<str:pk>/reviews/', views.createProducReview, name='create-review'),
    path('top/', views.getTopProducts, name='get-top-products'),
    path('<str:pk>/', views.getProduct, name='product-detail'),
    path('', views.getProducts, name='products'),
]
