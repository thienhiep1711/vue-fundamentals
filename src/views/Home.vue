<template>
  <b-container>
    <app-slider />
    <counter-result />
    <counter-button />
    <another-result />
    <another-couter />
    <b-form-input
      v-model="value"
      type="text"
      placeholder="Enter your numbers">
    </b-form-input>
    <p>Value: {{ value }}</p>
  </b-container>
</template>
<script>
// @ is an alias to /src
import * as types from '../store/types';
import Dashboard from "../components/dashboard/Dashboard.vue";
import Slider from '../components/common/Slider';
import Counter from '../components/counter/Counter';
import Result from '../components/counter/Result';
import AnotherResult from '../components/counter/AnotherResult';
import AnotherCounter from '../components/counter/AnotherCounter';


export default {
  name: "home",
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
  components: {
    Dashboard,
    appSlider: Slider,
    counterResult: Result,
    counterButton: Counter,
    anotherResult: AnotherResult,
    anotherCouter: AnotherCounter
  }
};
</script>
