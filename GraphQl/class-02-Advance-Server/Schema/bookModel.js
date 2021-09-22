import { ApolloServer, gql } from 'apollo-server';



export const typeDefs = gql`

  enum CODE{
  AAA
  BBB
  CCC
  }


  type Country {
    id: Int,
    country: String,
    city: String,
    }
  
  type Book {
    id: Int,
    title: String,
    author: String,
    # bookCode: CODE,
    # edition: [Book],
    # countries: [Country]
     }
    
  type Query {
    books: [Book],
    bookStore(id: ID!): Book!,
    country: [Country],
    asianCountry(id: ID!): Country
  }

  input CreateBookStoreInput {
    # id: Int,
    title: String,
    author: String,
    # bookCode: CODE,
    # edition: [Book]
  }

  input UpdatedStore {
    id: String,
    newTitle: String!
  }

  type Mutation {
    createStore(input: CreateBookStoreInput): Book
    updateStore(input: UpdatedStore): Book
    deleteStore(id: ID!): Book
  }

`;
