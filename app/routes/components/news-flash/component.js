import Ember from 'ember';

const {
  Component,
  run
  } = Ember;

export default Component.extend({
  tagName: '',
  isVoting: false,

  didInsertElement() {
    this._super();
    run.later(() => {
      this.set('isVoting', true);
    }, 5000);
  },

  actions: {
    toggleVotingOn() {
      this.set('isVoting', true);
      return false;
    },
    toggleVotingOff() {
      this.set('isVoting', false);
      return false;
    }
  }

});
