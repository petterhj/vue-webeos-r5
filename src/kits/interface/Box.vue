/* 
BBox
=================================================================================
*/

<template>
 <div class="b-view b-box">
  <slot></slot>
 </div>
</template>

<script>
import BView from './View.vue'

export default {
    name: 'BBox',
    mixins: [BView],
    props: {},
    data: function() {
        return {}
    },
}
</script>

<style scoped>
.b-box {
    border-left-color: #FFF;
    border-top-color: #FFF;
    border-right-color: #B8B8B8;
    border-bottom-color: #B8B8B8;
    background: #D8D8D8;
}
</style>
