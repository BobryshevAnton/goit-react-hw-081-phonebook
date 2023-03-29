import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import Section from 'components/Section/Section';
import Button from '@mui/material/Button';
import css from './contactList.module.css';
//
export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const { items } = useSelector(selectContacts);

  let filterContact = items.filter(elem =>
    elem.name.toLowerCase().includes(filter.filter)
  );

  return (
    <Section>
      <div className={css.form__contacts}>
        <h1 className={css.form__title}>Contacts:</h1>
        <h1 className={css.form__title}>
          Filtered: {filterContact.length} / Total: {items.length}
        </h1>
      </div>
      <ul className={css.contactList}>
        {filterContact.map(elem => (
          <li key={elem.id} className={css.contactItem}>
            &#8226;{elem.name}: {elem.phone}
            <Button
              type="button"
              variant="contained"
              sx={{ mt: 1, mb: 1 }}
              onClick={() => {
                dispatch(deleteContact(elem.id));
              }}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </Section>
  );
};
