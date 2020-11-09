import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import MainHeader from "../src/components/header/MainHeader";

function App() {
    return (
        <Router>
            <div className="App">
                <MainHeader />
                <Switch>
                    <Route exact path="/">Main Page</Route>
                    <Route path="/members">Member Page</Route>
                    <Route path="/*">404 NOT FOUND</Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
