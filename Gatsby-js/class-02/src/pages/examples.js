import React from 'react';
import Header from '../examples/Header';
import HeaderStatic from '../examples/HeaderStatic';
import Layout from '../components/Layout';
import { graphql } from "gatsby";

const examples = () => {
    // const {
    //     site: {
    //         info: {author},
    //     }
    // } = data;
    
    return (
        <Layout>
            <h1>Examples</h1>
            <Header />
            <HeaderStatic />
            {/* <h5>author: {author}</h5> */}
        </Layout>
    )
};

// export const data = graphql`
// # query FirstQuery {
// #   site {
// #     siteMetadata {
// #       title
// #       description
// #       person {
// #         name
// #         age
// #       }
// #       author
// #       data
// #       description
// #       title
// #     }
// #   }
// # }
// # `;

export default examples;
