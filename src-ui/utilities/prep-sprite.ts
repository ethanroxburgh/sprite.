import COLOUR_METHOD_KEY from '../enums/colour-method-key';

import {
    colourMethod,
    customColour,
    targetKey,
    updateSvgElements,
} from '../store/index';

const textDecoder = new TextDecoder('utf-8');
const domParser = new DOMParser();

type IPrepSpritePayload = {
    encodedSvg: Uint8Array;
    elementName: string;
}

export default function prepSprite({ encodedSvg, elementName }: IPrepSpritePayload) {
    const decodedText = textDecoder.decode(encodedSvg).replace(/[\n\t]/g, "");
    const splitNode = decodedText.split('><');
    const targetNodeIndex = splitNode.findIndex(item => item.includes('svg'));
    const colour = colourMethod.value === COLOUR_METHOD_KEY.inherit ? 'currentcolor' : customColour.value;

    const filteredNode = [...splitNode].filter((_, index) =>
        index > targetNodeIndex
        && index < (splitNode.length - (targetNodeIndex + 1))
    ).map(item => {
        const nodeString = `<${item}>`;

        if (!nodeString.includes('<path') && !nodeString.includes('<rect')) {
            return nodeString;
        }

        const domEl = domParser.parseFromString(nodeString, "image/svg+xml").documentElement;

        if(colourMethod.value !== COLOUR_METHOD_KEY.unset) {

            if (!!domEl.getAttribute('fill')) {
                domEl.setAttribute('fill', colour);
            }

            if (!!domEl.getAttribute('stroke')) {
                domEl.setAttribute('stroke', colour);
            }
        }

        return domEl.outerHTML;
    });

    const key = targetKey.value || '';
    const symbolName = elementName.replace(key, '').replace(' ', '');

    updateSvgElements(`<symbol id="${symbolName}" viewBox="0 0 24 24">${filteredNode.join('')}</symbol>`);
}