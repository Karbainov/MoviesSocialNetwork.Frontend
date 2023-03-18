import React from 'react';
import './App.scss';
import Home from './pages/HomePage/Home';
import Group from './pages/GroupPage/Group';
import Login from './pages/LoginPage/Login';
import Register from './pages/RegisterPage/Register';
import User from './pages/UserPage/User';
import Actor from './pages/ActorPage/Actor';
import Wishlist from './pages/WishlistPage/Wishlist';
import Movies from './pages/MoviesPage/Movies';
import Movie from './pages/MoviePage/Movie';
import Settings from './pages/SettingsPage/Settings';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className="main">
        <Home />
        <Group />
        <Login />
        <Register />
        <User />
        <Movie />
        <Movies />
        <Actor />
        <Wishlist />
        <Settings />
      </div>
      <Footer />
    </div>

  );
}

export default App;
