import './App.css';
import Programmes from './views/Programmes'
import HomePage from './views/HomePage'
import SignIn from './views/Authentication/SignIn'
import Registration from './views/Authentication/Registration'

function App() {
  return (
    <div className="container">
      <h1>Environmental Club</h1>
      {/* <HomePage /> */}
      {/* <SignIn /> */}
      {/* <Registration /> */}
      <Programmes />
    </div>
  );
}

export default App;