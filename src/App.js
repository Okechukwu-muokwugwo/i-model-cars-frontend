import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Main from './components/Main/Main';
import Login from './Forms/Login';
import SignUpForm from './components/SignUp/SignUp';
import Details from './components/details/Details';
import NewReservationForm from './components/reservations/NewReservationForm';
import Reservations from './components/reservations/Reservations';
import reservationReducer from './redux/reservationsSlice';
import './App.css';
import AddCar from './components/addcar/AddCar';
import RemoveCar from './components/deletecar/RemoveCar';

const store = configureStore({
  reducer: reservationReducer,
});

const App = () => (
  <Provider store={store}>
    <Routes>
      <Route path="/" element={<RemoveCar />} />
      <Route path="/" element={<Main />} />
      <Route path="/new-car" element={<AddCar />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/reservations/new" element={<NewReservationForm />} />
    </Routes>
  </Provider>
);

export default App;
