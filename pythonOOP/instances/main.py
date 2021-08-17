class House:
    
    def __init__(self, price):
        self.price = price
        # assign the value of the variable price to the instance attribute "price" of the instance that is being created (self refers to the instance that is being created)

class Backpack:

    def __init__(self, color, size):
        self.items = []
        self.color = color
        self.size = size


my_backpack = Backpack("purple", "large")
print(my_backpack.color)
print(my_backpack.size)

class Circle:

    def __init__(self, radius):
        self.radius = radius
        self.color = "Blue"


# y = Circle(5)
# print(y.color)

class Rectangle:

    def __init__(self, length, width):
        self.length = length
        self.width = width

class Movie:

    def __init__(self, title, year, language, rating):
        self.title = title
        self.year = year
        self.language = language
        self.rating = rating

