import { ref } from "vue";

let loadSinglePost = (id) => {
  let post = ref(null);
  let errorMsg = ref("");
  let loading = async () => {
    try {
        // await new Promise((resolve, reject)=>{
        //     setTimeout(resolve, 1000);
        // })
      let response = await fetch("http://localhost:3000/posts/" + id);
      if (response.status === 404) {
        throw new Error("NOT FOUND URL");
      }
      let data = await response.json();
      post.value = data;
    } catch (err) {
      errorMsg.value = err.message;
    }
  };
  return { post, errorMsg, loading };
};

export default loadSinglePost;
