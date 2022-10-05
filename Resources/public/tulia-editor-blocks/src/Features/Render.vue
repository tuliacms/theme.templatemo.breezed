<template>
    <div id="features">
        <div class="container">
            <div class="row">
                <div
                    v-for="item in block.data.features"
                    :key="item.id"
                    class="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                >
                    <div class="features-item">
                        <div class="features-icon">
                            <i :class="item.icon"></i>
                        </div>
                        <div class="features-content">
                            <h4>{{ item.title }}</h4>
                            <p>{{ item.description }}</p>
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
</script>
