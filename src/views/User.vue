<template>
<div class="mainPage">
  <h3 class="mainPage__title">User page</h3>
  <b-button-group>
    <b-button variant="primary" @click="navigateToHome">Back to Home</b-button>
    <b-button variant="info">Create User</b-button>
  </b-button-group>
  <router-view></router-view>
</div>
</template>

<style lang="scss">
  .mainPage {
    &__title {
      background-color: #e5e5e5;
      padding: 10px 10px 10px;
      text-transform: uppercase;
      font-size: 22px;
      border-left: 5px solid #333;
      margin-bottom: 20px;
    }
  }

</style>

<script>
  export default {
    
    methods: {
      navigateToHome() {
        this.$router.push({path: '/'});
      }
    }
  }
</script>