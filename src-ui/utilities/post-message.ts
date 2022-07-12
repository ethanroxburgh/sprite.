export default function postMessage(payload: object) {
    parent.postMessage({
        pluginMessage: {
            ...payload,
        }
    }, '*')
}