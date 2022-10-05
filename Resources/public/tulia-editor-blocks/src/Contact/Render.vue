<template>
    <div id="contact-us">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-xs-12">
                    <div class="left-text-content">
                        <div class="section-heading">
                            <h6>{{ block.data.label }}</h6>
                            <h2>{{ block.data.title }}</h2>
                            <div class="mb-4"></div>
                            <div v-html="block.data.description" v-if="block.data.description != ''"></div>
                        </div>
                        <ul class="contact-info">
                            <li
                                v-for="item in block.data.contactDetails"
                                :key="item.id"
                            >
                                <i :class="item.icon"></i> {{ item.text }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-8 col-md-8 col-xs-12">
                    <div class="contact-form">
                        [contact_form id="{{ block.data.contactFormId }}"]
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
</script>
