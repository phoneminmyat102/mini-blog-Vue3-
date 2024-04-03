import { ref } from "vue";
import { db } from "../firebase/config";
let getPosts = () => {
  let posts = ref([]);
  let errorMsg = ref("");

  let load = async () => {
    try {
      await new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
      });
      let response = await db.collection("posts").orderBy("created_at", "desc").get();
      // console.log(response.docs);

      posts.value = response.docs.map((doc) => {
          return {id:doc.id,...doc.data()}
      });
    } catch (err) {

      errorMsg.value = err.message;
    }
  };

  return { posts, errorMsg, load };
};
export default getPosts;
