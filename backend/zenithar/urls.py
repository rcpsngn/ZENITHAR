from django.urls import path
from web.views import dashboard, finance, personnel, allin, inventory, invoices

urlpatterns = [
    path("dashboard/", dashboard.dashboard_view),
    path("finance/", finance.finance_view),
    path("personnel/", personnel.personnel_view),
    path("allin/", allin.allin_view),
    path("inventory/", inventory.inventory_view),
    path("invoices/", invoices.invoices_view),
]