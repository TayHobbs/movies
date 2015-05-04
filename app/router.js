import Ember from 'ember';
import config from './config/environment';

let Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.resource('theaters', function() {
    this.route('showing',{ path: 'now-showing' });
    this.route('opening');
    this.route('coming',{ path: 'coming-soon' });
  });
  this.resource('dvd', function() {
    this.route('rental', { path: 'top-rentals' });
    this.route('available', { path: 'available-now' });
    this.route('new');
    this.route('upcoming', { path: 'coming-soon' });
  });
});


export default Router;
