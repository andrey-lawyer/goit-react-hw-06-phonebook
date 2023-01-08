import React from 'react';
import { useDispatch } from 'react-redux';
// import { filterContact } from '../../redux/userSlice';
import { filterContact } from '../../redux/filterSlice';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const idUser = nanoid();
console.log(filterContact);
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

const FieldInput = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;
const InputFind = styled.input`
  margin-top: 5px;
  width: 300px;
  height: 24px;
  font-size: 16px;
  outline: none;
  border-radius: 4px;
  padding: 2px;
  margin-bottom: 10px;
`;
export default Filter;
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  // onChange: PropTypes.func.isRequired,
};
