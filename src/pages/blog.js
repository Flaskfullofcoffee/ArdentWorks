import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
import Footer from '../components/footer'
import blogStyles from '../styles/blog.module.scss'

const BlogPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //       allContentfulProject ( sort: { fields: publishedDate, order: DESC  }
  //       ) {
  //         edges {
  //           node {
  //             title
  //             publishedDate (formatString:"MMMM Do YYYY")
  //           }
  //         }
  //       }
  //     }
  //   `)
  let title = 'Jo King & Co'

  return (
    <div className={blogStyles.projectWrapper}>
      <div className={blogStyles.projectContent}>
        <div className={blogStyles.project}></div>
      </div>
      <div className={blogStyles.projectInfo}>
        <h2 className={blogStyles.title}>Jo King & Co</h2>
        <p className={blogStyles.info}>–––– lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <div className={blogStyles.btnBox2}>
          <button className={blogStyles.designBtn}>Design</button>
          <button className={blogStyles.devBtn}>Development</button>
        </div>
      </div>
    </div>
  )
}

export default BlogPage
