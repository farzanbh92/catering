import React, { useState } from 'react';

const LoginForm = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    //logic
    console.log('Logged in with:', username, password);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-8 text-blue-500">Login Please</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-1 font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-2 border rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div className="mb-4">
            
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>
          </div>
          
          <button type="submit"
          className="w-full mt-8 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
            Log In
          </button>

        </form>

        <button className="mt-4 text-gray-600 hover:text-gray-800" onClick={onClose}>
          Close
        </button>

      </div>
      
    </div>
  );
};

export default LoginForm;