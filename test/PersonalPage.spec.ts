import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import PersonalInfo from '@/pages/personal-info/_id.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe('PersonalInfo', () => {
  it('renders the correct ID', async () => {
    router.push('/personal-info/123');
    const wrapper = mount(PersonalInfo, {
      localVue,
      router,
      data() {
        return {
          id: '123'
        }
      }
    });

    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toContain('Personal Info for ID: 123');
  });
});