import logo from './next-logo.png';
import './App.css';

function App() {
  /*const keycloak = new Keycloak({
    url: 'http://localhost:8080/auth',
    realm: 'your-realm',
    clientId: 'your-client',
  });

  keycloak.init({ onLoad: 'login-required' })
  .then((authenticated) => {
    console.log(authenticated ? 'User is authenticated' : 'User is not authenticated');
  })
  .catch((error) => {
    console.error('Authentication error:', error);
  });*/
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      
    </div>
  );
}

export default App;
