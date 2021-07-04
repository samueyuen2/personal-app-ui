import './App.css';
import Home from './components/Home';
import NavbarOnTop from './components/NavbarOnTop';
import GeneralExpenseInput from './components/accounting/GeneralExpenseInput'
import CurrentMonthReport from './components/accounting/CurrentMonthReport'
import MonthlyReport from './components/accounting/MonthlyReport'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <NavbarOnTop />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/generalexpenseinput" component={GeneralExpenseInput} exact />
          <Route path="/currentmonthreport" component={CurrentMonthReport} exact />
          <Route path="/monthlyreport" component={MonthlyReport} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
