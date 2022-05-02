from rest_framework import serializers
# from rest_framework_jwt import serializers

from api.models import Category, Product, Feedback, Order

class CategorySerializer2(serializers.ModelSerializer):
    name = serializers.CharField()

    # products = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    # products = serializers.StringRelat    edField(many=True, read_only=True)

    # products = Product2Serializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ('id', 'name',)
        # read_only_fields = ('name',)


class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer2(read_only=True)
    category_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Product
        fields = ('id', 'name', 'price', 'description', 'category', 'category_id', 'image')

class FeedbackSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    surname = serializers.CharField(max_length=200)
    name = serializers.CharField(max_length=200)
    email = serializers.CharField(max_length=200)
    description = serializers.CharField()
    star = serializers.IntegerField()
    service = serializers.CharField(max_length=100)

    def create(self, validated_data):
        feedback = Feedback.objects.create(name=validated_data['name'])
        return feedback

    def update(self, instance, validated_data):
        instance.name = validated_data['description']
        instance.save()
        return instance

class OrderSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    product = serializers.CharField(read_only=True)
    product_id = serializers.IntegerField(write_only=True)

    def create(self, validated_data):
        order = Order.objects.create(product_id=validated_data['product_id'])
        return order