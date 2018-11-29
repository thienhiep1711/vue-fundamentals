<template>
  <div>
    <h3>Result Another: {{doubleCounter}} </h3>
    <h3>Numbers of clicks: {{stringCounter}} </h3>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from '../../store/types';
export default {
  computed: {
    ...mapGetters({
      doubleCounter: types.DOUBLE_COUNTER,
      stringCounter: types.CLICK_COUNTER
    })
  }
};
</script>
