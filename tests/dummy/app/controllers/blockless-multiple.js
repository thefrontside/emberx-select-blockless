import Ember from 'ember';
import Folks from 'dummy/mixins/folks';

export default Ember.Controller.extend(Folks, {
  isDisabled: false,
  tagged: Ember.computed.reads('content'),
  actions: {
    tagYouAreIt: function(object) {
      this.set('tagged', object);
    },
    removeFolk: function(folk) {
      this.get('folks').removeObject(folk);
    }
  }
});
