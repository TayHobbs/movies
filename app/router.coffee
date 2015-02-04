`import Ember from 'ember';`
`import config from './config/environment';`

Router = Ember.Router.extend
  location: config.locationType


Router.map ->
  @route 'index', path: '/'
  @resource 'theaters', ->
    @route 'showing', path: 'now-showing'
    @route 'opening'
    @route 'coming', path: 'coming-soon'
  @resource 'dvd', ->
    @route 'rental', path: 'top-rentals'
    @route 'available', path: 'available-now'
    @route 'new'
    @route 'upcoming', path: 'coming-soon'


`export default Router;`
