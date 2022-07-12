import {
    createStore
} from '@harlem/core';

import TARGET_METHOD_KEY from '../enums/target-method-key';
import COLOUR_METHOD_KEY from '../enums/colour-method-key';

type IState = {
    targetMethod: TARGET_METHOD_KEY;
    targetKey: string;
    colourMethod: COLOUR_METHOD_KEY;
    customColour: string;
    svg: {
        elements: any[];
        result: string;
    }
}

const STATE = {
    targetMethod: TARGET_METHOD_KEY.currentSelection,
    targetKey: '',
    colourMethod: COLOUR_METHOD_KEY.inherit,
    customColour: '',
    svg: {
        elements: [],
        result: '',
    }
} as IState;

export const {
    state,
    getter,
    mutation,
    ...store
} = createStore('user', STATE);


// Target method
export const targetMethod = getter('target-method', state => {
    return state.targetMethod;
});

export const targetKey = getter('target-key', state => {
    return state.targetKey;
});

export const setTargetMethod = mutation('set-target-method', (state, value: TARGET_METHOD_KEY) => {
    state.targetMethod = value;
});

export const setTargetKey = mutation('set-target-key', (state, value: string) => {
    state.targetKey = value;
});


// Colour method
export const colourMethod = getter('colour-method', state => {
    return state.colourMethod;
});

export const setColourMethod = mutation('set-colour-method', (state, value: COLOUR_METHOD_KEY) => {
    state.colourMethod = value;
});

export const customColour = getter('customColour', state => {
    return state.customColour;
});

export const setCustomColour = mutation('customColour', (state, value: string) => {
    state.customColour = value;
});


// SVG
export const svgElements = getter('svg-elements', state => {
    return state.svg.elements;
});

export const svgResult = getter('svg-result', state => {
    return state.svg.result;
});

export const updateSvgElements = mutation('update-svg-elements', (state, elementEntry: string) => {
    return state.svg.elements.push(elementEntry);
});

export const resetSvgElements = mutation('revert-svg-elements', (state, _) => {
    return state.svg.elements = [];
})

export const updateSvgResult = mutation('update-svg-result', (state, value: string) => {
    return state.svg.result = value;
});

