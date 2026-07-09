import axios from "axios";

const UNSPLASH_KEY=import.meta.env.VITE_UNSPLASHED_KEY;
const PEXELS_KEY=import.meta.env.VITE_PEXELS_KEY;

export async function fetchPhotos(query, page=1, perPage=24){
    const res = await axios.get('https://api.unsplash.com/search/photos',{
        params:{query, page, per_page:perPage},
        headers:{
            Authorization:`Client-ID ${UNSPLASH_KEY}`
        }
    });
    
    return res.data;

}

export async function fetchVideos(query, page=1, perPage=24){
    const res = await axios.get('https://api.pexels.com/videos/search', {
        params: { query, page, per_page: perPage },
        headers: {
            Authorization: PEXELS_KEY
        }
    });   

    return res.data;
}