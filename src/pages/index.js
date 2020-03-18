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
        <div className={indexStyles.btnBox1}>
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
          <p className={indexStyles.info}>–––– lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
          <div className={indexStyles.btnBox2}>
            <button className={indexStyles.designBtn}>Design</button>
            <button className={indexStyles.devBtn}>Development</button>
          </div>
        </div>
      </div>
      <button className={indexStyles.contactBtn} btn>Contact Us</button>
      <div className={indexStyles.formWrapper}>
        <div className={indexStyles.formBackground}></div>
        <form className={indexStyles.form} name="contactForm" action="" id="contactMe" method="POST">
          <div className={indexStyles.who}>
            <input className={indexStyles.user_input} type="text" id="firstName" name="user_name" placeholder="First name" required />
            <input className={indexStyles.user_input} type="text" id="lastName" name="user_name" placeholder="Last name" required />
          </div>
          <div className={indexStyles.email}>
            <input type="email" className={indexStyles.user_input} id={indexStyles.email} name="user_email" placeholder="example@email.com" required />
          </div>
          <div className={indexStyles.message}>
            <textarea name="comments" id="comments" cols="30" rows="10" className={indexStyles.input_field} placeholder="What's your project?"></textarea>
          </div>
          <div className={indexStyles.btnField}>
            <button id="submit" type="submit" className={indexStyles.submitBtn}>Submit</button>
          </div>
        </form> 
      </div>
    </div>
  )
}

export default IndexPage
