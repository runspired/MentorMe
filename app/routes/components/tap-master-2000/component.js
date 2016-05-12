import Ember from 'ember';

const {
  Component,
  computed,
  observer
  } = Ember;

export default Component.extend({

  madness: 0,
  userAnger: computed('rounded', function() {
    let madness = this.get('rounded');

    if (madness < 25) {
      return 'meh';
    }

    if (madness < 50) {
     return 'so angry my hair is raised';
    }

    if (madness < 100) {
      return 'so angry my blood is boiling!';
    }

    if (madness < 150) {
      return 'so angry TSA won\'t let me through';
    }

  }),

  rounded: computed('madness', function() {
    return Math.round(this.get('madness'));
  }),
  madnessAcceleration: 1.05,

  spinAirplane: observer('madness', function() {
    let madness = Math.round(this.get('madness') * 360 * 10);

    this.$('.spinner-left').velocity({
      duration: 1500,
      rotateZ: `${madness}deg`
    });

    this.$('.spinner-right').velocity({
      duration: 1500,
      rotateZ: `-${madness}deg`
    });
  }),

  actions: {
    beMad() {
      let madness = this.get('madness');
      if (!madness) {
        madness = 5;
      } else {
        madness *= this.get('madnessAcceleration');
      }

      this.set('madness', madness);
    }
  }

});
