import { tracked } from '@glimmer/tracking';

export default class Band {
  @tracked name;
  @tracked songs;

  constructor({ id, name, songs }, relationships = {}) {
    this.name = name;
    this.id = id;
    this.songs = songs ?? [];
    this.relationships = relationships;
  }
}