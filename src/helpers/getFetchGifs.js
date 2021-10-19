export const getFetchGifs = async (category) => {
	const { REACT_APP_GIF_API_KEY } = process.env;

	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
		category
	)}&limit=10&rating=pg&api_key=${REACT_APP_GIF_API_KEY}`;

	const resp = await fetch(url);

	const { data } = await resp.json();

	const gifs = data.map((img) => ({
		id: img.id,
		title: img.title,
		url: img.images?.downsized_medium.url,
	}));

	return gifs;
};
