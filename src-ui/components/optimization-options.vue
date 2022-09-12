<template>
    <div class="pt-xlarge">
        <div class="checkbox">
            <input id="doctype" type="checkbox" class="checkbox__box" v-model="removeDoctype" @input="updateItem('removeDoctype')">
            <label for="doctype" class="checkbox__label">Remove doctype</label>
        </div>
        <div class="checkbox">
            <input id="xml-instructions" type="checkbox" class="checkbox__box" v-model="removeXMLProcInst" @input="updateItem('removeXMLProcInst')">
            <label for="xml-instructions" class="checkbox__label">Remove XML instructions</label>
        </div>
        <div class="checkbox">
            <input id="comments" type="checkbox" class="checkbox__box" v-model="removeComments" @input="updateItem('removeComments')">
            <label for="comments" class="checkbox__label">Remove comments</label>
        </div>
        <div class="checkbox">
            <input id="meta-data" type="checkbox" class="checkbox__box" v-model="removeMetadata" @input="updateItem('removeMetadata')">
            <label for="meta-data" class="checkbox__label">Remove metadata</label>
        </div>
        <div class="checkbox">
            <input id="editor-data" type="checkbox" class="checkbox__box" v-model="removeEditorsNSData" @input="updateItem('removeEditorsNSData')">
            <label for="editor-data" class="checkbox__label">Remove editor data</label>
        </div>
        <div class="checkbox">
            <input id="attr-whitespace" type="checkbox" class="checkbox__box" v-model="cleanupAttrs" @input="updateItem('cleanupAttrs')">
            <label for="attr-whitespace" class="checkbox__label">Cleanup attributes</label>
        </div>
        <div class="checkbox">
            <input id="merge-styles" type="checkbox" class="checkbox__box" v-model="mergeStyles" @input="updateItem('mergeStyles')">
            <label for="merge-styles" class="checkbox__label">Merge styles</label>
        </div>
        <div class="checkbox">
            <input id="inline-styles" type="checkbox" class="checkbox__box" v-model="inlineStyles" @input="updateItem('inlineStyles')">
            <label for="inline-styles" class="checkbox__label">Inline styles</label>
        </div>
        <div class="checkbox">
            <input id="minify-styles" type="checkbox" class="checkbox__box" v-model="minifyStyles" @input="updateItem('minifyStyles')">
            <label for="minify-styles" class="checkbox__label">Minify styles</label>
        </div>
        <div class="checkbox">
            <input id="clean-ids" type="checkbox" class="checkbox__box" v-model="cleanupIDs" @input="updateItem('cleanupIDs')">
            <label for="clean-ids" class="checkbox__label">Cleanup IDs</label>
        </div>
        <div class="checkbox">
            <input id="remove-unused-defs" type="checkbox" class="checkbox__box" v-model="removeUselessDefs" @input="updateItem('removeUselessDefs')">
            <label for="remove-unused-defs" class="checkbox__label">Remove useless defs</label>
        </div>
        <div class="checkbox">
            <input id="round-numbers" type="checkbox" class="checkbox__box" v-model="cleanupNumericValues" @input="updateItem('cleanupNumericValues')">
            <label for="round-numbers" class="checkbox__label">Clean up numeric values</label>
        </div>
        <div class="checkbox">
            <input id="minify-colours" type="checkbox" class="checkbox__box" v-model="convertColors" @input="updateItem('convertColors')">
            <label for="minify-colours" class="checkbox__label">Minify colours</label>
        </div>
        <div class="checkbox">
            <input id="unkonwns-defaults" type="checkbox" class="checkbox__box" v-model="removeUnknownsAndDefaults" @input="updateItem('removeUnknownsAndDefaults')">
            <label for="unkonwns-defaults" class="checkbox__label">Remove unknowns & defaults</label>
        </div>
        <div class="checkbox">
            <input id="unneeded-group-attrs" type="checkbox" class="checkbox__box" v-model="removeNonInheritableGroupAttrs" @input="updateItem('removeNonInheritableGroupAttrs')">
            <label for="unneeded-group-attrs" class="checkbox__label">Remove unneeded group attrs</label>
        </div>
        <div class="checkbox">
            <input id="unneeded-stroke-fill" type="checkbox" class="checkbox__box" v-model="removeUselessStrokeAndFill" @input="updateItem('removeUselessStrokeAndFill')">
            <label for="unneeded-stroke-fill" class="checkbox__label">Remove useless stroke fill</label>
        </div>
        <div class="checkbox">
            <input id="unneeded-view-box" type="checkbox" class="checkbox__box" v-model="removeViewBox" @input="updateItem('removeViewBox')">
            <label for="unneeded-view-box" class="checkbox__label">Remove viewBox</label>
        </div>
        <div class="checkbox">
            <input id="remove-enable-background" type="checkbox" class="checkbox__box" v-model="cleanupEnableBackground" @input="updateItem('cleanupEnableBackground')">
            <label for="remove-enable-background" class="checkbox__label">Remove enable-background</label>
        </div>
        <div class="checkbox">
            <input id="remove-hidden-elements" type="checkbox" class="checkbox__box" v-model="removeHiddenElems" @input="updateItem('removeHiddenElems')">
            <label for="remove-hidden-elements" class="checkbox__label">Remove hidden elements</label>
        </div>
        <div class="checkbox">
            <input id="remove-empty-text" type="checkbox" class="checkbox__box" v-model="removeEmptyText" @input="updateItem('removeEmptyText')">
            <label for="remove-empty-text" class="checkbox__label">Remove empty text</label>
        </div>
        <div class="checkbox">
            <input id="shapes-to-paths" type="checkbox" class="checkbox__box" v-model="convertShapeToPath" @input="updateItem('convertShapeToPath')">
            <label for="shapes-to-paths" class="checkbox__label">Convert shapes to paths</label>
        </div>
        <div class="checkbox">
            <input id="convert-circles" type="checkbox" class="checkbox__box" v-model="convertEllipseToCircle" @input="updateItem('convertEllipseToCircle')">
            <label for="convert-circles" class="checkbox__label">Convert non-eccentrics to circles</label>
        </div>
        <div class="checkbox">
            <input id="move-attrs-to-parent" type="checkbox" class="checkbox__box" v-model="moveElemsAttrsToGroup" @input="updateItem('moveElemsAttrsToGroup')">
            <label for="move-attrs-to-parent" class="checkbox__label">Move attrs to parent group </label>
        </div>
        <div class="checkbox">
            <input id="useless-group" type="checkbox" class="checkbox__box" v-model="collapseGroups" @input="updateItem('collapseGroups')">
            <label for="useless-group" class="checkbox__label">Collapse useless groups</label>
        </div>
        <div class="checkbox">
            <input id="round-paths" type="checkbox" class="checkbox__box" v-model="convertPathData" @input="updateItem('convertPathData')">
            <label for="round-paths" class="checkbox__label">Round/rewrite paths</label>
        </div>
        <div class="checkbox">
            <input id="round-transforms" type="checkbox" class="checkbox__box" v-model="convertTransform" @input="updateItem('convertTransform')">
            <label for="round-transforms" class="checkbox__label">Round/rewrite transforms</label>
        </div>
        <div class="checkbox">
            <input id="remove-empty-attrs" type="checkbox" class="checkbox__box" v-model="removeEmptyAttrs" @input="updateItem('removeEmptyAttrs')">
            <label for="remove-empty-attrs" class="checkbox__label">Remove empty attributes</label>
        </div>
        <div class="checkbox">
            <input id="remove-empty-containers" type="checkbox" class="checkbox__box" v-model="removeEmptyContainers" @input="updateItem('removeEmptyContainers')">
            <label for="remove-empty-containers" class="checkbox__label">Remove empty containers</label>
        </div>
        <div class="checkbox">
            <input id="merge-paths" type="checkbox" class="checkbox__box" v-model="mergePaths" @input="updateItem('mergePaths')">
            <label for="merge-paths" class="checkbox__label">Merge paths</label>
        </div>
        <div class="checkbox">
            <input id="remove-namespaces" type="checkbox" class="checkbox__box" v-model="removeUnusedNS" @input="updateItem('removeUnusedNS')">
            <label for="remove-namespaces" class="checkbox__label">Remove unused namespaces</label>
        </div>
        <div class="checkbox">
            <input id="sort-children-defs" type="checkbox" class="checkbox__box" v-model="sortDefsChildren" @input="updateItem('sortDefsChildren')">
            <label for="sort-children-defs" class="checkbox__label">Sort children of defs</label>
        </div>
        <div class="checkbox">
            <input id="remove-title" type="checkbox" class="checkbox__box" v-model="removeTitle" @input="updateItem('removeTitle')">
            <label for="remove-title" class="checkbox__label">Remove title</label>
        </div>
        <div class="checkbox">
            <input id="remove-desc" type="checkbox" class="checkbox__box" v-model="removeDesc" @input="updateItem('removeDesc')">
            <label for="remove-desc" class="checkbox__label">Remove desc</label>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {
    optimizations,
    setOptimizations,
} from '../store';

const {
    removeDoctype,
    removeXMLProcInst,
    removeComments,
    removeMetadata,
    removeEditorsNSData,
    cleanupAttrs,
    mergeStyles,
    inlineStyles,
    minifyStyles,
    cleanupIDs,
    removeUselessDefs,
    cleanupNumericValues,
    convertColors,
    removeUnknownsAndDefaults,
    removeNonInheritableGroupAttrs,
    removeUselessStrokeAndFill,
    removeViewBox,
    cleanupEnableBackground,
    removeHiddenElems,
    removeEmptyText,
    convertShapeToPath,
    convertEllipseToCircle,
    moveElemsAttrsToGroup,
    collapseGroups,
    convertPathData,
    convertTransform,
    removeEmptyAttrs,
    removeEmptyContainers,
    mergePaths,
    removeUnusedNS,
    sortDefsChildren,
    removeTitle,
    removeDesc,
} = optimizations.value;

function updateItem(key: string) {
    setOptimizations({
        key,
        value: !optimizations.value[key],
    });
}

</script>