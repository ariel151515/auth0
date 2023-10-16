import './App.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogouteButton';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
}

export default App;
