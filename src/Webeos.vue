<template>
  <div id="app">
    <div style="position:fixed; top: 10px; right: 10px; width: 50px; height: 50px; background:pink" 
    @click="openwindow">
    </div>
    
    <PeopleApp/>

    <!--BWindow 
        v-for="(properties, signature) in GetAppList" 
        :key="signature"
        :title="properties.title"
        :frame="properties.frame" /-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PeopleApp from './apps/people/PeopleApp.vue'

export default {
    name: 'WebeOS',
    components: {
        PeopleApp
    },
    computed: {
        ...mapGetters(['GetAppList'])
    },
    methods: {
        openwindow() {
            alert('test')
        }
    },
    mounted() {
        console.log('BOOTED')
        
        // console.log(this.GetAppList)
        // this.$store.commit('Launch', {
        //     frame: [20, 20, 200, 60],
        //     title: "People",
        // })
        // console.log(this.GetAppList)
    }
}
</script>

<style>
* { box-sizing: border-box; }
html, body {
    margin: 0;
    height: 100%;
    width: 100%;
}
#app {
    height: inherit;
    width: inherit;
    background: #31639C;
    cursor: url('../data/artwork/cursors/pointer.png'), default;
}
</style>
