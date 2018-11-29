<template>
  <div>
    <b-button variant="danger" @click="decrement(100)">
      Decement -
    </b-button>
    <b-button variant="success" @click="increment(50)">
      Incement +
    </b-button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import * as types from '../../store/types';
  export default {
    methods: {
      ...mapActions({
        increment: types.COUNTER_INCREMENT,
        decrement: types.COUNTER_DECREMENT
      })
    }
  }
</script>