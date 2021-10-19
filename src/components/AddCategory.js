import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState('');

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (inputValue.trim().length > 2) {
			setCategories((list) => [
				{ id: uuidv4(), category: inputValue },
				...list,
			]);
			setInputValue('');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={inputValue}
				placeholder="Insert Category"
				onChange={handleChange}></input>
		</form>
	);
};
AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};
