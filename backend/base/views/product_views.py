from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework.response import Response
from base.models import Product,Review
from rest_framework import status
from base.serializers import ProductSerializer
from django.core.paginator import Paginator,EmptyPage,PageNotAnInteger

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

@api_view(['GET'])
def getProducts(request):
    query = request.query_params.get('keyword')
    if query is None:
        query = ''

    products = Product.objects.filter(name__icontains=query).order_by('-createdAt')

    page = request.query_params.get('page')
    paginator = Paginator(products, 8)

    try:
        products = paginator.page(page)
    except PageNotAnInteger:
        products = paginator.page(1)
    except EmptyPage:
        products = paginator.page(paginator.num_pages)

    serializer = ProductSerializer(products, many=True)
    return Response({'products': serializer.data, 'page': products.number, 'pages': paginator.num_pages})




@api_view(['GET'])



# Retrieve a single product by its primary key
@api_view(['GET'])
def getProduct(request, pk):
    try:
        # Try to retrieve the product with the specified primary key
        product = Product.objects.get(_id=pk)
        # Serialize the product using the ProductSerializer
        serializer = ProductSerializer(product, many=False)
        # Return the serialized product data in the response
        return Response(serializer.data)
    except Product.DoesNotExist:
        # If the product does not exist, return a 404 Not Found response
        return Response({'detail': 'Product not found.'}, status=status.HTTP_404_NOT_FOUND)

# Create a new product (accessible only to admin users)
@api_view(['POST'])
@permission_classes([IsAdminUser])
def createProduct(request):
    # Get the current user making the request
    user = request.user

    # Create a new product with default values
    product = Product.objects.create(
        user=user,
        name='sample name',
        price=0,
        brand='sample brand',
        countInStock=0,
        category='sample category',
        description=''
    )

    # Serialize the newly created product using the ProductSerializer
    serializer = ProductSerializer(product, many=False)
    
    # Return the serialized product data in the response
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateProducts(request, pk):
    data = request.data
    product = Product.objects.get(_id=pk)
    product.name = data['name']
    product.price = data['price']
    product.brand= data['brand']
    product.countInStock = data['countInStock']
    product.category = data['category']
    product.description = data['description']
    product.save()

    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)



@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteProduct(request,pk):
    product = Product.objects.get(_id=pk)
    product.delete()
    return Response('product deleted')

@api_view(['POST'])
def uploadimage(request):
    data =request.data
    product_id=data['product_id']
    product= Product.objects.get(_id=product_id)
    product.image = request.FILES.get('image')
    product.save()
    return Response('Image was Uploaded')

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createProducReview(request, pk):
    user = request.user
    product = Product.objects.get(_id=pk)
    data = request.data
    print("data:", data)
    print("rating:", data.get('rating'))

    if 'rating' not in data:
        content = {'detail': 'Rating field is missing'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)
    
    # 1 review already exists
    alreadyExists = product.review_set.filter(user=user).exists()
    if alreadyExists:
        content = {'detail': 'Product already reviewed'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    
    # 2 no rating or 0 
    elif float(data['rating']) == 0.0 or float(data['rating']) == 0.5 or float(data['rating']) == 5.0:
        content = {'detail': 'Please select a rating'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)
    
    # 3 create Review
    else:
        review = Review.objects.create(
            user=user,
            product=product,
            name=user.first_name,
            rating=data['rating'],
            comment=data['comment'],
        )
        reviews = product.review_set.all()
        product.numReviews = len(reviews)
        
        total = 0
        for i in reviews:
            total += i.rating
            
        product.rating = total / len(reviews)
        product.save()
        
        return Response('Review was added')

