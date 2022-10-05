<template>
    <div class="alert alert-info">Hash to this section: <code>#about</code></div>
    <Select v-model="block.data.showButton" :choices="choices" :label="translator.trans('Show button', 'Templatemo/Breezed')"></Select>
</template>

<script setup>
const { defineProps, inject } = require('vue');
const props = defineProps(['block']);
const block = inject('blocks.instance').manager(props);
const translator = inject('translator');

const Select = block.control('Select');

const choices = {
    'yes': 'Yes',
    'no': 'No',
};

block.on('created', () => {
    block.expectsFullWidthSection();
});
</script>
