figma.showUI(__html__, {
    height: 420,
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

async function runExport(identifier: string) {
    const flaggedNodes = identifier
        ? figma.currentPage.findAll(node => node.name.includes(identifier))
        : figma.currentPage.selection;

    if (flaggedNodes.length === 0) {
        return;
    }

    await Promise.all(flaggedNodes.map(async (node) => {
        const encodedSvg = await node.exportAsync({ format: 'SVG' });

        prepSpriteElement(encodedSvg, node.name);
    }));

    figma.ui.postMessage({  event: 'send-sprite' });
}


figma.ui.onmessage = msg => {

    if (msg.event === 'run-export') {
        runExport(msg.identifier);
        return;
    }

    if (msg.event === 'close') {
        figma.ui.close();
        figma.closePlugin();
    }

};
