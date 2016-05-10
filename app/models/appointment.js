import Model from 'ember-pouch/model';
import attr from 'ember-data/attribute';
import { belongsTo } from 'ember-data/relationships';
import Ember from 'ember';

const {
  computed
  } = Ember;

export default Model.extend({
  dateTime: attr('date', { defaultValue: function() { return Date.now(); } }),
  location: attr('string'),
  mentor: belongsTo('user'),
  mentee: belongsTo('user'),

  isUpcoming: computed('dateTime', function() {
    let appointment = this.get('dateTime');

    return appointment.getTime() > Date.now();
  }),

  isPast: computed.not('isUpcoming'),
  isClaimed: computed.bool('mentee')
});
