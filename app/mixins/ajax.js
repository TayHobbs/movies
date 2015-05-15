import Ember from 'ember';

export default Ember.Mixin.create({

  _ajax: function(params) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax(params).done(function(response) {
        Ember.run(function() {
          resolve(params.done(response));
        });
      }).fail(function(jqXHR, status, error) {
        Ember.run(null, reject, params.fail(jqXHR, status, error));
      });
    });
  },

  pushErrors: function(jqXHR, errors) {
    return Ember.run(function() {
      if (jqXHR.responseText) {
        let theErrors = Ember.$.parseJSON(jqXHR.responseText);
        for (let key in theErrors) {
          errors.pushObject(`${key.charAt(0).toUpperCase()}${key.substring(1)}: ${theErrors[key]}`);
        }
      } else {
        errors.pushObject("There was a problem reaching our servers. Sorry for the inconvenience.");
      }
    });
  }
});
