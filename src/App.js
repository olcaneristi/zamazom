import { Home, Cart, ItemDetails, NotFound, Favorites } from 'pages';
import Header from 'components/Header';
import 'styles/main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Toaster />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products/:slug" component={ItemDetails} />
        <Route path="/cart" component={Cart} />
        <Route path="/favorites" component={Favorites} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
