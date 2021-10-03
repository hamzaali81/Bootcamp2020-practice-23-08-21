import React, { useState } from 'react';
import { useQuery, gql, useLazyQuery } from '@apollo/client';

const QUERY_GET_ALL_USERS = gql`
query GetAllUsers {
  users {
    id
    age
    name
    username
    nationality
    friends {
       id
       age
      }
  }
}`;
const QUERY_GET_ALL_MOVIES = gql`
query getAllMovies {
  movies {
    id
    name
    isInTheaters
  }
}`;

const GET_MOVIE_BY_NAME = gql`
   query Movie($name: String!) {
       movie(name: $name) {
           name
           yearOfPublication
       }
   }
`;

const DisplayData = () => {
    const [movieSearched, setMovieSearched] = useState("");
    
    const { loading, error, data } = useQuery(QUERY_GET_ALL_USERS);
    const {  data: movieData } = useQuery(QUERY_GET_ALL_MOVIES);
    const [fetchMovie, {data: movieSearchedData, error: movieError}] = useLazyQuery(GET_MOVIE_BY_NAME, {variables: {name: movieSearched}})
     
    console.log('movieSearchedData',movieSearchedData);

    if (loading) return (<p>Loading...</p>);
    if (error) return (<p>Error :</p>);
    console.log(data);
    return (
        <div>
            <h1>Display Data</h1>
            {data.users.map((user)=> {
                return(
                    <div>
                        <h1>{user.name}</h1>
                        <h1>{user.username}</h1>
                        <h1>{user.age}</h1>
                        <h1>{user.nationality}</h1>
                    </div>
                )
            })};

            {movieData && movieData.movies.map((movie) => {
                return (
                    <h1>Movie Name: {movie.name}</h1>
                )
            })};

            <div>
                <input type="text" placeholder="Intersteller..." onChange={(e)=> setMovieSearched(e.target.value)}/>
                <button onClick={fetchMovie}>Fetch Data</button>
               <div>
                   {movieSearchedData && <div>{""}
                   <h1>MovieName: {movieSearchedData.movie.name}</h1>{""}
                   <h1>Publication: {movieSearchedData.movie.yearOfPublication}</h1>{""}
                   </div>}
               </div>
            </div>
        </div>
    )
}

export default DisplayData;
