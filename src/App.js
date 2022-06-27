import { Home, Cart, ItemDetails, NotFound } from 'pages';
import Header from 'components/Header';
import 'styles/main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/item/:id" component={ItemDetails} />
        <Route path="/cart" component={Cart} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
