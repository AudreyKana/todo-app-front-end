export default class Tache {
  constructor(
    title,
    description = "",
    date,
    heure,
    important = false,
    deleted = false,
    status = "In Progress",
    image
  ) {
    this.id = Date.now();
    this.title = title;
    this.description = description;
    this.date = date;
    this.heure = heure;
    this.important = important;
    this.deleted = deleted;
    this.status = status;
    this.image = image;
  }
}
