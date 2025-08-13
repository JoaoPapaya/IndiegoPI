import { useState } from 'react'
import './App.css'
import EmailInput from './components/EmailInput'
import LoginButton from './components/LoginButton'
import PasswordInput from './components/PasswordInput'

function App() {

  return (
    <>
      <EmailInput />
      <PasswordInput />
      <LoginButton />
    </>
  )
}

export default App
