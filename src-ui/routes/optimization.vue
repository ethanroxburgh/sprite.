<template>
    <div>
        <div class="route-optimization-header p-xxsmall" layout="row center-left">
            <router-link to="/">
                <div class="icon-button">
                    <div class="icon icon--back"></div>
                </div>
            </router-link>
            <div class="section-title">Optimization options</div>
        </div>
        <container>
            <optimization-options v-model="config"></optimization-options>
        </container>
    </div>
</template>

<script lang="ts" setup>
import OptimizationOptions from '../components/optimization-options.vue';
import Container from '../components/core/container.vue';

import {
    toRaw
} from 'vue';

import {
    optimizations
} from '../store'

const config = toRaw(optimizations.value);

</script>

<style lang="scss">

    .route-optimization-header {
        position: fixed;
        background-color: white;
        z-index: 2;
        border-bottom: 1px solid var(--silver);
    }

</style>