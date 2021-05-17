import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Header from './components/Header'
import './assets/css/base/base.css'
import Post from './pages/Post'
import Login from './pages/Login'
import Register from './pages/Register'
import SendFile from './pages/SendFile';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/posts/:id'>
          <Post />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/sendfile'>
          <SendFile />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
      </Switch>

    </Router>

  );
}

export default App;
