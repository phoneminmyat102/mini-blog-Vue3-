<template>
  <div class="tag">
    <div v-if="errMsg">
      <p>{{ errMsg }}</p>
    </div>
    <div v-if="posts.length > 0" class="layout">
      <div>
        <PostList :posts="filteredPosts"></PostList>
      </div>

      <div>
        <TagCloud :posts = "posts"></TagCloud>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import TagCloud from "../components/TagCloud";
import PostList from "../components/PostList";
import getPosts from "@/composables/getPosts";
import { computed } from "vue";
export default {
  components: {
    TagCloud,
    PostList,
  },
  props: ["tag"],

  setup(props) {
    let { posts, errMsg, load } = getPosts();
    load();

    let filteredPosts = computed(() => {
      return posts.value.filter((post) => {
        return post.tags.includes(props.tag);
      });
    });

    return { posts, errMsg, filteredPosts };
  },
};
</script>

<style>
.tag{
    max-width: 1200px;
    margin: 0 auto;
}
</style>
