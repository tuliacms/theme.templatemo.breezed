<template>
    <div id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-xs-12">
                    <div class="left-text-content">
                        <div class="section-heading">
                            <h6>{{ block.data.label }}</h6>
                            <h2>{{ block.data.title }}</h2>
                        </div>
                        <div class="row">
                            <div
                                v-for="item in block.data.features"
                                :key="item.id"
                                class="col-md-6 col-sm-6"
                            >
                                <div class="service-item">
                                    <div class="service-icon">
                                        <i :class="item.icon"></i>
                                    </div>
                                    <h4>{{ item.title }}</h4>
                                </div>
                            </div>
                        </div>
                        <div class="row" v-if="block.data.showButton === 'yes'">
                            <div class="col-md-12">
                                <a href="#" class="main-button-icon">
                                    {{ block.data.buttonLabel }} <i :class="block.data.buttonIcon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-xs-12">
                    <div class="right-text-content" v-html="block.data.content"></div>
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
