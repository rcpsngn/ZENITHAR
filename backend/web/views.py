from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from finance.models import Transaction
from django.contrib.auth.decorators import login_required

def login_view(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return redirect("web-dashboard")
    return render(request, "login.html")

def logout_view(request):
    logout(request)
    return redirect("web-login")

@login_required
def dashboard(request):
    transactions = Transaction.objects.filter(user=request.user)
    income = sum(t.amount for t in transactions if t.type == "income")
    expense = sum(t.amount for t in transactions if t.type == "expense")
    balance = income - expense

    return render(request, "dashboard.html", {
        "transactions": transactions,
        "income": income,
        "expense": expense,
        "balance": balance
    })