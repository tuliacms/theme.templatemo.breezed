<template>
    <div id="contact-us">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-xs-12">
                    <div class="left-text-content">
                        <div class="section-heading">
                            <h6><Contenteditable v-model="block.data.label"></Contenteditable></h6>
                            <h2><Contenteditable v-model="block.data.title"></Contenteditable></h2>
                            <div class="mb-4"></div>
                            <WysiwygEditor v-model="block.data.description"></WysiwygEditor>
                        </div>
                        <ul class="contact-info">
                            <li
                                v-for="item in elements.collection"
                                :key="item.id"
                            >
                                <FontIcon v-model="item.icon"></FontIcon> <Contenteditable v-model="item.text"></Contenteditable>
                                <br />
                                <Actions actions="moveUp,moveDown,remove" :collection="elements" :item="item"></Actions>
                            </li>
                            <li>
                                <Actions actions="add" :collection="elements"></Actions>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-8 col-md-8 col-xs-12">
                    <div class="contact-form">
                        <div class="card">
                            <div class="card-body">
                                {{ translator.trans('Here will be rendered form.', 'TuliaLisa') }}
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
const block = inject('blocks.instance').editor(props);
const translator = inject('translator');

// Your block logic here...
const Contenteditable = block.extension('Contenteditable');
const WysiwygEditor = block.extension('WysiwygEditor');
const FontIcon = block.extension('FontIcon');
const Collection = block.extension('Collection');
const Actions = block.extension('Collection.Actions');

const elements = new Collection(block.data.contactDetails, {
    icon: 'fas fa-rocket',
    title: 'SMOOTH EXECUTION',
    description: 'Proin euismod sem ut diam ultricies, ut faucibus velit ultricies. Nam eu turpis quam. Duis ac condimentum eros.',
});
</script>
