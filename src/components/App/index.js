import Header from '../Header';
import Footer from '../Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppRoutes from '../../constants/Routes';
import Pages from '../../pages';

function App() {
  return (
    <div className="AppComponent">
      <Router>
        <Header />
        <Switch>
          <Route path={AppRoutes.AboutMe}>
            <Pages.AboutMePage />
          </Route>
          <Route path={AppRoutes.ResumeBuilder}>
            <Pages.ResumeBuilder />
          </Route>
          <Route path={AppRoutes.TechBlogs}>
            <Pages.TechBlogsPage />
          </Route>
          <Route path={AppRoutes.PersonalBlogs}>
            <Pages.PersonalBlogsPage />
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
