export const ADDING = "ADDING";
export const REMOVE = "REMOVE";

export function addNote(title, content) {

  return { type: ADDING, title: title, content: content };
}

export function removeNote(id) {
  return { type: REMOVE, id: id };
}
