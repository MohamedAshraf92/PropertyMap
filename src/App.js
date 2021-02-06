import { Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './containers/layout/layout'
import Home from './containers/home/home'
import AddProperty from './components/addProperty/addProperty'

function App() {
    return (
        <Switch>
            <Layout>
                <Route exact path='/' >
                    <Redirect to='/home' />
                </Route>
                <Route exact path='/addProperty' component={AddProperty} />
                <Route exact path='/home' component={Home} />
            </Layout>
        </Switch>
    );
}

export default App;
