import { UserList, MovieList } from '../data/data.js';
import _ from 'lodash';

/* 
 query -> users -> favoriteMovies -> anotherLevel
*/

export const resolvers = {
    Query: {
      // USER RESOLVERS
        // users: (parent, args, context, info)=> {
        //   console.log(context.req.headers);
        //   console.log(info);
        //   return UserList;
        // },
        users: (parent, args, context, info)=> {
         if(UserList) return {users: UserList};

         return { message: 'Yo, there was an ' }
        },
        user: (parent, args)=> {
            //  console.log(args);
             const id = args.id;
             console.log(id);
             return _.find(UserList, {id : Number(id)})
        },

        // MOVIE RESOLVERS
        movies: ()=> {
          return MovieList;
        },
        movie: (parent,args)=> {
          // console.log(context,info);
          const name = args.name;
          return _.find(MovieList, {name})

        }
    },
    User: {
          favoriteMovies: (parent)=> {
              return _.filter(MovieList, (movie) => movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010 )
          }
        },
    Mutation: {
      createUser: (parent, args)=> {
        const user = args.input;
        const lastId = UserList[UserList.length - 1].id;
        user.id = lastId + 1;
        UserList.push(user);
        return user;
      },
      updateUsername: (parent, args) => {
      const { id, newUsername } = args.input;
      console.log(args);
      let userUpdated;
      UserList.forEach((user)=> {
        if(user.id === Number(id)) {
          user.username = newUsername;
          userUpdated = user;
        }
      });
      return userUpdated;
      },

      deleteUser: (parent, args)=> {
      console.log(args);
      const userID = args.id;
      _.remove(UserList, (user) => user.id === Number(userID));
      return null;
      }
    },

    UsersResult: {
      __resolveType(obj) {
        if(obj.users) {
          return "UsersSuccessfulResult";
        }

        if(obj.message){
          return "UsersErrorfulResult"
        }
          
        return null;
      }
    }
   
};

