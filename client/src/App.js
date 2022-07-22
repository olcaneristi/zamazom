import 'styles/main.scss';
import MainRouter from 'routes/routes';
import { Toaster } from 'react-hot-toast';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Toaster containerStyle={{ top: 70 }} />
      <MainRouter />
    </Fragment>
  );
}

export default App;
