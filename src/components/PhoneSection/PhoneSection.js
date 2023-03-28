import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'components/redux/contacts/operations';
import { selectContacts } from 'components/redux/contacts/selectors';

import css from './phoneSection.css';

import { Loader } from 'components/Loader/Loader';

const PhoneSection = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.form}>
      {isLoading && <Loader />}
      {error && <p> {error}</p>}

      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default PhoneSection;
