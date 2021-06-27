import React from 'react'
import * as styles from '../styles/synopsis.module.css'

const Synopsis = () => {
    return (
        <div className={styles.synopsis}>
            <div className={styles.wrapper} >
                <div className={styles.boxleft}>
                    <h1>About the Book</h1>
                    <h2>The rundown</h2>
                    <p>After a four-year-long sabbatical from treasure hunting, Karter Kane, otherwise  known as the infamous Tasmanian Devil, returns to the fray to assist his star pupil,  Claire Addison, on her first big adventure to find the final resting place of King  Arthur and his legendary sword, Excalibur. However, his absence has left him a  little out of the loop between his disconnect from those he loved most as well as  this high-intensity lifestyle he now has to readjust to life as a hunter. On top of  that, the secrets and lies that encapsulate the myth of King Arthur send Karter,  Claire, and their friends on an absolute tailspin of epic proportions as they  navigate their way through the perilous treasure hunting community and uncover  the dark secrets behind the real King Arthur's story.</p>
                </div>
                <div className={styles.boxright}>
                    <img src="/fogg-parachute.png" alt="parachute-girl" />
                </div>
            </div>
        </div>
    )
}

export default Synopsis
