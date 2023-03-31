import React, { Fragment, Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import HomePageOne from '../Pages/HomePageOne'
import HomePageTwo from '../Pages/HomePageTwo'
import HomePageThree from '../Pages/HomePageThree'
import AboutPage from '../Pages/AboutPage'
import PracticePage from '../Pages/PracticePage'
import PracticeSinglePage from '../Pages/PracticeSinglePage'
import PortfolioPage from '../Pages/PortfolioPage'
import SinglePortfolioPage from '../Pages/SinglePortfolioPage'
import TeamPage from '../Pages/TeamPage'
import SingleTeamPage from '../Pages/SingleTeamPage'
import ContactPage from '../Pages/ContactPage'
import BlogLeftPage from '../Pages/VirtualLegal'
import Gallery from '../Pages/Gallery'
import VirtualLegal from '../Pages/VirtualLegal'
import BlogFullWidth from '../Pages/BlogFullWidth'
import SitemaGestion from '../Pages/SitemaGestion'
import './App.css';

class App extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <ToastContainer autoClose={2500} position="top-center" />
                    <Switch>
                        <Route exact path="/" component={HomePageOne} />
                        <Route exact path="/about" component={AboutPage} />
                        <Route exact path="/cobertura" component={PracticePage} />
                        <Route exact path="/documentos" component={PracticeSinglePage} />
                        <Route exact path="/sistema-integrado-gestion" component={SitemaGestion} />
                        <Route exact path="/abogados" component={SingleTeamPage} />
                        <Route exact path="/clientes" component={TeamPage} />
                        <Route exact path="/contact" component={ContactPage} />
                        <Route exact path="/gallery" component={Gallery} />
                        <Route exact path="/services" component={PortfolioPage} />
                        <Route exact path="/virtual-legal" component={VirtualLegal} />
                        <Route exact path="/case-stadies-details" component={SinglePortfolioPage} />
                        <Route exact path="/blog-fullwidth" component={BlogFullWidth} />
                        <Route exact path="/home-two" component={HomePageTwo} />
                        <Route exact path="/home-three" component={HomePageThree} />
                    </Switch>
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default App;
