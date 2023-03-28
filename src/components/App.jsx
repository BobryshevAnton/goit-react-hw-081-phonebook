import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';

import { Home } from './Pages/Home';
import { PhoneBook } from './Pages/PhoneBook';
import { Register } from './Pages/Register';
import { LogIn } from './Pages/LogIn';
import Footer from './Footer/Footer';

import { NotFound } from './Pages/NotFound';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route index path="/phonebook" element={<PhoneBook />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logIn" element={<LogIn />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};
