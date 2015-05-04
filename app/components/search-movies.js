import Ember from 'ember';

export default Ember.Component.extend({
  search: "",
  searchField: "",
  movie : null,

  searchFieldWatcher: function() {
    let searchField = this.searchField;
    this.set('search', searchField);
  }.observes('searchField'),

  arrangedContent: function() {
    let content = this.get('content');
    let search = this.get("search");
    if (!search) { return content; }
    content.filter((movie) => {
      return movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
  }.property("search", "content"),

  criticAndAudienceScore: function() {
    this.get('content').map((movie) => {
      if (movie.ratings.critics_score  >= 65 ) { movie.criticApproved = true;         }
      if (movie.ratings.critics_score  < 0   ) { movie.ratings.critics_score = 'N/A'; }
      if (movie.ratings.audience_score >= 65 ) { movie.audienceApproved = true;       }
    });
  }.on('init'),

  actions: {
    showDetail(movie) {
      this.set('movie', movie);
    },

    closeDetail() {
      this.set('movie', null);
    }
  }

});
