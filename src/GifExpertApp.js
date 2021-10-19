import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GiftGrid';

const initialList = [{ id: uuidv4(), category: 'Witcher' }];
const GifExpertApp = () => {
	const [categories, setCategories] = useState(initialList);

	return (
		<>
			<h2>GiftExpert</h2>
			<AddCategory setCategories={setCategories} />
			<hr />
			<ol>
				{categories.map(({ id, category }) => (
					<GifGrid key={id} category={category} />
				))}
			</ol>
		</>
	);
};

export default GifExpertApp;

/* const handleAdd = () => {
		//setCategories([...categories,{ id: uuidv4(), category: 'Dota 2' }])
		setCategories((list) => [...list, { id: uuidv4(), category: 'Dota 2' }]);
	}; */
