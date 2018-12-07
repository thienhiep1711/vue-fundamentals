<template>
  <div id="app">
    <navs/>
    <div class="app__wrap">
      <b-container>
        <transition name="slide" mode="in-out">
           <router-view/>
        </transition>
      </b-container>
    </div>
  </div>
</template>

<style lang="scss">
.app {
  &__wrap {
    padding: 20px 0;
  }
}
</style>


<script>
import Navs from "@/components/navbar/Navs.vue";
export default {
  name: "app",
  components: {
    Navs
  }
};
</script>
