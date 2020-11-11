import React, { useEffect, useRef } from 'react'
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

    const inputRef = useRef<HTMLInputElement>(null)

    const login = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider).then(res => {
            console.log(res)
        }).catch(err => {
            alert('erro ao logar')
        })
    }

    const uploadImage = () => {
        const storeRef = firebase.storage().ref()
        if(!inputRef.current?.files) {
            return
        }

        storeRef.child(`${Date.now()}.png`).put(inputRef.current.files[0]).then(res => {
            alert('uploaded successfully')
        }).catch(err => {
            alert('error')
        })
    }

    return (
        <div className="container">
            <button onClick={login}><FaGoogle size={25} color='black' /></button>
            <input ref={inputRef} type="file"/>

            <button onClick={uploadImage}>Upload</button>
        </div>
    )
}

export default App
