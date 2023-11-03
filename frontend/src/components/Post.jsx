import React, { useState } from 'react';
import axios from 'axios';

function Post() {
  const [name, setName] = useState('');
  const [result, setResult] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };


 


  const checkName = async () => {


    const dataToSend = {
     name,
      };
    

    axios
  .post('https://todo.egysnakes.com/checkName', dataToSend)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
  };





  return (
    <div>
      <h1>Check if 'a' is in the name</h1>
      <input type="text" value={name} onChange={handleNameChange} placeholder="Enter a name" />
      <button onClick={checkName}>Check</button>
      <p>{result}</p>
    </div>
  );
}

export default Post;
