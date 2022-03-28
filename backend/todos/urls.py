from django.urls import path
from .views import TodoListView, DetailTodo

urlpatterns = [
    path('', TodoListView.as_view()),
    path('<int:pk>/', DetailTodo.as_view()),
]
