<template>
 <div>
  <BWindow :frame="[20, 30, 400, 200]" title="People">
   <BBox>Heisann</BBox>
  </BWindow>
 </div>
</template>

<script>
import Vue from 'vue'
import BApplication from '../../kits/app/Application.vue'
import BWindow from '../../kits/interface/Window.vue'
import BBox from '../../kits/interface/Box.vue'

export default Vue.extend({
    name: 'PeopleApp',
    mixins: [BApplication],
    components: {
        BWindow, BBox
    },
    data: function() {
        return {
            signature: "application/People"
        }
    }
})
</script>