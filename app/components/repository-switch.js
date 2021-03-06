import Ember from 'ember';
import { computed } from 'ember-decorators/object';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['switch'],
  classNameBindings: ['repository.active:active', 'disabled:disabled', 'disabled:inline-block'],
  attributeBindings: ['aria-checked', 'role'],

  role: 'switch',

  @computed('repository.active')
  'aria-checked'(active) {
    return !!active;
  },

  click() {
    if (!this.get('disabled')) {
      this.get('toggleRepositoryTask').perform();
    }
  },
});
