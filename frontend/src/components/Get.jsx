import axios from "axios";
import React ,{useEffect,useState}from "react";

 

export default function Get(props) {

  const [tasks, setTasks] = useState();

 const baseURL=props.url
function gettata() {
  
  console.log('run');
  axios.get(`https://todo.egysnakes.com/${baseURL}`)
  .then(response => {
    setTasks(response.data);
  })
  .catch(error => {
    console.error('An error occurred while fetching data: ', error);
  });


}
function delet(params) {
  setTasks(null)
  
}
console.log(tasks);

  return (
    <div style={{borderStyle:"solid"}}>
      <div>{props.title}</div>
      <div>'</div>
      <button onClick={gettata}>get</button>
      <button onClick={delet}>delet</button>

      {tasks?tasks?.map(task => (
          <li key={task?.id}>{task?.item}</li>
        )):" "}
        <hr/>
        <hr/>
        <hr/>
     </div>
  );
}
