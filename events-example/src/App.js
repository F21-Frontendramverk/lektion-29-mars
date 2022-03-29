import './App.css';

function App() {
  let username = '';
  let password = '';

  // Deklareras nedan som en arrow function som är detsamma som nedanstående funktion
  function getUsername(event) {
    username = event.target.value;

    console.log(username);
  }

  function getPassword(event) {
    password = event.target.value;

    console.log(password);
  }

  function login() {
    console.log(`Användarnamn: ${username}`);
    console.log(`Lösenord: ${password}`);
  }

  return (
    <div className="App">
      <input type="text" placeholder="Användarnamn" 
        onKeyUp={ (event) => { username = event.target.value; } } />
      <input type="password" placeholder="Lösenord"
        onKeyUp={ getPassword } />
      <button onClick={ login }>Logga in</button>
      <p>Användarnamn: { username }</p>
    </div>
  );
}

// const inputElem = document.querySelector('input');

// inputElem.addEventListener('keyup', (event) => {
//   console.log(event.target.value);
// });

export default App;
