class MarvelService {
    _apiUrl = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=f7531087f53652784ddb711cab4b8bd4';

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok){
            throw new Error(`Could not fetrch ${url}, status: ${res.status}`);
        }

        return res.json();
    };

    getAllCharacters = async () => {
        const res = await this.getResource(`${this._apiUrl}characters?limit=9&offset=210&${this._apiKey}`)
        return res.data.results.map(this._transformCharacter)
    };

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiUrl}characters/${id}?${this._apiKey}`)
        return this._transformCharacter(res.data.results[0])
    };

    _transformCharacter = (char) => {
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

}
export default MarvelService;