import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import './App.css';
import DisplayData from './Data/DisplayData';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function App() {
  console.log(client);
  return (
    <ApolloProvider client={client}>
    <div className="App">
     <DisplayData />
    </div>
  </ApolloProvider>
  );
}

export default App;
