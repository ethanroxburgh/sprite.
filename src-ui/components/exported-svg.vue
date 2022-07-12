<template>
    <container layout="column">
        <div class="section-title">Exported SVG</div>
        <div class="pl-xxsmall pr-xxsmall" self="size-x1" layout="column">
            <textarea class="textarea p-xxsmall" v-model="result" disabled self="size-x1" placeholder="SVG element"></textarea>
        </div>
    </container>
</template>

<script lang="ts" setup>
import EVENTS from '../constants/events';

import Container from './core/container.vue';

import eventEmitter from '../utilities/event-emitter';

import {
    ref,
    computed
} from 'vue';

import {
    svgElements,
    svgResult,
    updateSvgResult
} from '../store';

eventEmitter.on(EVENTS.showSvgResult, updateResult)

const result = computed(({
    get() {
        return svgResult.value;
    },
    set() {
        // do nothing
    }
}));

function updateResult() {
    const result = [
        '<svg aria-hidden="true" style="position:absolute;width:0;height:0" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" overflow="hidden"><defs>',
        ...svgElements.value,
        '</defs></svg>'
    ].join('');

    updateSvgResult(result);

    eventEmitter.emit(EVENTS.completed);
}
</script>