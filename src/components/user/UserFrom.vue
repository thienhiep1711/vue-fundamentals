<template>
  <div>
    <b-form-group>
      <b-form-input placeholder="Enter your name" v-model="name" type="text"></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-input placeholder="Enter your age" v-model="age" type="text"></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-input placeholder="Enter your address" v-model="address" type="text"></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-input placeholder="Enter your phone" v-model="phone" type="text"></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-input placeholder="Enter your email" v-model="email" type="text"></b-form-input>
    </b-form-group>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        name: '',
        age: '',
        address: '',
        phone: '',
        email: '',
      }
    }
  }
</script>