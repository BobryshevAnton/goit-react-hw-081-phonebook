import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';

import css from './phoneSection.css';

const PhoneSection = () => {
  const { isLoading, error } = useSelector(selectContacts);
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
