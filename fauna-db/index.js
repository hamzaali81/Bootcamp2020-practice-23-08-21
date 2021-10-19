#!/usr/bin/env node

/*
  Create .env file at project root with the following:
  FAUNADB_ADMIN_SECRET=my-admin-secret
*/

//https://docs.fauna.com/fauna/current/tutorials/crud#database

const faunadb = require('faunadb'),
  q = faunadb.query;
require('dotenv').config();

(async () =>{

  if (process.env.FAUNADB_ADMIN_SECRET) {
    // console.log("Faunadb Admin Secret: " + process.env.FAUNADB_ADMIN_SECRET);

    var client = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET});
    
    //create database
    try {
      var result = await client.query(
        // q.CreateDatabase({ name: 'mytestdatabase' })
        // q.CreateKey({
        //   database: q.Database('mytestdatabase'),
        //   role: 'server',
        // })
        // q.CreateCollection({ name: 'posts' })

        // q.CreateIndex({
        //   name: 'posts_by_title',
        //   source: q.Collection('posts'),
        //   terms: [{ field: ['data', 'title'] }],
        // })

        // q.Create(
        //   q.Collection('posts'),
        //   { data: { title: 'Serverless applications are scalable' } },
        // )

        // q.Map(
        //   [
        //     'Gatsby.js generates static and dynamic websites',
        //     'FaunaDB is consistent',
        //     'Netlify deploys static assets on the Edge',
        //   ],
        //   q.Lambda(
        //     'post_title',
        //     q.Create(
        //       q.Collection('posts'),
        //       { data: { title: q.Var('post_title') } },
        //     )
        //   ),
        // )

        // q.Get(q.Ref(q.Collection('posts'), '312872861970727497'))
        // q.Get(
        //   q.Match(q.Index('posts_by_title'), 'Serverless applications are scalable')
        // )

        // 
        
        // q.Replace(
        //   q.Ref(q.Collection('posts'), '312872861970727497'),
        //   { data: { title: 'I love serverless apps' } },
        // )

        q.Delete(
          q.Ref(q.Collection('posts'), '312872861970727497')
        )
      );
      // console.log(result);
      // console.log("Number of Documents Created and Inserted in the Container: " + result);
      console.log("Document retrived from Container in Database: " + result.data.title);

    
    } 
    catch (error){
      if (error.requestResult.statusCode === 400 && error.message === 'instance already exists') {
        console.log('Database with this name already exists');
      }
      else {
        console.log('Unknow Error: ');
        console.log(error);
      }
      
    }

  } else {
    console.log('No FAUNADB_ADMIN_SECRET in .env file, skipping DB setup');
  }

})();