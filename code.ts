figma.showUI(__html__, {
    height: 440,
    width: 330
});
figma.skipInvisibleInstanceChildren = true;

function prepSpriteElement(encodedSvg: Uint8Array, name: string) {
    figma.ui.postMessage({
        event: 'prep-sprite-el',
        encodedSvg,
        name,
    });
}

async function runExport(identifierKey: string) {
    const flaggedNodes = identifierKey
        ? figma.currentPage.findAll(node => node.name.includes(identifierKey))
        : figma.currentPage.selection;

    if (flaggedNodes.length === 0) {
        return figma.ui.postMessage({ event: 'error', message: 'Unable to find nodes'});
    }

    if (flaggedNodes.length >= 200) {
        return figma.ui.postMessage({ event: 'error', message: 'Too many nodes. Max 200'});
    }

    await Promise.all(flaggedNodes.map(async (node) => {
        const encodedSvg = await node.exportAsync({ format: 'SVG' });

        prepSpriteElement(encodedSvg, node.name);
    }));

    figma.ui.postMessage({ event: 'send-sprite' });
}


figma.ui.onmessage = msg => {

    if (msg.event === 'run-export') {
        runExport(msg.identifierKey);
        return;
    }

    if (msg.event === 'close') {
        figma.ui.close();
        figma.closePlugin();
    }

};
