SearchComponent = Ember.Component.extend
  search: ""
  searchField: ""
  movie : null

  searchFieldWatcher: ( ->
    searchField = @searchField
    @set 'search', searchField
  ).observes('searchField')

  arrangedContent: (->
    content = @get('content')
    search = @get("search")
    return content unless search
    content.filter (movie) ->
      movie.title.toLowerCase().indexOf(search.toLowerCase()) isnt -1
  ).property("search", "content")

  criticAndAudienceScore: ( ->
    @get('content').map( (movie) =>
      if movie.ratings.critics_score >= 65
        movie.criticApproved = true
      if movie.ratings.audience_score >= 65
        movie.audienceApproved = true
    )
  ).on('init')

  actions:

    showDetail: (movie) ->
      @set 'movie', movie

    closeDetail: ->
      @set 'movie', null

`export default SearchComponent`
