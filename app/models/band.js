import { tracked } from '@glimmer/tracking';

export default class Band {
  @tracked name;
  @tracked songs;

  constructor({ id, name, songs, description }, relationships = {}) {
    this.name = name;
    this.id = id;
    this.songs = songs ?? [];
    this.relationships = relationships;
    this.description = description;
  }
}
