// import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby';

// const Component = () => {
//     const data = useStaticQuery(graphql`
//      {
//   site {
//     siteMetadata {
//       title
//       description
//       person {
//         name
//         age
//       }
//     }
//   }
// }
//     `)
//     console.log(data.site.siteMetadata.person.name);
//     return (
//         <div>
//             <h1>{data.site.siteMetadata.person.name}</h1>
//             <h1>{data.site.siteMetadata.person.age}</h1>
            
//         </div>
//     )
// }

// export default Component;

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`
{
  site {
    siteMetadata {
      title
      description
      person {
        name
        age
      }
    }
  }
}

`

const Header = () => {
    const {site:{siteMetadata: {title, person: {name, age}}}} = useStaticQuery(getData);
    // console.log(data);
    return (
        <div>
            <h1>title: {title}</h1>
        </div>
    )
};



export default Header;






















