from leads.models import Lead
from rest_framework import viewsets, permissions
from .serialzers import LeadSerialzer


# Lead Viewset
class LeadViewSet(viewsets.ModelViewSet):
    queryet = Lead.objects.all()
    permission_classes = [
    permissions.AllowAny
    ]

    serializer_class = LeadSerialzer
