<template>
  <div class="bt-group">
    <b-button variant="danger" @click="asyncDecrement({by: 50, duration: 500})">
      Another Decrement -
    </b-button>
    <b-button variant="success" @click="asyncIncrement({by: 50, duration: 500})">
      Another Incement +
    </b-button>
  </div>
</template>
<style lang="scss">
.bt-group {
  button {
    margin-right: 10px;
  }
}
</style>

<script>
import {mapActions} from 'vuex';
import * as types from '../../store/types';
  export default {
    methods: {
      ...mapActions({
        asyncDecrement: types.COUNTER_DECREMENT_ASNYC,
        asyncIncrement: types.COUNTER_INCREMENT_ASNYC,
      })
    }
  }
</script>