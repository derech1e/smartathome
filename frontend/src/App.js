import React, {lazy, Suspense, useContext} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ThemeContext} from './context/ThemeContext'
import HeaderComponent from './components/weather/header/HeaderComponent'
import FooterComponent from './components/weather/footer/FooterComponent'
import LoaderComponent from './components/weather/loader/LoaderComponent'
import {DvbWidget} from "./components/Dvb/DvbComponent";
import {PumpWidget} from "./components/pump/PumpWidget";
import Logbook from "./components/logbook/Logbook";
import Radio from "./components/radio/Radio";
import PrinterInfo from "./components/printer/PrinterInfo";
import RecipeDetail from "./components/recipes/RecipeDetail";
import Recipe from "./components/recipes/Recipe";
import RecipeCreate from "./components/recipes/RecipeCreate";

const HomeContainer = lazy(() => import('./containers/home/HomeContainer'))

// const Logbook = lazy(() => import('./components/logbook/Logbook'))


function App() {
    const params = new URLSearchParams(window.location.search);
    const {theme} = useContext(ThemeContext)

    return (
        <Router>
            <div className={`bg-${theme} tracking-wider border-box wrapper`}>
                <div>
                    {/*{!params.get("key") && <HeaderComponent/>}*/}
                    <HeaderComponent />
                </div>
                <div>
                    <Suspense
                        fallback={<LoaderComponent loaderText='Loading components'/>}>
                        <Switch>
                            <Route path='/' exact component={HomeContainer}/>
                            <Route exact path="/dvb/:stop?/:amount?/:offset?"
                                   children={() => <DvbWidget name={"Malterstraße"}/>}/>
                            <Route exact path="/pump" children={() => <PumpWidget/>}/>
                            <Route exact path="/logbook" children={() => <Logbook/>}/>
                            <Route path="/radio" children={() => <Radio/>}/>
                            <Route path="/printer" children={() => <PrinterInfo/>}/>
                            <Route exact path="/recipe" children={() => <Recipe />}/>
                            <Route exact path="/recipe/create" children={() => <RecipeCreate />}/>
                            <Route path="/recipe/:id" children={() => <RecipeDetail />}/>
                        </Switch>
                    </Suspense>
                </div>
                <div>
                    <FooterComponent/>
                </div>
            </div>
        </Router>
    )
}

export default App;
