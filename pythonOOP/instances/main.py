class House:
    
    def __init__(self, price):
        self.price = price
        # assign the value of the variable price to the instance attribute "price" of the instance that is being created (self refers to the instance that is being created)


# class Backpack:

#     max_num_items = 10

#     def __init__(self, color, size):
#         self.items = []
#         self.color = color
#         self.size = size


# my_backpack = Backpack("purple", "large")
# your_backpack = Backpack("blue", "medium")
# print(my_backpack.max_num_items)
# print(your_backpack.max_num_items)
# print(Backpack.max_num_items)

# Backpack.max_num_items = 15

# print(Backpack.max_num_items)
# print(my_backpack.size)
# print(my_backpack.items)
# my_backpack.items = ["binder", "notebook", "pencil"]
# print(my_backpack.items)


# class Circle:

#     def __init__(self, radius):
#         self.radius = radius
#         self.color = "Blue"


# y = Circle(5)
# print(y.color)


class Rectangle:

    def __init__(self, length, width):
        self.length = length
        self.width = width


# my_rectangle = Rectangle(5,12)
# print(my_rectangle)
# print(my_rectangle.length)
# print(my_rectangle.width)


# class Movie:

#     def __init__(self, title, year, language, rating):
#         self.title = title
#         self.year = year
#         self.language = language
#         self.rating = rating


# my_fav_movie = Movie("Pride and Prejudice", 2005, "English", 4.8)
# print("My Favorite Movie:")
# print(my_fav_movie.title)
# print(my_fav_movie.year)
# print(my_fav_movie.language)
# print(my_fav_movie.rating)

# your_fav_movie = Movie("Titanic", 1997, "English", 4.6)
# print("Your Favorite Movie:")
# print(your_fav_movie.title)
# print(your_fav_movie.year)
# print(your_fav_movie.language)
# print(your_fav_movie.rating)

# class Circle:

#     def __init__(self, color, radius=5):
#         self.color = color
#         self.radius = radius


# my_circle = Circle("Blue")
# your_circle = Circle("Red", 10)

# print(my_circle.radius)
# # print(your_circle.radius)

# print(my_circle.color)

# my_circle.color = "Purple"

# print(my_circle.color)


class Circle:

    radius = 5

    def __init__(self, color):
        self.color = color


# my_circle = Circle("Blue")
# your_circle = Circle("Red")

# print(Circle.radius)
# print(my_circle.radius)
# print(your_circle.radius)

# Circle.radius = 10

# print(Circle.radius)
# print(my_circle.radius)
# print(your_circle.radius)

# my_circle = Circle("Blue")
# your_circle = Circle("Red", 10)

# print(my_circle.radius)
# # print(your_circle.radius)

# print(my_circle.color)

# my_circle.color = "Purple"

# print(my_circle.color)


class Dog:

    species = "Canis Lupus"
    
    def __init__(self, name, age, breed):
        self.name = name
        self.age = age
        self.breed = breed


# Buddha = Dog("Buddha", 6, "Pitsky")
# Bella = Dog("Bella", 6, "Lab")

# print(Buddha.species)
# print(Bella.species)

# class Movie:

#     id_counter =  1

#     def __init__(self, title, rating):
#         self.id = Movie.id_counter
#         self.title = title
#         self.rating = rating

#         Movie.id_counter += 1


# Up = Movie("Up", 4.5)
# InsideOut = Movie("Inside Out", 3.9)

# print(Up.id)
# print(InsideOut.id)

class Pizza:

    price = 12.99

    def __init__(self, desciption, toppings, crust):
        self.description = desciption
        self.toppings = toppings
        self.crust = crust


# print(Pizza.price)

# my_pizza = Pizza("Marg", ["Basil", "Mushrooms"], "Pan")
# print(my_pizza.price)

# Pizza.price = 13.99

# print(Pizza.price)
# print(my_pizza.price)

class Car:

    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self._year = year


# my_car = Car("Porsche", "911 Carrera", 2020)
# print(my_car.year)
# my_car.year = 5600
# print(my_car._year)

class Student:

    def __init__(self, student_id, name, age, gpa):
        self.student_id = student_id
        self.name = name
        self._age = age
        self.gpa = gpa


student_nora = Student("245AFS", "Nora Nav", 15, 3.96)
# print(student_nora.age)

class Backpack:

    def __init__(self):
        self._items = []


# my_backpack = Backpack()
# print(my_backpack.items)
# print(my_backpack._items)

class Movie:

    id_counter =  1

    def __init__(self, title, year, language, rating):
        self._id = Movie.id_counter
        self.title = title
        self.year = year
        self.language = language
        self.rating = rating

        Movie.id_counter += 1


Elf = Movie("Elf", 2008, "English", 4.7)
Grind = Movie("Grind", 2001, "English", 3.5)

print(Elf._id)
print(Grind._id)


