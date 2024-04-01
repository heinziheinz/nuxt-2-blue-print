import { createLocalVue, mount } from '@vue/test-utils';
import Buefy from 'buefy';
import Inspire from "~/pages/inspire.vue";

const localVue = createLocalVue();
localVue.use(Buefy);

describe('Inspire.vue', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(Inspire, { localVue });
    expect(wrapper.vm).toBeTruthy();
  });
});