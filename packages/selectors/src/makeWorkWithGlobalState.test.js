import withGlobalState from './makeWorkWithGlobalState';
import registerSelectorsForUserWithGlobalState from './registerSelectorsForUseWithGlobalState';

describe('When I call the function without registering the stub first', () => {
    let selector;
    beforeEach(() => {
        const mockSelector = state => state.bar;
        selector = withGlobalState(mockSelector);
    });
    describe('the returned selector', () => {
        it('will throw because it was not registered to work with global state', () => {
            let error;
            try {
                selector();
            } catch (e) {
                error = e;
            }
            expect(error.message).toMatch(/^This selector was not registered for use with global state/);
        });
    });
});
describe('When I call the function with registering the stub first', () => {
    let selector;
    const mockSelector = state => state.bar;
    beforeEach(() => {
        registerSelectorsForUserWithGlobalState('foo', { foo: mockSelector });
        selector = withGlobalState(mockSelector);
    });
    describe('the returned selector', () =>
        it('works with global state', () => expect(selector({ foo: { bar: 'zab' } })).toEqual('zab')));
    describe('another time', () => {
        it('it will return a cached selector', () => {
            const selector2 = withGlobalState(mockSelector);
            expect(selector2).toEqual(selector);
        });
    });
});
describe('When I call the function with a selector that requires the global state', () => {
    let selectorIn, selectorOut;
    beforeEach(() => {
        selectorIn = state => state.bar;
        selectorIn.requiresGlobalState = true;
        selectorOut = withGlobalState(selectorIn);
    });
    describe('the returned selector', () => it('remains the same', () => expect(selectorOut).toEqual(selectorIn)));
});
