import Model from 'ember-pouch/model';
import attr from 'ember-data/attribute';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  title: attr('string'),
  description: attr('string'),
  duration: attr('string'),
  user: belongsTo('user')
});
