import { notes, notesEpics } from "./notes";
import { auth, authEpics } from "./auth";
import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";

export const rootReducers = combineReducers({ notes, auth });
export const rootEpics = combineEpics(
  notesEpics.addNoteEpic,
  notesEpics.getNotesEpic,
  notesEpics.updateNoteEpic,
  notesEpics.deleteNoteEpic,
  authEpics.loginEpic,
  authEpics.registerEpic,
  authEpics.checkUserEpic,
  authEpics.logoutEpic,
  notesEpics.getMoreNotesEpic
);
