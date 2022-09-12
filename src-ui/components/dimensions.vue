<template>
    <container layout="column">
        <div class="section-title">Symbol dimensions</div>
        <div layout="row center-justify">
            <div class="input input--with-icon">
                <div class="icon text--x-small">W</div>
                <input type="number" class="input__field" v-model="width">
            </div>
            <div class="input input--with-icon">
                <div class="icon text--x-small">H</div>
                <input type="number" class="input__field" v-model="height">
            </div>
        </div>
    </container>
</template>

<script lang="ts" setup>
import Container from './core/container.vue';

import {
    computed
} from 'vue';

import {
    dimensions,
    setWidth,
    setHeight
} from '../store'

const width = computed({
    get() {
        return dimensions.value.width;
    },
    set(value: number) {
        setWidth(value);
    }
});

const height = computed({
    get() {
        return dimensions.value.height;
    },
    set(value: number) {
        setHeight(value);
    }
});

</script>