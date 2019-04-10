import { connect } from 'react-redux';
import { makeWorkWithGlobalState } from '@modular-toolkit/selectors';

export default (selectorMap, mapDispatchToProps = () => {}) =>
    connect(
        state => mapSelectors(selectorMap, state),
        mapDispatchToProps
    );

function mapSelectors(selectorMap, state) {
    return Object.keys(selectorMap).reduce(
        (result, key) => ({
            ...result,
            ...{
                [key]:
                    typeof selectorMap[key] === 'object'
                        ? mapSelectors(selectorMap[key], state)
                        : makeWorkWithGlobalState(selectorMap[key])(state)
            }
        }),
        {}
    );
}
