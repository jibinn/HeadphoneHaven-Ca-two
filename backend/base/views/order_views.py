from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework.response import Response
from base.models import Product,Order,ShippingAddress,OrderItem
from rest_framework import status
from base.serializers import OrderSerializer
from rest_framework.authentication import TokenAuthentication
from datetime import datetime

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addOrderItems(request):
    user = request.user
    data = request.data
    orderItems = data.get('orderItems', [])  # Use .get() method with a default value to avoid KeyError

    if len(orderItems) == 0:
        return Response({'details': 'No order items'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        # CREATE ORDER
        order = Order.objects.create(
            user=user,
            paymentMethod=data['paymentMethod'],
            taxPrice=data['taxPrice'],
            shippingPrice=data['shippingPrice'],
            totalPrice=data['totalPrice']
        )

        # Create shipping address
        shipping = ShippingAddress.objects.create(
            order=order,
            address=data['shippingAddress']['address'],
            city=data['shippingAddress']['city'],
            postalCode=data['shippingAddress'].get('postalCode', ''),  # Use .get() method with a default value
            country=data['shippingAddress']['country'],
        )

        # Create order items and set order to order items relationship
        for item in orderItems:
            product = Product.objects.get(_id=item['product'])

            order_item = OrderItem.objects.create(
                product=product,
                order=order,
                name=product.name,
                qty=item['qty'],
                price=item['price'],
                image=product.image.url
            )

            # Update stock
            product.countInStock -= order_item.qty
            product.save()

        serializer = OrderSerializer(order, many=False)
        return Response(serializer.data)



@api_view(['GET'])
@permission_classes([IsAuthenticated])  
def getMyOrders(request):
    user=request.user
    orders=Order.objects.filter(user=user)
    serializer=OrderSerializer(orders,many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])  
def getMyOrders(request):
    orders=Order.objects.all()
    serializer=OrderSerializer(orders,many=True)
    return Response(serializer.data)



@api_view(['GET'])
@permission_classes([IsAuthenticated])   
def getOrderById(request,pk): 
    
    user=request.user
    try:
         order=Order.objects.get(_id=pk)  
         if user.is_staff or order.user == user:
           serializer =OrderSerializer(order,many=False) 
           return Response(serializer.data)
         else:
            Response({'detail':'Not authorized to view the order'},status=status.HTTP_400_BAD_REQUEST)
    
    except:
        return Response({'deatil':'Order does not exist'},status=status.HTTP_400_BAD_REQUEST)
 
 
    
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateOrderToPaid(request,pk):
    order =Order.objects.get(_id=pk)
    order.isPaid=True
    order.paidAt=datetime.now()
    order.save()
    return Response('order was paid')
    
        
@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateOrderToDelivered(request,pk):
    order =Order.objects.get(_id=pk)
    order.isDelivered=True
    order.deliveredAt=datetime.now()
    order.save()
    return Response('order was delivered')    
    