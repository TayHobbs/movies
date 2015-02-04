`import Ember from 'ember';`
`import Ajax from '../../mixins/ajax';`

ComingRoute = Ember.Route.extend(Ajax,
  model: ->
    Ember.RSVP.all([
      @_ajax
        type: 'GET'
        url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json?apikey='
        dataType: 'jsonp'
        done: (data) ->
          console.log data
          data
        fail: (data) ->
          console.log "It does not do well to dwell on failure"
    ]).then (results) ->
      movies: results[0]['movies']
)

`export default ComingRoute;`


