import Header from '../Header';
import Footer from '../Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppRoutes from '../../constants/Routes';
import Pages from '../../pages';
import './index.scss';

function App() {
  return (
    <div className="AppComponent">
      <Router>
        <Header />
        <Switch>
          <Route path={AppRoutes.AboutMe}>
            <Pages.AboutMePage />
          </Route>
          <Route path={AppRoutes.CSS}>
            <Pages.CssPage />
          </Route>
          <Route path={AppRoutes.Javascript}>
            <Pages.JavascriptPage />
          </Route>
          <Route path={AppRoutes.React}>
            <Pages.ReactPage />
          </Route>
          <Route path={AppRoutes.Home}>
            <Pages.HomePage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
