import axios from 'axios';
import React, { useState, useEffect } from 'react';

function PostData() {

  const [success, setSuccess] = useState(false);
    var dataToPost = {
      title: "Post request",
      body:  "This is a message to post",
    };

    //useEffect
    async axios.post("https://jsonplaceholder.typicode.com/posts", dataToPost)
    await  
    .then((response) => {
        console.log(response.data);
        setData2(true);
      })
      .catch((error) => {
        console.log(error);
        setData2(false);
      });

      return (
        <div>
          <h2>Post was successful ? : Success</h2> //print success here
        </div>
      );
  }


export default PostData