<template>
<div>
    <h3>User page</h3>
    <b-button-group>
      <b-button variant="primary" @click="navigateToHome">Back to Home</b-button>
      <b-button variant="info">Create User</b-button>
    </b-button-group>
    <router-view></router-view>
</div>

</template>

<style lang="scss">


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