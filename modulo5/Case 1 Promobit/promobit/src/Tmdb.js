const API_KEY = 'd1532026b9c1ecf47ed0e69deae8eebd';
const API_BASE = 'https://api.themoviedb.org/3';


export default {
    getHomeList: async () => {
        return [{
            slug: 'popular',
            title: 'Populares do Tmdb',
            items: []
    }]
    }
}