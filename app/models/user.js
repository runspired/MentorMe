import Model from 'ember-pouch/model';
import attr from 'ember-data/attribute';
import { hasMany, belongsTo } from 'ember-data/relationships';
import Ember from 'ember';
import md5 from 'npm:blueimp-md5';

const {
  computed
  } = Ember;

export default Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  location: attr('string', { defaultValue: 'Chicago, IL' }),
  email: attr('string'),

  activeRole: belongsTo('role'),
  roles: hasMany('role'),

  photo: computed('email', function() {
    let email = md5(this.get('email'));

    return `https://www.gravatar.com/avatar/${email}`;
  }),

  experiences: hasMany('experience'),
  keywords: hasMany('keyword'),

  appointments: hasMany('appointment'),

  pitch: attr('string'),
  title: attr('string'),
  phoneNumber: attr('string')

});
