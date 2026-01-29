
const BASE_URL = 'https://api.themoviedb.org/3';
const API_Key = process.env.EXPO_PUBLIC_MOVIE_API_KEY;


export const fetchMovies = async ({ query}: {query: string}) => {
    const endpoint = query
    ? `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}&api_key=${API_Key}`
    : `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_Key}`;

    const response = await fetch(endpoint);

    if (!response.ok) {
        throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }

    const data = await response.json();

    return data.results;
}