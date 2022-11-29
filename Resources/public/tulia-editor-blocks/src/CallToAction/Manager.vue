<template>
    <Range v-model="block.data.overlayOpacity" min="0" max="1" step="0.1" :label="translator.trans('Background overlay opacity', 'Templatemo/Breezed')"></Range>
</template>

<script setup>
const { defineProps, inject } = require('vue');
const props = defineProps(['block']);
const block = inject('blocks.instance').manager(props);
const translator = inject('translator');

const Range = block.control('Input.Range');

block.on('created', () => {
    block.expectsFullWidthSection();
});
</script>
