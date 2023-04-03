import { useHttp } from "../hooks/http.hook";

const MarvelService = () => {
    const {loading, error, request, clearError} = useHttp();

    const _apiUrl = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=f7531087f53652784ddb711cab4b8bd4';
    const _characterOffset = '210'

    const getAllCharacters = async (offset = _characterOffset) => {
        const res = await request(`${_apiUrl}characters?limit=9&offset=${offset}&${_apiKey}`)
        return res.data.results.map(_transformCharacter)
    };

    const getCharacter = async (id) => {
        const res = await request(`${_apiUrl}characters/${id}?${_apiKey}`)
        return _transformCharacter(res.data.results[0])
    };

    const getAllComics = async (offset = _characterOffset) => {
        const res = await request(`${_apiUrl}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`)
        return res.data.results.map(_transformComics)
    };

    const getComic = async (id) => {
		const res = await request(`${_apiUrl}comics/${id}?${_apiKey}`);
		return _transformComics(res.data.results[0]);
	};

    const _transformCharacter = (char) => {
        return {
            name: char.name,
            description: char.description ? `${char.description.slice(0, 300)}...` : 'There is no description for this character',
            thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            id: char.id,
            comics: char.comics.items
        }
    }
    const _transformComics = (comics) => {
        return {
            id: comics.id,
            title: comics.title,
            description: comics.description ? `${comics.description.slice(0, 300)}...` : 'There is no description for this comics',
            thumbnail: `${comics.thumbnail.path}.${comics.thumbnail.extension}`,
            pages: comics.pageCount ? `${comics.pageCount} pages` : 'There is no information about pages',
            price: comics.prices[0].price ? `${comics.prices[0].price}$` : 'Not avaliable',
            language: comics.textObjects[0]?.language || "en-us"
        }
    }
    return {loading, error, clearError, getAllCharacters, getAllComics, getCharacter, getComic}
}
export default MarvelService;