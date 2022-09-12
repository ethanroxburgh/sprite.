<template>
    <div class="height--fill" layout="column justify-top">
        <div class="height-fill pb-xxsmall" layout="column" self="size-x1">
            <target-method></target-method>
            <divider></divider>
            <symbol-colour></symbol-colour>
            <divider></divider>
            <dimensions></dimensions>
            <divider></divider>
            <optimization></optimization>
        </div>
        <sprite-footer></sprite-footer>
    </div>
</template>

<script setup lang="ts">
import Divider from '../components/core/divider.vue';
import TargetMethod from '../components/target-method.vue';
import SymbolColour from '../components/symbol-colour.vue';
import SpriteFooter from '../components/footer.vue';
import Optimization from '../components/optimization.vue';
import Dimensions from '../components/dimensions.vue';

import {
    selectMenu
    // @ts-ignore this makes me sad :(
} from 'figma-plugin-ds';

setTimeout(() => {
    selectMenu.init();
});
</script>
