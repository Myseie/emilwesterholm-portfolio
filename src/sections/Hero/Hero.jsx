import styles from './HeroStyles.module.css';
import heroImg from '../../assets/MeCartoon.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedInDark from '../../assets/linkedin-dark.svg'
import linkedInLight from '../../assets/linkedin-light.svg'
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedInIcon = theme === 'light' ? linkedInLight : linkedInDark;
  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
           <img 
                className={styles.hero} 
                src={heroImg} 
                alt="Profile picture of Emil Westerholm" 
            />
            <img 
                className={styles.colorMode} 
                src={themeIcon} 
                alt="Color mode icon"
                onClick={toggleTheme} 
            />
        </div>
        <div className={styles.info}>
            <h1>Emil 
                <br />
                Westerholm
            </h1>
            <h2>Utvecklare</h2>
            <span>
                <a href="https://www.linkedin.com/emilwesterholm/" target="_blank">
                <img src={linkedInIcon} alt="Linkedin-icon" /></a>
                <a href="https://www.github.com/Myseie" target="_blank">
                <img src={githubIcon} alt="github-icon" /></a>
            </span>
            <p className={styles.description}>Som brinner för att skapa nya möjligheter för dig!</p>
            <a href={CV} download>
                <button className="hover" > 
                Resume
                </button>
            </a>
        </div>
        </section>
  )
}

export default Hero;