import React from 'react';
import { Route } from "react-router-dom";
import Header from "./elements/Header";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Package from "./pages/Package";
import CreatePackage from "./pages/CreatePackage";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { packageId: 0}
    }

    changeActivePackage(packageId){
        this.setState({packageId: packageId});
    }

    render() {
        return (
            <React.Fragment>
                <Header/>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route exact path='/home'>
                    <Home/>
                </Route>
                <Route path='/catalog'>
                    <Catalog changeActivePackage={this.changeActivePackage}/>
                </Route>
                <Route path='/package'>
                    <Package />
                </Route>
                <Route path='/create'>
                    <CreatePackage/>
                </Route>
                {/*<Footer/>*/}
            </React.Fragment>
        );
    }
}

export default App;
