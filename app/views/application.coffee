`import Ember from 'ember'`

ApplicationView = Ember.View.extend
  didInsertElement: ->
    $(document).ready ->
      $.material.init()

`export default ApplicationView`
