import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import PCGames from "./components/PCGames";
import PS4Games from "./components/PS4Games";
import PSPGames from "./components/PSPGames";
import SwitchGames from "./components/SwitchGames";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import red from '@material-ui/core/colors/red'
import ErrorPage from './components/ErrorPage';

const theme = createMuiTheme({
    palette: {
        primary: red
    }
});

ReactDOM.render(
    <BrowserRouter>
        <BaseLayout>
            <MuiThemeProvider theme={theme}>
                <Switch>
    
                    <Route exact path="/" component={App}/>
                    <Route path="/aboutus" component={AboutUs}/>
                    <Route path="/contactus" component={ContactUs}/>
                    <Route path="/pcgames" component={PCGames}/>
                    <Route path="/ps4games" component={PS4Games}/>
                    <Route path="/pspgames" component={PSPGames}/>
                    <Route path="/switchgames" component={SwitchGames}/>
                    <Route path="/errorpage" component={ErrorPage}/>

                </Switch>
            </MuiThemeProvider>
        </BaseLayout>
    </BrowserRouter>
 
    , document.getElementById('root'));
registerServiceWorker();
