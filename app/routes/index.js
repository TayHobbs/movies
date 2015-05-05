import Ember from 'ember';
import Ajax from '../mixins/ajax';

export default Ember.Route.extend(Ajax, {
  model() {
    Ember.RSVP.all([
      this._ajax({
        type: 'GET',
        url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/new_releases.json?apikey=&limit=50',
        dataType: 'jsonp',
        done: function(data) {
         return data;
        },
        fail: function() {
          console.log("It does not do well to dwell on failure in the index");
        }
      })
    ]).then(function(results) {
      return { movies: results[0]['movies'] };
    });
  }
});
