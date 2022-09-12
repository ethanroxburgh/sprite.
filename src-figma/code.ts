figma.showUI(__html__, { height: 450, width: 260 });


// Registered callbacks for Figma events
figma.on('selectionchange', postCurrentSelectionLabel);



// Core post message function
function postMessage(event: string, payload?: any) {
    figma.ui.postMessage({
        event,
        payload
    });
};

// Event constants/enums
const enum EVENT_KEYS {
    currentSelectionChanged = 'current-selection-changed'
}

const enum MESSAGE_KEYS {
    getCurrentSelection = 'get-current-selection',
    runExport = 'run-export',
};

const MESSAGE_EVENTS = {
    [MESSAGE_KEYS.getCurrentSelection]: postCurrentSelectionLabel,
    [MESSAGE_KEYS.runExport]: exportSvg
};


// Types
type IEventMessage = {
    event: MESSAGE_KEYS;
    payload: any;
};

type IExportSvgPayload = {
    targetMethod: string;
    targetKey: string | null;
    colourMethod: string;
    customColour: string | null;
}

// Event hooks
function postCurrentSelectionLabel(_: void) {
    const selection = figma.currentPage.selection;
    const length = selection.length;
    const joiningPhrase = length > 1 || length === 0 ? 'layers' : 'layer';
    const label = `${length} ${joiningPhrase} selected`;

    postMessage(EVENT_KEYS.currentSelectionChanged, {
        label,
        length,
        selection,
    });
};

async function exportSvg(payload: IExportSvgPayload) {
    const useCurrentSelection = payload.targetMethod === 'current-selection';

    if (!useCurrentSelection && !payload.targetKey) {
        return postMessage('error', {
            message: 'Please provide a layer key'
        });
    }

    if (payload.colourMethod === 'custom' && !payload.customColour) {
        return postMessage('error', {
            message: 'Please provide a colour'
        });
    }

    const flaggedNodes = useCurrentSelection
        ? figma.currentPage.selection
        : figma.currentPage.findAll(node => node.name.includes(payload.targetKey!))

    if (flaggedNodes.length === 0) {
        return postMessage('error', {
            message: 'No layers selected'
        });
    }

    if (flaggedNodes.length >= 200) {
        return postMessage('error', {
            message: 'Too many nodes. Max 200'
        });
    }

    await Promise.all(flaggedNodes.map(async (node) => {
        const encodedSvg = await node.exportAsync({ format: 'SVG' });

        postMessage('prep-symbol',{
            encodedSvg,
            elementName: node.name
        });
    }));

    postMessage('prep-result');
}


figma.ui.onmessage = ({ event, payload }: IEventMessage) => {
    MESSAGE_EVENTS[event](payload);
};