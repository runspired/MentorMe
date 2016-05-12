import { faker, Factory } from 'ember-cli-mirage';

function between(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

export default Factory.extend({
  title() {
    return faker.lorem.sentence();
  },
  description() {
    return faker.lorem.sentences(between(1, 3));
  },
  photo() {
    return faker.image.people(500, 300);
  },
  date() {
    return faker.date.recent();
  }

});
