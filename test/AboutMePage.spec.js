import { mount, shallowMount } from '@vue/test-utils'
import AboutMe from '@/pages/about-me.vue';
import axios from 'axios';

jest.mock('axios');

describe('HelloWorld.vue', () => {
  it('fetches data from the API and updates the component state', async () => {
    const data = {
      data: {
        results: ['Luke Skywalker', 'Darth Vader']
      }
    };

    axios.get.mockResolvedValue(data);

    const wrapper = shallowMount(AboutMe);

    // manually call the fetch method because of nuxt fetch method
    await wrapper.vm.$options.fetch.call(wrapper.vm);

    // wait for promise to resolve
    await wrapper.vm.$nextTick();

    // check that the state was updated correctly
    expect((wrapper.vm).swapiAPIArray).toEqual(['Luke Skywalker', 'Darth Vader']);
  });
});