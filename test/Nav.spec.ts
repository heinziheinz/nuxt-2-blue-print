import { mount, shallowMount } from '@vue/test-utils';
import Nav from '@/layouts/partials/nav.vue';

describe('Nav.vue', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(Nav);
    expect(wrapper.vm).toBeTruthy();
  });
});