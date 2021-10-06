import React from 'react'
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const index = () => {
  return (
    <Layout>
      Hello People!
      <div>
      <Link to="/blog/">Blog Page</Link>
      </div>
    </Layout>
  )
}

export default index;
