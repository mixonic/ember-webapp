import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement : function(){

    this.$('.nav').navgoco({accordion:true});
  }
});
