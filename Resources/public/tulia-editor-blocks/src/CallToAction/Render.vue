<template>
    <div id="subscribe">
        <div class="subscribe" :id="image.id">
            <div class="subscribe-overlay" :style="{ opacity: block.data.overlayOpacity }"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <div class="section-heading">
                            <h6>{{ block.data.label }}</h6>
                            <h2>{{ block.data.title }}</h2>
                        </div>
                        <div class="subscribe-content">
                            <div v-html="block.data.content"></div>
                            <div class="subscribe-form text-center">
                                <a class="main-button-icon">
                                    {{ block.data.buttonLabel }}
                                    <i :class="block.data.buttonIcon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { defineProps, inject } = require('vue');
const props = defineProps(['block']);
const block = inject('blocks.instance').render(props);

const BackgroundImage = block.extension('BackgroundImage');
const image = new BackgroundImage(block, () => block.data.backgroundImage);
</script>
