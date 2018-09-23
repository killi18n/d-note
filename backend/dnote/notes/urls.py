from django.conf.urls import url
from .views import NoteViewSet, RegistrationAPI, LoginAPI, UserAPI, LoadMoreNotes


note_list = NoteViewSet.as_view({"get": "list", "post": "create"})

note_detail = NoteViewSet.as_view(
    {"get": "retrieve", "patch": "partial_update", "delete": "destroy"}
)


urlpatterns = [
    url("^notes/$", note_list, name="note-list"),
    url("^notes/(?P<pk>[0-9]+)/$", note_detail, name="note-detail"),
    url("^notes/next/(?P<id>[0-9]+)/$", LoadMoreNotes.as_view()),
    url("^auth/register/$", RegistrationAPI.as_view()),
    url("^auth/login/$", LoginAPI.as_view()),
    url("^auth/user/$", UserAPI.as_view()),
]
