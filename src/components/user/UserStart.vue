<template>
<div class="table__wrap">
  <user-table :users="users" />
</div>

  
</template>

<style lang="scss">

  .table {
    &__wrap {
      margin-top: 20px;
    }
  }
</style>

<script>
import users from '../../services/userApis.js';
import UserTable from './UserTable';
  export default {
    data() {
      return {
        users: users
      }
    },
    components: {
      UserTable,
      
    }
  }
</script>