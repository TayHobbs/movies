import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
import responseMock from '../helpers/response-mock';

let application = null;

module('Display Movies', {
  beforeEach: function() {
    application = startApp();
  },
  afterEach: function(assert) {
    Ember.run(application, 'destroy');
  }
});

test('correctly show movies', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(find('.release-type'), 'New Releases on DVD');
  });
});
