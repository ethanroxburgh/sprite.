<template>
    <container class="sprite-target-method">
        <div class="section-title">Target method</div>
        <select id="layer-target-method" v-model="targetMethodValue" class="select-menu">
            <option :value.prop="TARGET_METHOD_KEY.layerKey" :key="TARGET_METHOD_KEY.layerKey">Layer key</option>
            <option :value.prop="TARGET_METHOD_KEY.currentSelection" :key="TARGET_METHOD_KEY.currentSelection">Current selection</option>
        </select>
        <div class="input mt-xxxsmall" v-if="!currentSelectionMethod">
            <div class="icon icon--instance icon--small"></div>
            <input type="input" class="input__field sprite-target-method__key-input" v-model="targetKeyValue" placeholder="<symbol>">
        </div>
        <div class="p-xxsmall pt-xxxsmall text--x-small text--grey" v-else>{{ selectionLabel }}</div>
    </container>
</template>

<script lang="ts" setup>
import EVENTS from '../constants/events';
import TARGET_METHOD_KEY from '../enums/target-method-key';

import Container from './core/container.vue';

import eventEmitter from '../utilities/event-emitter';
import postMessage from '../utilities/post-message';

import {
    ref,
    watch,
    computed
} from 'vue';

import {
    targetMethod,
    targetKey,
    setTargetMethod,
    setTargetKey,
} from '../store'

type ICurrentSelection = {
    label: string;
    length: number;
    selection: SceneNode[];
}

eventEmitter.on(EVENTS.currentSelectionChanged, updateCurrentSelection);

const selectionLabel = ref('');

const currentSelectionMethod = computed(() => targetMethod.value === TARGET_METHOD_KEY.currentSelection);
const targetMethodValue = computed(({
    get() {
        return targetMethod.value;
    },
    set(value: TARGET_METHOD_KEY) {
        setTargetMethod(value);
    }
}));

const targetKeyValue = computed(({
    get() {
        return targetKey.value;
    },
    set(value: string) {
        setTargetKey(value);
    }
}))

function getCurrentSelection() {
    postMessage({ event: EVENTS.getCurrentSelection });
}

function updateCurrentSelection(payload: ICurrentSelection) {
    selectionLabel.value = payload.label;
}

function targetMethodChanged() {
    if (currentSelectionMethod.value) {
        getCurrentSelection();
    }

    setTargetMethod(targetMethod.value);
}

watch(
    targetMethod,
    () => targetMethodChanged(),
    {
        immediate: true
    }
)
</script>

<style lang="scss">

    .sprite-target-method__key-input {
        padding-left: var(--size-medium);
    }

</style>