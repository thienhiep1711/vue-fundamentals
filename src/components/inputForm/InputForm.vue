<template>
  <b-row>
    <b-col>
      <b-form-input v-model="value" type="text" placeholder="Enter your numbers">
      </b-form-input>
    </b-col>
    <b-col>
      <h3>{{ value }}</h3>
    </b-col>
  </b-row>
</template>

<script>
import * as types from '../../store/types.js';
  export default {
    computed: {
    value: {
      get() {
        return this.$store.getters[types.VALUE];
      },
      set(value) {
        this.$store.dispatch(types.UPDATE_VALUE, value);
      }
    }
  },
  }
</script>