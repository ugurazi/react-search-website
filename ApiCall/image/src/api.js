import axios from 'axios'

const searchImages = async (term) => {
    const response= await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization:'Client-ID cF__XkM_hycjpalBdMOPPc-8Uxbhpqf7s8WUh98Fel0'
      },
      params:{
        query:term
      }
    })
    return response.data.results;
  }

  export default searchImages;