import { ref } from "vue";

let getPosts = () => {
  let posts = ref([]);
  let errorMsg = ref("");

  let load = async () => {
    try {
      // await new Promise((resolve, reject) => {
      //   setTimeout(resolve, 1000);
      // });
      let response = await fetch("http://localhost:3000/posts");
      if (response.status === 404) {
        throw new Error("Not Found URL");
      }
      let datas = await response.json();
      posts.value = datas;
    } catch (err) {

      errorMsg.value = err.message;
    }
  };

  return { posts, errorMsg, load };
};
export default getPosts;
