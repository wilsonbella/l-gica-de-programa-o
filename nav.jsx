
import React from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from "./Home";
import Produtos from "./Produtos";
import NossasLojas from "./nossasLojas";
import Contatos from "./Contatos";

const Nav = () => {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-justified">
                <Link className="navbar-brand" to="/"><img className="w-50" src="logo.jpg" alt="Logo"/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav px-5 text-nowrap">
                        <Link className="nav-item nav-link" to="/Produtos">Produtos</Link>
                        <Link className="nav-item nav-link" to="/NossasLojas">Nossas Lojas</Link>
                        <Link className="nav-item nav-link" to="/Contatos">Contatos</Link>
                    </div>
                </div>
            </nav>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/Produtos" component={Produtos}/>
                <Route path="/nossasLojas" component={nossasLojas}/>
                <Route path="/Contatos" component={Contatos}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Nav;
