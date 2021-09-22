import _ from 'lodash';

// Resolvers define the technique for fetching the types defined in the

import { BookList, CountryList } from "../FakeData/fakeData.js";

// schema. This resolver retrieves books from the "books" array above.
export const resolvers = {
    Query: {
      books: () => BookList,
      bookStore: (parent, args) => {
          const id = args.id;
          console.log(id);
          const bookStore = _.find(BookList, {id: Number(id)});
          return bookStore;

      }, 
      country: () => CountryList,
      asianCountry: (parent, args) => {
          const cid = args.id;
          console.log(cid);
          const asianCountry = _.find(CountryList, {id: Number(cid)});
          return asianCountry;
      },
    },
    // Book: {
    //   countries: ()=> {
    //     return _.filter(CountryList, (countriesList)=> countriesList.city  )
    //   }
    // }
    
    Mutation: {
      createStore: (parent, args) => {
        const store = args.input;
        console.log(store);
        const newId = BookList[BookList.length -1].id + 1;
        console.log(newId);
        store.id = newId;
        BookList.push(store);
        return store;

      },
      updateStore: (parents, args)=> {
        const updateValues = args.input;
       
        let storeUpdateValue;
      BookList.forEach((el)=> {
        if(el.id === Number(updateValues.id) ){
        console.log(el.title);
        el.title =updateValues.newTitle;
        storeUpdateValue = el.title;
        }
      })
          return storeUpdateValue;
 
      },
     deleteStore: (parent, args)=> {
     const id = args.id;
     _.remove(BookList, (el)=> el.id === Number(id));
     return null;
     }

    },
    
  };

