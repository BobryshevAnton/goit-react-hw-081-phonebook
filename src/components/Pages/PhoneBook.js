import Section from 'components/Section/Section';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PhoneSection from 'components/PhoneSection/PhoneSection';

import { fetchContacts } from 'redux/contacts/operations';

export const PhoneBook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Section>
      <PhoneSection />
    </Section>
  );
};
export default PhoneBook;
