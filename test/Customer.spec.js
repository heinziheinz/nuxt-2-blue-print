import CustomerIndex from '../pages/customers/index.vue'
import { createLocalVue, mount } from '@vue/test-utils';
import Buefy from 'buefy';
const localVue = createLocalVue();
localVue.use(Buefy);
describe('Customer.vue', () => {
    it('is a Vue instance', () => {
        const wrapper = mount(CustomerIndex, { localVue });
        expect(wrapper.vm).toBeTruthy();
    });
    it('test if is-success class is added to component', async () => {
        const wrapper = mount(CustomerIndex, { localVue });
        const button = wrapper.findAll('button').at(1);
        console.log(button)
        await button.trigger('click');
        expect(wrapper.vm.isSuccess).toBe(true);

        // Check if the b-field element has the is-success class
        const bField = wrapper.find('#b-field');
        expect(bField.props('type')).toBe('is-success');
    });
});