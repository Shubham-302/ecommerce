import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/slices/authSlice';

const AuthForm = ({ isLogin }) => {
  const [form, setForm] = useState({ username: '', password: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      dispatch(loginUser(form));
    } else {
      // Implement registration logic here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={form.username} onChange={handleChange} placeholder="Username" />
      <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" />
      <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
    </form>
  );
};

export default AuthForm;
