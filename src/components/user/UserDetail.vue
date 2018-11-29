<template>
  <div>
    <h3>User detail</h3>
  <span>Has ID: {{ $route.params.id }}</span>
  <router-link tag="button" :to="`/user/${$route.params.id}/edit`">Edit User</router-link>
  </div>
</template>

<style lang="scss">


</style>

<script>
  export default {
    
  }
</script>