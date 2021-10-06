import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import img from '../images/icon.png';
import { StaticImage } from "gatsby-plugin-image"

const getImages = graphql`
{
  fixed :file(relativePath: {eq: "icon.png"}) {
childImageSharp {
   fixed(width: 300, grayscale: true){
     src
   }
}
  }
  fluid: file(relativePath:{eq:"icon2.png"}) {
   childImageSharp {
      fluid {
         src
      }
  }
  }
}
`

const Images = () => {
    const {fixed, fluid} = useStaticQuery(getImages);
    console.log(fixed.childImageSharp.fixed.src);
    return (
        <section className="images">
           

            <article className="single-image">
                <h1>Basic Image</h1>
                <img src={fixed.childImageSharp.fixed.src} alt="" width="20%"/>
            </article>
            
            

            <article className="single-image">
                <h1>Fixed Image/ Blur</h1>
                {/* <img src={} alt="" /> */}

            </article>
           
           
            <article className="single-image">
                <h1>Blur Images/ Svg</h1>
                {/* <img src={} alt="" /> */}

            </article>
        
        </section>
    )
};


export default Images
