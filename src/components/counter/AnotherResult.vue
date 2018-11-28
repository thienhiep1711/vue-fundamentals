<template>
  <div>
    <h2>Result Another: {{doubleCounter}} </h2>
    <h2>Numbers of clicks: {{stringCounter}} </h2>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
  export default {
    computed: {
      ...mapGetters([
        'doubleCounter',
        'stringCounter'
      ])
    }
  }
</script>