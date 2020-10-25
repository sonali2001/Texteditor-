import React from 'react';
//import logo from './logo.svg';
import './App.css';
import TextEditor from './components/TextEditor';
import List from './components/List';
import { Scrollbars } from 'react-custom-scrollbars';


function App() {
  return (
    <div className="App">
      <header>
        <h3>React Project</h3>
      </header>
           <table>
             <tr>
               
               <td>
               <Scrollbars style={{ width: 350, height: 540 }}> 
               <div className="body">
               <div className='list'>
           <List/>
           </div>
           <div className='list'>
           <List/>
           </div>
           <div className='list'>
           <List/>
           </div>
           <div className='list'>
           <List/>
           </div>
           <div className='list'>
           <List/>
           </div>
           

           </div>
           </Scrollbars>
               </td>

               <td>
           <Scrollbars style={{ width: 950, height: 540 }}> 
           <div className="body">
           <div className="editor">
             <TextEditor />
           </div>
           <div className="editor">
             <TextEditor />
           </div>
           <div className="editor">
             <TextEditor />
           </div>
           <div className="editor">
             <TextEditor />
           </div>
           <div className="editor">
             <TextEditor />
           </div>
           </div>
           </Scrollbars>
               </td>

             </tr>
           </table>  
      </div>
    
  );
}

export default App;
