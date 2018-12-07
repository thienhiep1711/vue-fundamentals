<template>
<div>
  <b-table striped hover :items="users" :fields="fields">
      <template slot="name" slot-scope="item">
        {{item.value.firstName}} {{item.value.lastName}}
      </template>
      <template slot="control" slot-scope="item">
        <b-button variant="warning" @click="() => {handleEdit(item.item.id)}">Edit</b-button>
        <b-button variant="danger" @click="() => {handleDelete(item.item.id)}">Delete</b-button>
      </template>
    </b-table>
    <b-modal ref="myModalDetailRef" title="Using Component Methods">
        <user-from />
    </b-modal>
</div>
  
</template>
<script>
import UserFrom from './UserFrom';
  export default {
    components: {
     UserFrom,
    },
    props: [
      'users'
    ],
    data() {
      return {
        fields: [ 
          'id',
          'emailAddress', 
          'phoneNumber', 
          'address',
          {key: 'name', label: "Full name"},
          {key: 'control', label: "Option"}
        ],
      }
    },
   
    methods: {
      handleEdit(id) {
        this.$refs.myModalDetailRef.show();
        let matches = users.filter(p => p.id.toLowerCase().includes(id));
        console.log(matches)
      },
      handleDelete(id) {
        alert(`Delete: ${id}`);
      },
      hideModal() {
        this.$refs.myModalDetailRef.hide();
      }
    }
  }
</script>