import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'components/redux/contacts/operations';
import { selectContacts } from 'components/redux/contacts/selectors';
import Button from '@mui/material/Button';
import css from './contactForm.module.css';
// import { nanoid } from 'nanoid';
import Section from 'components/Section/Section';
//
//
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//

export const ContactForm = () => {
  //
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
      return;
    } else if (name === 'number') {
      setNumber(value);
      return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const newContact = {
      name: `${name}`,
      phone: `${number}`,
    };
    const inclCont = items.items.some(item => item.name === name);
    if (inclCont) {
      alert(`${name} already in contacts`);
      return;
    } else {
      dispatch(addContacts(newContact));
      setName('');
      setNumber('');
    }
  };
  return (
    <Section>
      <h1 className={css.form__title}>Form for added new contacts:</h1>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            '& .MuiTextField-root': { m: 1, width: '40ch' },
          }}
          noValidate
          autoComplete="on"
        >
          <div>
            <TextField
              label="Name"
              id="outlined-size-normal"
              size="small"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              label="Number"
              id="outlined-size-normal"
              size="small"
              type="tel"
              name="number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={handleChange}
            />
          </div>
        </Box>
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, ml: 1 }}>
          Add contact : {name}
        </Button>
      </form>
    </Section>
  );
};
