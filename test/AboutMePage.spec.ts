import { mount } from '@vue/test-utils'
import AboutMe from './../pages/about-me.vue';

describe('NuxtLogo', () => {
    test('is a Vue instance', () => {
      const wrapper = mount(AboutMe, {
        propsData: {
          secondMessage: 'Test message',
        },
      });
      expect(wrapper.vm).toBeTruthy();
    });
  });