export class EventEmitter {
    events: Record<string, Function> = {}

    constructor() {
        this.events = {};
    }

    public on(event: string, hook: Function) {
        this.events[event] = hook;
    }

    public emit(event: string, payload?: any) {
        if (!this.events[event]) {
            console.warn(`No listener for "${event}" event`)
        }

        this.events[event](payload || null);
    }
}

export default new EventEmitter();