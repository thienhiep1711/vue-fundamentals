<template>
  <b-container>
    <counter-result />
    <counter-button />
    <br>
    <another-result />
    <another-couter />
    <br>
    <input-form />
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
import InputForm from '../components/inputForm/InputForm';


export default {
  name: "home",
  components: {
    Dashboard,
    appSlider: Slider,
    counterResult: Result,
    counterButton: Counter,
    anotherResult: AnotherResult,
    anotherCouter: AnotherCounter,
    inputForm: InputForm,
  }
};
</script>
