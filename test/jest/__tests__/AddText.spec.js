import { describe, expect, it } from '@jest/globals';
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-jest';
import { mount, shallowMount } from '@vue/test-utils';
import AddText from 'components/AddText.vue'

/**
 * addText function test
 */
describe('AddText', () => {
    it('Send Data Event', () => {
      const wrapper = mount(AddText);
      const { vm } = wrapper;
  
      expect(typeof vm.addText).toBe('function');
    });
});