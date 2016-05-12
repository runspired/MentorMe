import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({
  afterModel() {
    Ember.run.later(() => {
      $(document).ready(function(){
        $('.menu').click(function(){
          $(this).toggleClass('active');
          $(this).parents('.container').find('.navigation').slideToggle('fast');
        });
        $('.actions').hover(
          function(){
            $(this).find('.btn').removeClass('success').addClass('danger').text('Unfollow');
          },
          function(){
            $(this).find('.btn').removeClass('danger').addClass('success').text('Following');
          }
        );
      });
    }, 1000);
  }
});
