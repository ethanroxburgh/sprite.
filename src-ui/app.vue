<template>
    <div class="sprite-app">
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
import eventEmitter from './utilities/event-emitter';
import prepSymbol from './utilities/prep-symbol';
import prepResult from './utilities/prep-result';

import {
    onMounted
} from 'vue';

eventEmitter.on('prep-symbol', prepSymbol);
eventEmitter.on('prep-result', prepResult)

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
