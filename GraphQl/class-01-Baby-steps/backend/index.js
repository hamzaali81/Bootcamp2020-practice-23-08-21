const { ApolloServer, gql } = require('apollo-server');


const typeDefs = gql`
 
  type Book {
    title: String
    author: String
  }
  
  input BookInput{
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
  
  type Mutation {
  addBook(input: BookInput): Book
}
`;

const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

const resolvers = {
    Query: {
      books: () => books,
    },
    Mutation: {
      addBook: (e,{input})=> {
        console.log(input);
         books.push({
          title: input.title, 
          author: input.author
        })
        return {
          title: input.title, 
          author: input.author,
        }
      }
    }
  };

  console.log(resolvers);
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});



// query ExampleQuery {
//   books {
//     title
//   }
// }


// mutation {
//   addBook(input: { 
//     title: "Bukhari", author: "ismail Bukhari"
//     }) 
//   {
//     author,
//     title
//   }
// }