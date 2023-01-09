import React from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { filterContact } from '../../redux/filter/filterSlice';

import { FieldInput, InputFind } from './Filter.styled';

const idUser = nanoid();
const Filter = ({ value }) => {
  const dispatch = useDispatch();
  return (
    <FieldInput>
      <label htmlFor={idUser}>Find contacts by name</label>
      <InputFind
        id={idUser}
        type="text"
        value={value}
        onChange={e => dispatch(filterContact(e.currentTarget.value))}
      />
    </FieldInput>
  );
};

export default Filter;
Filter.propTypes = {
  value: PropTypes.string.isRequired,
};
