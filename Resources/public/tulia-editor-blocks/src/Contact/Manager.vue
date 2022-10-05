<template>
    <FormSelect v-model="block.data.contactFormId" :label="translator.trans('Contact form', 'Templatemo/Breezed')"></FormSelect>
</template>

<script setup>
const { defineProps, inject } = require('vue');
const props = defineProps(['block']);
const block = inject('blocks.instance').manager(props);
const translator = inject('translator');

const FormSelect = block.control('FormSelect');

block.on('created', () => {
    block.expectsFullWidthSection();
});
</script>
