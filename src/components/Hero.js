import React from 'react'
import * as styles from '../styles/hero.module.css'

const Hero = () => {
    return (
        <div className={styles.hero} >
            <img src="/hero.jpg" alt="hero" className="hero" />
        </div>
    )
}

export default Hero
