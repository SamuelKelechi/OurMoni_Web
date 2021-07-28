import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Component/Home/Home';
import About from './Component/About/About';
import SignUp from './Component/SignUp/SignUp'
import 'antd/dist/antd.css'


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
