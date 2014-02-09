/*!
 * @file
 * Setup library paths and initialize application
 */

require.config({
  paths: {
    // Library paths
    jquery: "http://code.jquery.com/jquery-1.10.2.min",
    jqueryui: "http://code.jquery.com/ui/1.10.4/jquery-ui"
  }
});

require([
  "app",
], function(App) {
  App.initialize();
});
