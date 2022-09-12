<template>
    <div>
        <div class="route-optimization-header p-xxsmall" layout="row center-left">
            <router-link to="/">
                <div class="icon-button">
                    <div class="icon icon--back"></div>
                </div>
            </router-link>
            <div class="section-title">SVG Export</div>
        </div>
        <exported-svg self="size-x1"></exported-svg>
    </div>
</template>

<script lang="ts" setup>
import ExportedSvg from '../components/exported-svg.vue';
</script>

<style lang="scss">

    .route-optimization-header {
        position: fixed;
        background-color: white;
        z-index: 2;
        border-bottom: 1px solid var(--silver);
    }

</style>