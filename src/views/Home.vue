<template>
  <b-container>
    <app-slider />
    <counter-result />
    <counter-button />
    <another-result />
    <another-couter />
  </b-container>
</template>
<script>
// @ is an alias to /src
import Dashboard from "../components/dashboard/Dashboard.vue";
import Slider from '../components/common/Slider';
import Counter from '../components/counter/Counter';
import Result from '../components/counter/Result';
import AnotherResult from '../components/counter/AnotherResult';
import AnotherCounter from '../components/counter/AnotherCounter';

export default {
  name: "home",
  components: {
    Dashboard,
    appSlider: Slider,
    counterResult: Result,
    counterButton: Counter,
    anotherResult: AnotherResult,
    anotherCouter: AnotherCounter,
  }
};
</script>
