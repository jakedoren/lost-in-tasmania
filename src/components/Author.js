import React from 'react'
import * as styles from '../styles/author.module.css'

const Author = () => {
    return (
        <div className={styles.author} >
            <div className={styles.wrapper}>
                <div className={styles.imgcontainer}>
                    <img src="/headshotlong.jpg" alt="headshot" />
                </div>
                <div className={styles.textcontainer} >
                    <div>
                        <h1>Justin Bailey Yannaccone</h1>
                        <h2>Life-long Writer</h2>
                        <p>Justin Yannaccone otherwise known as Joey Cabana, has been an avid writer  since the ripe age of eleven, starting out first writing stories in the journal  assignments he had for his reading class. From there this passion only grew more  and more with each passing year. Writing became not only his passion, but his  most valuable skill he could give. Using it to ace literature courses and even write  up a few short stories in the process.  
                        By the time heʼd gotten into college he was certain that writing would be what  he did for the rest of his life. In every job thereafter he found a way to write,  whether it be technical writing for a tech start up or doing press articles and  releases for the PR firm he worked for, he always found a way to bring his writing  skill into his work no matter what.  
                        Then one hot summer he began dreaming up the world of Lost in Tasmania.  Pouring all his creativity and effort into creating a living breathing world with  equally living characters and telling their stories to the world. Lost in Tasmania will  be his debut novel as a published author with bright hopes for a the future of his  work. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Author
