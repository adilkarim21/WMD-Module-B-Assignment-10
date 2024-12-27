import React from 'react'
import styles from './Login.module.css'

const Login = () => {

  return (
    <div className={styles.MainDiv}>
            <div className={styles.ContentDiv}>
                <div>
                    <h1>Login</h1>
                    <span>Dont have an account? </span>
                    <a className={styles.LinkSetting} href="#"> Signup here</a>
                </div>
                <br />
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
                    <small> By logging in, you agree to receive updates and special offers.</small>
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

export default Login