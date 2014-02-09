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
      cursor: "move",
      placeholder: "col-sm-2 col-xs-6 placeholder"
    });
  };
  return { 
    initialize: initialize
  };
});
