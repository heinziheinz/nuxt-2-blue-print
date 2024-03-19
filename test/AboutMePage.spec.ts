import { mount, shallowMount } from '@vue/test-utils'
import AboutMe from  '@/pages/about-me.vue';
import axios from 'axios';

// describe('NuxtLogo', () => {
//     test('is a Vue instance', () => {
//       const wrapper = mount(AboutMe)
//       expect(wrapper.vm).toBeTruthy()
//     })
//   });

  jest.mock('axios');

describe('HelloWorld.vue', () => {
  it('fetches data from the API and updates the component state', async () => {
    const data = {
      data: {
        results: ['Luke Skywalker', 'Darth Vader']
      }
    };

    (axios.get as jest.Mock).mockResolvedValue(data);

    const wrapper = shallowMount(AboutMe);

    // wait for promise to resolve
    await wrapper.vm.$nextTick();

    // check that the state was updated correctly
    expect((wrapper.vm as any).swapiAPIArray).toEqual(['Luke Skywalker', 'Darth Vader']);
  });
});