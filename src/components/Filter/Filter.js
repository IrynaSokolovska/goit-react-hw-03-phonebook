import styled from '@emotion/styled';
import React from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

const FilterForm = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
`;

export const Filter = ({ handleChangeFilter }) => {
  return (
    <FilterForm>
      <TextField
        id="filter"
        label="Find contacts by name"
        variant="standard"
        onChange={handleChangeFilter}
      />
    </FilterForm>
  );
};

FilterForm.propTypes = {
  handleChangeFilter: PropTypes.func,
};
export default FilterForm;
