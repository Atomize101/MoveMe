import React from 'react';
import {} from 'react-router-dom';
import { BrowserRouter, Route} from 'react-router-dom';

const Header = () => {
    return (
        <h2>Header</h2>
    )
}

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
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" component={Landing} />
                </div>
            </BrowserRouter>
        </div>
    );
};
export default App;

