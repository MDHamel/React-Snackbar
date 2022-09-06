import { useState } from 'react';
import './App.css';
import "./Snackbar"
import SnackBar from './Snackbar';
import Content from './Content';


function App() {
  const [content, setContent] = useState("home");
  const [compress, setCompress] = useState("compress")

  return (
    <div className="App">
      <SnackBar setContent={setContent} compress={compress} setCompress={setCompress}/>
      <div onClick={()=>{setCompress("compress")}}>
        <Content load={content} />
      </div>
      
    </div>
  );
}

export default App;
