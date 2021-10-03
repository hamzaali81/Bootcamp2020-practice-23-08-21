import React, { useState } from 'react';
import { useQuery, gql, useLazyQuery, useMutation } from '@apollo/client';

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

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($input: CreateUserInput!){
      createUser(input: $input){
          name
          id
      }

  }

`;

const DisplayData = () => {
    const [movieSearched, setMovieSearched] = useState("");
    
    // Create User States
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [age, setAge] = useState(0);
    const [nationality, setNationality] = useState("");

    const { loading, error, data, refetch } = useQuery(QUERY_GET_ALL_USERS);
    const {  data: movieData } = useQuery(QUERY_GET_ALL_MOVIES);
    const [fetchMovie, {data: movieSearchedData, error: movieError}] = useLazyQuery(GET_MOVIE_BY_NAME, {variables: {name: movieSearched}})
     
    const [createUser] = useMutation(CREATE_USER_MUTATION);

    // console.log('movieSearchedData',movieSearchedData);

    if (loading) return (<p>Loading...</p>);
    if (error) return (<p>Error :</p>);
    console.log(data);
    return (
        <div>
            <input type="text" onChange={(e)=> setName(e.target.value)} placeholder="Name..."/>
            <input type="text" onChange={(e)=> setUsername(e.target.value)} placeholder="Username..."/>
            <input type="number" onChange={(e)=> setAge(e.target.value)} placeholder="Age..."/>
            <input type="text" onChange={(e)=> setNationality(e.target.value.toLocaleUpperCase())} placeholder="Nationality..."/>
            <button onClick={()=> {
                createUser({
                    variables: { input: {name,username,age:Number(age),nationality} }
            })
           refetch();      
         }} >
                    Create User</button>
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
