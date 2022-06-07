<template>
  <div class="searchC">
    <div class="search">
    <input
      type="text"
      class="input"
      :placeholder="placeholder"
      v-model="msg"
      @keyup.enter="Search"
      @keyup.13="Search"
      
      required
    />
    </div>
  
  </div>
</template>
<style lang="scss" scoped>
.search {
  width: 100%;
  text-align: center;
  background-color: white;
}
.input {
  margin: 1rem auto;
  width: 20rem;
  height: 2rem;
  font-size: 1rem;
  line-height: 2rem;
  border-radius:1rem 1rem 1rem 1rem;
  border:none;
  outline: none;
  background-color:  #efefef;
  padding: 0 1rem;
}
</style>

<script>
export default {
  props: {
    placeholder: String,
    search:Function
  },
  data() {
    return {
      msg: ""
    } 
  },
  methods: {

    Search(e) {
     
      // this.$emit("search", e);
      this.search(e)
      this.msg=""
      console.log(this)

    },
  },
};
</script>