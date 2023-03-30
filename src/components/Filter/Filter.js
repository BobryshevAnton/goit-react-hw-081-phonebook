import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/filterSlice';
import Section from 'components/Section/Section';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import css from './filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const onFilterSearch = evt => {
    dispatch(filterContact(evt.target.value));
  };
  return (
    <Section>
      <h1 className={css.form__title}> Find contacts by name</h1>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '40ch' },
        }}
        noValidate
        autoComplete="on"
      >
        <div>
          <TextField
            label="Enter fined name"
            id="outlined-size-small"
            size="small"
            type="text"
            name="filter"
            onChange={onFilterSearch}
          />
        </div>
      </Box>
    </Section>
  );
};
