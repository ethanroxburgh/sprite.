import EVENTS from '../constants/events';

import eventEmitter from './event-emitter';

import {
    svgElements,
    setSvgResult,
    optimizations,
    optimizeSvg,
    dimensions,
} from '../store';

import {
    optimize,
} from 'svgo';

export default function() {
    const widthString = dimensions.value.width ? `width="${dimensions.value.width}"` : '';
    const heightString = dimensions.value.height ? `height="${dimensions.value.height}"` : '';

    let result = [
        `<svg aria-hidden="true" style="position:absolute;width:0;height:0" ${widthString} ${heightString} xmlns="http://www.w3.org/2000/svg" overflow="hidden"><defs>`,
        ...svgElements.value,
        '</defs></svg>'
    ].join('');

    let plugins: any = [];

    Object.keys(optimizations.value).forEach(key => {
        if (optimizations.value[key]) {
            plugins.push(key);
        }
    })

    if (optimizeSvg.value) {
        const optimizedResult = optimize(result, {
            plugins
        });

        result = (optimizedResult as any).data;
    }

    setSvgResult(result);

    eventEmitter.emit(EVENTS.completed);
}