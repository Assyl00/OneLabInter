from django.db import models


class MyManager(models.Manager):

    def greater_price(self, size):
        return self.filter(price__gt=size)

    def get_desserts(self):
        return super().get_queryset().filter(category_id=2)

    def less_price(self):
        return self.filter(price__gt=20)

    def get_drinks(self):
        return super().get_queryset().filter(name='DRINKS')

class Category(models.Model):
    name = models.CharField(max_length=300)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"

    objects = models.Manager()
    category_mng = MyManager()


class Product(models.Model):
    name = models.CharField(max_length=300)
    description = models.TextField()
    price = models.FloatField()
    image = models.ImageField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, related_name="vacancies")

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'price': self.price,
            'image': self.image,
            'category': self.category.to_json()
        }

    class Meta:
        verbose_name = "Product"
        verbose_name_plural = "Products"
    objects = models.Manager()
    product_mng = MyManager()

class Feedback(models.Model):
    surname = models.CharField(max_length=200)
    name = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    description = models.TextField()
    star = models.IntegerField()
    service = models.CharField(max_length=100)

    def to_json(self):
        return {
            'id': self.id,
            'surname': self.surname,
            'name': self.name,
            'email': self.email,
            'description': self.description,
            'star': self.star,
            'service': self.service
        }

    class Meta:
        verbose_name = "Feedback"
        verbose_name_plural = "Feedbacks"

class Order(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True,
                                 related_name='orders')

    # tags = models.ManyToManyField(Tag)

    class Meta:
        verbose_name = 'Order'
        verbose_name_plural = 'Orders'

    def __str__(self):
        return f'{self.id}: {self.product}'
