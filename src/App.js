import React, { useState } from 'react';

const App = () => {
  const INITIAL_GAME_STATE = {victory: false, startTime: null, endTime: null };
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);

  const SNIPPETS = [
    'Bears, beets, battlestar galactica',
    "What's Forrest Gump's password? 1Forrest1",
    'Where do programmers like to hangout? The Foo Bar'
  ];
  const [snippet, setSnippet] = useState('');

  const chooseSnippet = snippetIndex => () => {
    console.log({snippetIndex});
    setSnippet(SNIPPETS[snippetIndex]);
    setGameState({...gameState, startTime: new Date().getTime() });
  }

  // useState('') is setting the default value of an empty string to the variables 'userText and 'setUserText'
  const [userText, setUserText] = useState('');

  const updateUserText = event => {
    setUserText(event.target.value);
    console.log({userText});

    if(event.target.value === snippet) {
      setGameState({
        ...gameState,
        victory: true, 
        endTime: new Date().getTime() - gameState.startTime
       })
    }
    
  }
  return (
    <div>
      <h2>Type Race</h2>
    <hr />
    <h3>Snippet</h3>
    {snippet}
    <h4>{gameState.victory ? `Done! Time: ${gameState.endTime}ms` : null}</h4>
      <input value={userText} onChange={updateUserText}/>
      <hr/>
      {
        SNIPPETS.map((SNIPPET, index) => (
          <button onClick={chooseSnippet(index)} key={index}>
            {SNIPPET.substring(0, 10)}...
          </button>
        ))
      }
    </div>
  );
}

export default App;
