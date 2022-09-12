<template>
    <div class="p-xxsmall pt-xxlarge pb-xsmall container-fill" self="size-x1" layout="column stretch">
        <textarea class="textarea container-fill" v-model="result" disabled self="size-x1" placeholder="SVG element"></textarea>
    </div>
</template>

<script lang="ts" setup>
import {
    ref,
    computed
} from 'vue';

import {
    svgResult,
} from '../store';

const result = computed(({
    get() {
        return svgResult.value;
    },
    set() {}
}));

</script>

<style lang="scss">

    .container-fill {
        height: 100%;
    }

</style>
