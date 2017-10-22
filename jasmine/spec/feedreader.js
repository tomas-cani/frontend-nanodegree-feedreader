/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This is our first test suite - a test suite just contains
  * a related set of tests. This suite is all about the RSS
  * feeds definitions, the allFeeds variable in our application.
  */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    it('has an url property', function() {
      allFeeds.forEach((feed) => {
        expect(feed.url).toBeDefined();
        expect(feed.url).toBeTruthy();
      });
    });

    it('has a name property', function() {
      allFeeds.forEach((feed) => {
        expect(feed.name).toBeDefined();
        expect(feed.name).toBeTruthy();
      });
    });
  });

  describe('The menu', function() {

    it('is hidden by default', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

    it('changes visibility when the menu icon is clicked', function() {
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(false);
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });

  describe('Initial Entries', function(done) {
    beforeEach(function(done) {
      loadFeed(0, done);
    });

    it('contains at least a single entry', function() {
      expect($('.feed .entry').length >= 1).toBe(true);
    });
  });

  describe('New Feed Selection', function() {
    let feeds1;
    let feeds2;

    beforeEach(function(done) {
     loadFeed(0, function() {
       feeds1 = $('.feed .entry-link');
       loadFeed(1, function() {
         feeds2 = $('.feed .entry-link');
         done();
       });
     });
   });

    it('should change content', function() {
      feeds1.each(function(index) {
        expect(this.toString()).not.toEqual(feeds2[index].toString());
      })
    });
  });

}());
