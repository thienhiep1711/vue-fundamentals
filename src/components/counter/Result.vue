<template>
  <div>
    <h2>Result: {{counter}} </h2>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import * as types from '../../store/types';
export default {
  computed: {
     ...mapGetters({
      counter: types.SINGLE_COUNTER,
    })
  }
};
</script>
