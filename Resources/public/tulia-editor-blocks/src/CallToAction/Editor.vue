<template>
    <BackgroundImage
        class="subscribe block-image block-image-main"
        v-model="block.data.backgroundImage"
        placement="background"
    >
        <div class="subscribe-overlay" :style="{ opacity: block.data.overlayOpacity }"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="section-heading">
                        <h6><Contenteditable v-model="block.data.label"></Contenteditable></h6>
                        <h2><Contenteditable v-model="block.data.title"></Contenteditable></h2>
                    </div>
                    <div class="subscribe-content">
                        <WysiwygEditor v-model="block.data.content"></WysiwygEditor>
                        <div class="subscribe-form text-center">
                            <a class="main-button-icon">
                                <Contenteditable v-model="block.data.buttonLabel"></Contenteditable>
                                <FontIcon v-model="block.data.buttonIcon"></FontIcon>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </BackgroundImage>
</template>

<script setup>
const { defineProps, inject } = require('vue');
const props = defineProps(['block']);
const block = inject('blocks.instance').editor(props);

// Your block logic here...
const Contenteditable = block.extension('Contenteditable');
const WysiwygEditor = block.extension('WysiwygEditor');
const FontIcon = block.extension('FontIcon');
const BackgroundImage = block.extension('BackgroundImage');
</script>
