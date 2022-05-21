const API_KEY = 'd1532026b9c1ecf47ed0e69deae8eebd';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [{
            slug: 'popular',
            title: 'Populares do Tmdb',
            items: await basicFetch (`/movie/popular?languege=pt-BR&api_key=${API_KEY}`)
            
    },
{
     slug: 'originals',
     title: 'Originais do Tmdb',
     items: await basicFetch (`/discover/tv?with_network=213&languege=pt-BR&api_key=${API_KEY}`) 
},
{
    slug: 'treding',
    title: 'Recomendados para Você',
    items: await basicFetch (`/trending/all/week?&languege=pt-BR&api_key=${API_KEY}`)

}]
    }
}

 