<template>
    <div class="height--fill" layout="column justify-top">
        <div class="height-fill pb-xxsmall" layout="column" self="size-x1">
            <!-- <info-header></info-header>
            <divider></divider> -->
            <target-method></target-method>
            <divider></divider>
            <symbol-colour></symbol-colour>
            <divider></divider>
            <exported-svg self="size-x1"></exported-svg>
        </div>
        <sprite-footer></sprite-footer>
    </div>
</template>

<script setup lang="ts">
import InfoHeader from './components/info-header.vue';
import Divider from './components/core/divider.vue';
import TargetMethod from './components/target-method.vue';
import SymbolColour from './components/symbol-colour.vue';
import ExportedSvg from './components/exported-svg.vue';
import SpriteFooter from './components/footer.vue';

import eventEmitter from './utilities/event-emitter';
import prepSprite from './utilities/prep-sprite';

import {
    onMounted
} from 'vue';

eventEmitter.on('prep-sprite', prepSprite);

onMounted(() => {
    onmessage = ({ data }) => {
        const {
            event,
            payload,
        } = data.pluginMessage;

        eventEmitter.emit(event, payload);
    }
});
</script>
