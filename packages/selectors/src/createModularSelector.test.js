import registerSelectorsForUseWithGlobalState from './registerSelectorsForUseWithGlobalState';
import createModularSelector from './createModularSelector';

const getAProp = stateA => stateA.someProp;
const getBProp = stateB => stateB.someProp;

registerSelectorsForUseWithGlobalState('moduleA', { getAProp });
registerSelectorsForUseWithGlobalState('moduleB', { getBProp });

const state = {
    moduleA: { someProp: 'AAA' },
    moduleB: { someProp: 'BBB' }
};

describe('When I call the createModularSelector function', () => {
    let selector;
    beforeAll(() => (selector = createModularSelector(getAProp, getBProp, (AAA, BBB) => AAA + BBB)));
    describe('the resulting selector', () => {
        it('works as expected', () => expect(selector(state)).toEqual('AAABBB'));
        it('has an indicator that it requires global state', () => expect(selector.requiresGlobalState).toEqual(true));
    });
});
