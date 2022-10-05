<template>
    <div id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-xs-12">
                    <div class="left-text-content">
                        <div class="section-heading">
                            <h6><Contenteditable v-model="block.data.label"></Contenteditable></h6>
                            <h2><Contenteditable v-model="block.data.title"></Contenteditable></h2>
                        </div>
                        <div class="row">
                            <div
                                v-for="item in features.collection"
                                :key="item.id"
                                class="col-md-6 col-sm-6"
                            >
                                <div class="service-item">
                                    <div class="service-icon">
                                        <FontIcon v-model="item.icon"></FontIcon>
                                    </div>
                                    <h4><Contenteditable v-model="item.title"></Contenteditable></h4>
                                    <Actions actions="moveBackward,moveForward,remove" :collection="features" :item="item"></Actions>
                                </div>
                            </div>
                            <div class="col-12 col-lg-4 service-column pt-4">
                                <Actions actions="add" :collection="features"></Actions>
                            </div>
                        </div>
                        <div class="row" v-if="block.data.showButton === 'yes'">
                            <div class="col-md-12">
                                <a href="#" class="main-button-icon">
                                    <Contenteditable v-model="block.data.buttonLabel"></Contenteditable> <FontIcon v-model="block.data.buttonIcon"></FontIcon>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-xs-12">
                    <div class="right-text-content">
                        <WysiwygEditor v-model="block.data.content"></WysiwygEditor>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { defineProps, inject } = require('vue');
const props = defineProps(['block']);
const block = inject('blocks.instance').editor(props);

// Your block logic here...
const Contenteditable = block.extension('Contenteditable');
const WysiwygEditor = block.extension('WysiwygEditor');
const FontIcon = block.extension('FontIcon');
const Collection = block.extension('Collection');
const Actions = block.extension('Collection.Actions');

const features = new Collection(block.data.features, {
    icon: 'fas fa-globe-europe',
    title: 'GREAT',
});
</script>
