import React from "react"
import { Link } from "gatsby"
import indexStyles from '../styles/index.module.scss'

const IndexPage = () => {

  return (
    <div className={indexStyles.contentWrapper}>
      <div className={indexStyles.background}></div>
      <div className={indexStyles.map}></div>
      <header>
        <div className={indexStyles.logo}></div>
        <h2 className={indexStyles.title}>A bespoke web design<br />& development house.</h2>
        <div className={indexStyles.btnBox}>
          <button className={indexStyles.aboutBtn}>About Us</button>
          <button className={indexStyles.servicesBtn}>Services</button>
        </div>
      </header>
      <div className={indexStyles.projectWrapper}>
        <div className={indexStyles.projectContent}>
          <div className={indexStyles.project}></div>
        </div>
        <div className={indexStyles.projectInfo}>
          <h2 className={indexStyles.title}>TEST</h2>
          <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
          <button className={indexStyles.designBtn}>Design</button>
          <button className={indexStyles.devBtn}>Development</button>
        </div>
      </div>
      <button className={indexStyles.contactBtn} btn>Contact Us</button>
    </div>
  )
}

export default IndexPage


{/* <h1>A bespoke web design<br />& development house.</h1>
<button className={indexStyles.aboutBtn}>About Us</button>
<button className={indexStyles.servicesBtn}>Services</button>
<div className={indexStyles.servicesWrapper}>
  <div className={indexStyles.serviceContent}>
    <h1></h1>
    <p></p>
    <button className={indexStyles.designBtn}>Design</button>
    <button className={indexStyles.devBtn}>Development</button>
  </div>
  <div className={indexStyles.serviceInfo}>

  </div>
</div>
<button className={indexStyles.contactBtn} btn>Contact Us</button>
<form></form> */}
