import React, {Component, useState} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';


const App = props => {
  const [text, setText] = useState('');

  const deleteCharHandler = (index) =>{
    const textTemp = text.split('');
    textTemp.splice(index,1);
    setText(textTemp.join(''));
  }

  const inputChangedHandler = (event) => {
    setText(event.target.value);
    console.log(text);
    console.log(text);
  }

  let characters = (
    <div>
      {
      text.split('').map((char, index) => {
      return(<CharComponent 
                name={char}
                click={() => deleteCharHandler(index)}/>);
    })
    }
    </div>
    
  )

  return (
    <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component ( ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component ( CharComponent) and style it as an inline box ( display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input onChange ={(event) =>inputChangedHandler(event)} value={text} />
        <p>The text you entered has {text.length} characters</p>
        <ValidationComponent text = {text}/>
        {characters}
      </div>
  );
}

export default App;
