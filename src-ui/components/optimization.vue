<template>
    <container>
        <div class="section-title">Optimization</div>
        <div layout="row center-justify">
            <div class="checkbox">
                <input id="optimize" type="checkbox" class="checkbox__box" v-model="optimize">
                <label for="optimize" class="checkbox__label">Optimize SVG output</label>
            </div>
            <router-link v-if="optimize" to="/optimization">
                <div class="icon-button">
                    <div class="icon icon--adjust"></div>
                </div>
            </router-link>
        </div>
    </container>
</template>

<script lang="ts" setup>
import Container from './core/container.vue';

import {
    computed
} from 'vue';

import {
    optimizeSvg,
    setOptimizeSvg
} from '../store';

const optimize = computed(({
    get() {
        return optimizeSvg.value;
    },
    set(value: boolean) {
        setOptimizeSvg(value);
    }
}))

</script>