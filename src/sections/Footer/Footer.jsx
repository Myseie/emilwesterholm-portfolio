import styles from './FooterStyles.module.css';


function Footer() {
  return (
    <section id='Footer' className={styles.container}>
       <p>&copy; 2024 Emil Westerholm, <br />
       All right reserved</p> 
    </section>
  )
}

export default Footer