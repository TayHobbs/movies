import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    Ember.$(document).ready(function() {
      Ember.$.material.init();
    });
  }
});
