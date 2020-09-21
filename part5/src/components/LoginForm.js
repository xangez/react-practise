import React, { useState } from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    await handleLogin({ username: username, password: password })
    // setUsername('')
    // setPassword('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          username
          <input id="username" value={username} onChange={({ target }) => setUsername(target.value)} />
        </div>
        <div>
          password
          <input id="password" value={password} onChange={({ target }) => setPassword(target.value)} />
        </div>
        <button id="login-button" type="submit">
          login
        </button>
      </form>
    </div>
  )
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
}

export default LoginForm
