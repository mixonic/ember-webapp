import Ember from 'ember';

export default Ember.Component.extend({

  _initializeAppMenu : function(){

    /**
    var self = this.$();
    $("ul > li > a", this.$()).click(function() {

      $('li', self).removeClass('active');
      $(self).closest('li').addClass('active');
      var checkElement = $(self).next();
      if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
        self.closest('li').removeClass('active');
        checkElement.slideUp('normal');
      }
      if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
        $('ul ul:visible', self).slideUp('normal');
        checkElement.slideDown('normal');
      }
      if(self.closest('li').find('ul').children().length == 0) {
        return true;
      } else {
        return false;
      }
    });
     */



    //$('#menu1').navgoco();
    this.$().navgoco();
  }.on('didInsertElement')

});
