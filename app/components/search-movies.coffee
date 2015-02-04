SearchComponent = Ember.Component.extend
  search: ""
  titleFilter: null
  searchField: ""

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
  ).property("search", "content", "titleFilter")

  actions:

    query: ->
      query = @get("search")
      @set "titleFilter", query
      return

`export default SearchComponent`
