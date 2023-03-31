import axios from 'axios';

function PostData() {

    var dataToPost = {
      title: "Post request",
      body:  "This is a message to post",
    };

    axios.post("https://jsonplaceholder.typicode.com/posts", dataToPost)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

      return (
        <div>
          <h2>Success</h2>
        </div>
      );
  }


export default PostData