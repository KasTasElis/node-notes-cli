import { getDb, updateDb, initialiseDb } from "./db";

export const addNewNote = async (note) => {
  const db = await getDb();

  db.notes.push(note);

  updateDb(db);
};

export const removeNote = async (id) => {
  const db = await getDb();

  const noteToRemove = db.notes.find((note) => note.id === id);

  if (!noteToRemove) {
    throw new Error("Note not found!");
  }

  const newNotes = db.notes.filter((note) => note.id !== id);
  const newData = { ...db, notes: newNotes };

  await updateDb(newData);

  return noteToRemove;
};

export const getNotes = async () => {
  const db = await getDb();

  return db.notes;
};

export const getNote = async (id) => {
  const db = await getDb();

  const note = db.notes.find((note) => note.id === id);

  if (!note) {
    throw new Error("Note not found!");
  }

  return note;
};

export const updateNote = async (id, note) => {
  const db = await getDb();

  const noteToUpdate = db.notes.find((note) => note.id === id);

  if (!noteToUpdate) {
    throw new Error("Note not found!");
  }

  const newNote = { ...noteToUpdate, note };

  const newNotes = db.notes.map((item) => {
    if (item.id === id) {
      return newNote;
    }

    return note;
  });

  await updateDb({ ...db, notes: newNotes });

  return newNote;
};

export const resetNotes = async () => {
  initialiseDb();
};
