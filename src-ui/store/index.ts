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
    };
    width: number;
    height: number;
    optimize: boolean;
    optimizations: Record<string, boolean>;
}

type IOptimizationPayload = {
    value: boolean;
    key: string;
}

const STATE = {
    targetMethod: TARGET_METHOD_KEY.currentSelection,
    targetKey: '',
    colourMethod: COLOUR_METHOD_KEY.inherit,
    customColour: '',
    svg: {
        elements: [],
        result: '',
    },
    width: 24,
    height: 24,
    optimize: true,
    optimizations: {
        removeDoctype: true,
        removeXMLProcInst: true,
        removeComments: true,
        removeMetadata: true,
        removeEditorsNSData: true,
        cleanupAttrs: true,
        mergeStyles: true,
        inlineStyles: true,
        minifyStyles: true,
        cleanupIDs: true,
        removeUselessDefs: true,
        cleanupNumericValues: true,
        convertColors: true,
        removeUnknownsAndDefaults: true,
        removeNonInheritableGroupAttrs: true,
        removeUselessStrokeAndFill: true,
        removeViewBox: true,
        cleanupEnableBackground: true,
        removeHiddenElems: true,
        removeEmptyText: true,
        convertShapeToPath: true,
        convertEllipseToCircle: true,
        moveElemsAttrsToGroup: true,
        moveGroupAttrsToElems: true,
        collapseGroups: true,
        convertPathData: true,
        convertTransform: true,
        removeEmptyAttrs: true,
        removeEmptyContainers: true,
        mergePaths: true,
        removeUnusedNS: true,
        sortDefsChildren: true,
        removeTitle: true,
        removeDesc: true,
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


// Optimizations
export const optimizeSvg = getter('optimize', state => {
    return state.optimize;
});

export const setOptimizeSvg = mutation('optimize', (state, value: boolean) => {
    state.optimize = value;
});

export const optimizations = getter('optimizations', state => {
    return state.optimizations;
});

export const setOptimizations = mutation('set-optimization', (state, payload: IOptimizationPayload) => {
    state.optimizations[payload.key] = payload.value;
});


// Dimensions
export const dimensions = getter('dimensions', state => {
    return {
        width: state.width,
        height: state.height,
    };
});

export const setWidth = mutation('set-width', (state, value: number) => {
    state.width = value;
});

export const setHeight = mutation('set-height', (state, value: number) => {
    state.height = value;
});


// SVG
export const svgElements = getter('svg-elements', state => {
    return state.svg.elements;
});

export const svgResult = getter('svg-result', state => {
    return state.svg.result;
});

export const addSvgElementToResult = mutation('update-svg-elements', (state, elementEntry: string) => {
    return state.svg.elements.push(elementEntry);
});

export const resetSvgElements = mutation('revert-svg-elements', (state, _) => {
    return state.svg.elements = [];
});

export const setSvgResult = mutation('update-svg-result', (state, value: string) => {
    return state.svg.result = value;
});

