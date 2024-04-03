import { ref } from "vue";
import { db } from "../firebase/config"
let loadSinglePost = (id) => {
  let post = ref(null);
  let errorMsg = ref("");
  let loading = async () => {
    try {
        await new Promise((resolve, reject)=>{
            setTimeout(resolve, 1000);
        })

      let docu = await db.collection("posts").doc(id).get();
      post.value = {id:docu.id, ...docu.data()};
      
    } catch (err) {
      errorMsg.value = err.message;
    }
  };
  return { post, errorMsg, loading };
};

export default loadSinglePost;
