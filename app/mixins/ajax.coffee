`import Ember from 'ember'`

Ajax = Ember.Mixin.create

  _ajax: (params) ->
    new Ember.RSVP.Promise (resolve, reject) ->
      $.ajax(params).done((response) =>
        Ember.run =>
          resolve(params.done(response))
      ).fail((jqXHR, status, error) =>
        Ember.run(null, reject, params.fail(jqXHR, status, error))
      )

  pushErrors: (jqXHR, errors) ->
    Ember.run =>
      if jqXHR.responseText
        theErrors = $.parseJSON(jqXHR.responseText)
        for key, value of theErrors
          errors.pushObject("#{key.charAt(0).toUpperCase() + key.substring(1)}: #{value}")
      else
          errors.pushObject("There was a problem reaching our servers. Sorry for the inconvenience.")

`export default Ajax`
