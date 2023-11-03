import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Get from './components/Get'
import Post from './components/Post'
 
function App() {
  const [count, setCount] = useState(0)



  const [displayUrl, setDisplayUrl] = useState('http://localhost:5000/');

  const toggleText = () => {
    setDisplayUrl(displayUrl === 'http://localhost:5000/' ? 'https://todo.egysnakes.com' : 'http://localhost:5000/');
  };


  return (
    <>
      <div>

        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button onClick={toggleText}>تبديل</button>
      <p>{displayUrl}</p>



      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       <div style={{display:'flex',}}>
        
        <Get baseURL={displayUrl} url={'tasks'}  title={'from index.js'}/>
        <Get baseURL={displayUrl} url={'users'} title={'./controllers/usersController.js'}/>
       </div>
      </div>
      <Post baseURL={displayUrl}/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
