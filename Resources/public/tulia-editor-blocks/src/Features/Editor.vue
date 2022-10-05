<template>
    <div id="features">
        <div class="container">
            <div class="row">
                <div
                    v-for="item in features.collection"
                    :key="item.id"
                    class="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                >
                    <div class="features-item">
                        <div class="features-icon">
                            <FontIcon v-model="item.icon"></FontIcon>
                        </div>
                        <div class="features-content">
                            <h4><Contenteditable v-model="item.title"></Contenteditable></h4>
                            <p><Contenteditable v-model="item.description"></Contenteditable></p>
                            <Actions actions="moveBackward,moveForward,remove" :collection="features" :item="item"></Actions>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4 service-column pt-4">
                    <Actions actions="add" :collection="features"></Actions>
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
    icon: 'fas fa-rocket',
    title: 'SMOOTH EXECUTION',
    description: 'Proin euismod sem ut diam ultricies, ut faucibus velit ultricies. Nam eu turpis quam. Duis ac condimentum eros.',
});
</script>
