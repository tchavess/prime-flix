import axios from 'axios'
//URL
//https://api.themoviedb.org/3/movie/now_playing?api_key=eef6b66e285657e40eecbdaa6cc04f9d
//TOKEN
/*
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWY2YjY2ZTI4NTY1N2U0MGVlY2Jk
YWE2Y2MwNGY5ZCIsInN1YiI6IjYzN2FkZGQ3NWIyZjQ3MDBjM2NmZWU5NSIsInNjb3BlcyI6
WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KZZyzkvxTm7ads_8d5juna1_BssH3fLZT0fMg4F8b3s
*/ 

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

export default api;