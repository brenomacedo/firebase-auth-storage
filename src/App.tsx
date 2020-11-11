import React, { useEffect } from 'react'
import { FaGoogle } from 'react-icons/fa'
import firebase from './api/firebase'
import './App.css'

function App() {

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                alert('usuario logado')
            } else {
                alert('usuario nao logado')
            }
        })
    }, [])

    const login = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider).then(res => {
            console.log(res)
        }).catch(err => {
            alert('erro ao logar')
        })
    }

    return (
        <div className="container">
            <button onClick={login}><FaGoogle size={25} color='black' /></button>
        </div>
    )
}

export default App
