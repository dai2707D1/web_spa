import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import login from './components/login';



function App() {
    document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'));
}
function switchTheme(){
    const theme=document.getElementById("theme").value;
    document.getElementsByName("meta")[2].content=theme;
}

export default App;
