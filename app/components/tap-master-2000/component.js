import Ember from 'ember';

const {
  Component,
  observer
  } = Ember;

export default Component.extend({

  madness: 0,
  madnessAcceleration: 1.1,

  spinAirplane: observer('madness', function() {
    let madness = Math.round(this.get('madness') * 360);

    this.$('.spinner').velocity({
      duration: 300,
      rotateZ: `${madness}deg`
    });
  }),

  actions: {
    beMad() {
      let madness = this.get('madness');
      if (!madness) {
        madness = 10;
      } else {
        madness *= this.get('madnessAcceleration');
      }

      console.log('MAD!', madness);
      this.set('madness', madness);
    }
  }

});
