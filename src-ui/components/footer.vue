<template>
    <div>
        <divider></divider>
        <div class="p-xsmall">
            <div class="text--small pb-xxsmall text--red text--centre" v-if="!!error">{{ error }}</div>
            <button class='button button--primary' self="size-1of1" layout="row center-center" @click="run">
                <div class="icon icon--spin icon--spinner" v-if="loading"></div>
                <div v-else>Run</div>
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import EVENTS from '../constants/events';

import Divider from '../components/core/divider.vue';

import postMessage from '../utilities/post-message';
import eventEmitter from '../utilities/event-emitter';

import {
    ref
} from 'vue';

import {
    targetMethod,
    targetKey,
    customColour,
    colourMethod,
    resetSvgElements,
} from '../store/index';

type IError = {
    message: string;
}

const error = ref('');
const loading = ref(false);
const visualLoadComplete = ref(false);

eventEmitter.on(EVENTS.completed, resolve);
eventEmitter.on(EVENTS.error, showError);

function showError({ message }: IError) {
    error.value = message;
    loading.value = false;
}

function run() {
    if (!!loading.value) {
        return;
    }

    loading.value = true;

    resetSvgElements();
    postMessage({
        event: EVENTS.runExport,
        payload: {
            targetMethod: targetMethod.value,
            targetKey: targetKey.value,
            customColour: customColour.value,
            colourMethod: colourMethod.value,
        }
    });

    error.value = '';
}

function resolve() {
    loading.value = false;
}

</script>

<style lang="scss" scoped>

    .button {
        position: relative;
        display: flex;
    }

    .icon--spinner {
        top: -2px;
        margin: auto;
        position: absolute;
    }

</style>