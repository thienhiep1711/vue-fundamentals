<template>
  <div>
    <b-button variant="danger" @click="asyncDecrement({by: 50, duration: 500})">
      Another Decrement -
    </b-button>
    <b-button variant="success" @click="asyncIncrement({by: 50, duration: 500})">
      Another Incement +
    </b-button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
  export default {
    methods: {
      ...mapActions([
        'asyncDecrement',
        'asyncIncrement',
      ])
    }
  }
</script>