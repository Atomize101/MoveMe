import React from 'react';
import {} from 'react-router-dom';
import { BrowserRouter, Route} from 'react-router-dom';

import Header from './Header';

const Dashboard = () => {
    return (
        <h2>Dashboard</h2>
    )
}

const NewItem = () => {
    return (
        <h2>NewItem</h2>
    )
}

const Landing = () => {
    return (
        <h2>Landing</h2>
    )
}

const App = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route path="/newitems" component={Dashboard} />
                    <Route exact path="/newitems/new" component={NewItem} />
                </div>
            </BrowserRouter>
        </div>
    );
};
export default App;

