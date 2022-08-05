<template>
    <container>
        <div class="section-title">Symbol colour</div>
        <select id="layer-target-method" v-model="colourMethodValue" class="select-menu">
            <option :value.prop="COLOUR_METHOD_KEY.inherit" :key="COLOUR_METHOD_KEY.inherit">Inherit colour</option>
            <option :value.prop="COLOUR_METHOD_KEY.custom" :key="COLOUR_METHOD_KEY.custom">Custom colour</option>
            <option :value.prop="COLOUR_METHOD_KEY.unset" :key="COLOUR_METHOD_KEY.unset">Unset</option>
        </select>
        <div class="input input--with-icon" v-if="isCustomColour">
            <div class="ml-xxsmall colour-picker">
                <input type="color" v-model="customColourValue" :disabled="!isCustomColour">
            </div>
            <input type="input" class="input__field" v-model="customColourValue" :disabled="!isCustomColour" placeholder="#333333">
        </div>
       <div class="p-xxsmall pt-xxxsmall text--x-small text--grey" v-else>Will use "currentcolour"</div>
    </container>
</template>

<script lang="ts" setup>
import COLOUR_METHOD_KEY from '../enums/colour-method-key';

import Container from './core/container.vue';

import {
    computed
} from 'vue'

import {
    colourMethod,
    customColour,
    setColourMethod,
    setCustomColour,
} from '../store'

const colourMethodValue = computed(({
    get() {
        return colourMethod.value;
    },
    set(value: COLOUR_METHOD_KEY) {
        setColourMethod(value);
    }
}));

const customColourValue = computed(({
    get() {
        return customColour.value;
    },
    set(value: string) {
        setCustomColour(value);
    }
}));

const isCustomColour = computed(() => colourMethodValue.value === COLOUR_METHOD_KEY.custom)
</script>