from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from .models import Notes
from .serializers import (
    NoteSerializer,
    CreateUserSerializer,
    UserSerializer,
    LoginUserSerializer,
)
from knox.models import AuthToken


class NoteViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = NoteSerializer

    def get_queryset(self):
        return self.request.user.notes.all().order_by("-created_at")

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class LoadMoreNotes(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = NoteSerializer

    def get(self, request, *args, **kwargs):
        flagId = kwargs["id"]
        notes = (
            Notes.objects.filter(owner=self.request.user)
            .filter(id__lt=flagId)
            .order_by("-created_at")[:10]
        )
        isLast = False
        if len(notes) < 10:
            isLast = True
        serializer = self.get_serializer(notes, many=True, context={"request": request})
        return Response({"notes": serializer.data, "isLast": isLast})


class RegistrationAPI(generics.GenericAPIView):
    serializer_class = CreateUserSerializer

    def post(self, request, *args, **kwargs):
        if len(request.data["username"]) < 6 or len(request.data["password"]) < 4:
            body = {"message": "short field"}
            return Response(body, status=status.HTTP_400_BAD_REQUEST)
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response(
            {
                "user": UserSerializer(
                    user, context=self.get_serializer_context()
                ).data,
                "token": AuthToken.objects.create(user),
            }
        )


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response(
            {
                "user": UserSerializer(
                    user, context=self.get_serializer_context()
                ).data,
                "token": AuthToken.objects.create(user),
            }
        )


class UserAPI(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
