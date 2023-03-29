import Section from 'components/Section/Section';

//
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import PhoneSection from 'components/PhoneSection/PhoneSection';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { fetchContacts } from 'redux/contacts/operations';

export const PhoneBook = () => {
  //
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  //
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <div>{isLoggedIn && 'Request in progress...'}</div>
      <PhoneSection />
    </Section>
  );
};
export default PhoneBook;
