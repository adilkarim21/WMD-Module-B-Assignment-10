import React from 'react'
import styles from './Signup.module.css'

const Signup = () => {
  return (
    <div className={styles.MainDiv}>
        <div className={styles.ContentDiv}>
            <div>
                <h1>Sign up</h1>
                <span>Already have an account? </span>
                <a className={styles.LinkSetting} href="#"> Login here</a>
            </div>
            <br />
            <div className={styles.InputDiv}>
                <small className={styles.BoldSetting}>Name</small>
                <input className={styles.InputFields} type="text" placeholder='&nbsp;&nbsp;&nbsp; Enter your name here' />
            </div>
            <div className={styles.InputDiv}>
                <small className={styles.BoldSetting}>Email id</small>
                <input className={styles.InputFields} type="email" placeholder='&nbsp;&nbsp;&nbsp; Enter your email id here' />
            </div>
            <div className={styles.InputDiv}>
                <small className={styles.BoldSetting}>Password</small>
                <input className={styles.InputFields} type="password" placeholder='&nbsp;&nbsp;&nbsp; Enter your password here' />
            </div>
            <br />
            <div className={styles.CheckBoxDiv}>
                <input type="checkbox" />
                <small> By Signing up you agree to receive updates and special offers.</small>
            </div>
            <br />
            <div className={styles.ButtonDiv}>
                <button className={styles.ButtonSetting}>Submit</button>
            </div>
        </div>
        <div className={styles.ImgDiv}>
            <img className={styles.Img} src='/src/assets/girl.png' alt="" />
        </div>
    </div>
  )
}

export default Signup
