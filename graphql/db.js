import axios from "axios";

const API_URL = "http://yts.am/api/v2/list_movies.json?"



export const getMovies = (limit,rating)=> {
  let REQUEST_URL = API_URL;
  if(limit>0){
    REQUEST_URL += `limit=${limit}`;
  }
  if(rating>0){
    REQUEST_URL += `&minimum_rating=${rating}`;
  }

  console.log(REQUEST_URL)
  return axios.get(`${REQUEST_URL}`)
  .then(res=>res.data.data.movies)
  .catch((Error)=>{
    console.log(Error);
  })
};