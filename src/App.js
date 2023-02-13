import React, {Fragment}  from "react";
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import CoinsPage from './Pages/CoinsPage';

function App() {
    return (
        <BrowserRouter>
            <Fragment>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/coins">Coins</Link>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route exact path='/coins' element={<CoinsPage/>}/>
                        <Route exact path='/' element={<Homepage/>}/>
                    </Routes>
                </div>
            </Fragment>
        </BrowserRouter>
    );
};

export default App;
