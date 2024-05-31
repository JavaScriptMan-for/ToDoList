import {Routes, Route, Link} from 'react-router-dom'

import Main_page from './pages/Main_page';
import Redact_page from './pages/Setting_page';
import Notfound from './pages/Notefound';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./assets/css/index.css"


const App = () => {
const [isErr, setIsErr] = useState<boolean>(false)
  const location = useLocation();

    useEffect(()=> {
        if(location.pathname !== '/' && location.pathname !== '/redact') {
            setIsErr(true)
        } else {
            setIsErr(false)
        }
        switch(location.pathname) {
            case "/": document.title = "Главная страница"; break;
            case "/redact": document.title = "Редактировать"; break;
            default: document.title = "Ошибка"
        }
    },[location])

    return (
        <>
    
        <header>
            {!isErr ? <Link to='/'>Главная страница</Link> : null}
            {!isErr ? <Link to='/redact'>Настройки</Link> : null}
        </header>
       <Routes>
            <Route path='/' element={<Main_page />}/>
            <Route path='/redact' element={<Redact_page />}/>
            <Route path='*' element={<Notfound />}/>
       </Routes>
        </>
    )
 }
 export default App;