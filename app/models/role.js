import Model from 'ember-pouch/model';
import attr from 'ember-data/attribute';

export default Model.extend({
  title: attr('string'),
  type: attr('number')
});
