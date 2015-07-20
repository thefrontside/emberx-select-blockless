import Ember from 'ember';
import XSelectComponent from 'emberx-select/components/x-select';
import layout from '../templates/components/x-select-blockless';

export default XSelectComponent.extend({
  layout: layout,

  /**
   * Auxiliary computed property that replaces `content.`
   * in `optionValuePath`.
   *
   * @private
   * @property _valuePath
   */
  _valuePath: Ember.computed('optionValuePath', function() {
    var optionValuePath = this.get('optionValuePath');
    if (optionValuePath) {
      return optionValuePath.replace(/^content\.?/, '');
    }
    return null;
  }),

  /**
   * Auxiliary computed property that replaces `content.`
   * in `optionLabelPath`.
   *
   * @private
   * @property _labelPath
   */
  _labelPath: Ember.computed('optionLabelPath', function() {
    var optionLabelPath = this.get('optionLabelPath');

    if (optionLabelPath) {
      return optionLabelPath.replace(/^content\.?/, '');
    }
    return null;
  }),


  /**
   * Auxiliary computed array that holds `content` array
   * values and their labels. Used only in the blockless version.
   *
   * @private
   * @property _optionValues
   */
  _optionValues: Ember.computed('_labelPath', '_valuePath', 'content.[]', function() {
    var content = this.get('content') || [];
    return content.map((object) => {
      var label;
      var value = object;
      var valuePath = this.get('_valuePath');
      var labelPath = this.get('_labelPath');

      if (valuePath) {
        value = Ember.get(object, valuePath);
      }

      if (labelPath) {
        label = Ember.get(object, labelPath);
      } else {
        label = value;
      }

      return {
        value: value,
        label: label
      };
    });
  })
});
