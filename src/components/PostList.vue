<template>
  <div v-for="post in posts" :key="post.id">
      <single-post :post="post"></single-post>
  </div>
    
</template>

<script>
import { ref } from "vue";
import SinglePost from "./SinglePost.vue";
export default {
  components: { SinglePost },
  props: ["posts"],

  setup(props) {

  },
};
</script>

<style></style>
