/*!
 * @file
 * Application
 */

define([
  "jquery",
  "jqueryui"
], function($) {
  var initialize = function() {
    $(".grid").sortable({
      tolerance: "pointer",
      cursor: "move"
    });
  };
  return { 
    initialize: initialize
  };
});
