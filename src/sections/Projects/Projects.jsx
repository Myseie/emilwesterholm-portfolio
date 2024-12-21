import styles from './ProjectsStyle.module.css';
import budgetApp from '../../assets/budgetapp.png';
import pizzaApp from '../../assets/pizzaApp.png';
import excelApp from '../../assets/excelApp.png';
import movieApp from '../../assets/MovieApp.png';
import shopApp from '../../assets/shopApp.png';
import inventoryApp from '../../assets/InventoryApp.png';
import weatherApp from '../../assets/weatherApp.png';
import ProjectCard from '../../common/ProjectCard';
function Projects() {
  return (
    <section 
        id="projects" 
        className={styles.container}
    >
        <h1 className="sectionTitle">Projekt</h1>
        <div className={styles.projectsContainer}>
       <ProjectCard 
            src={budgetApp} 
            link="https://github.com/Myseie/Budget-app-typescript" 
            h3="Budgetapp"
            p="Skriva en budget"
        />
         <ProjectCard 
            src={pizzaApp} 
            link="https://github.com/Myseie/Pizza-app"
            h3="PizzaApp"
            p="Lägg till en god pizza!"
        />
         <ProjectCard 
            src={excelApp} 
            link="https://github.com/Myseie/A-mini-Excel-app" 
            h3="ExcelApp"
            p="Simpel Excelapp för eget bruk"
        />
         <ProjectCard 
            src={movieApp} 
            link="https://github.com/Myseie/Movie-manager" 
            h3="MovieApp"
            p="Ge filmer betyg"
        />
         <ProjectCard 
            src={shopApp} 
            link="https://github.com/Myseie/SecureShop" 
            h3="ShopApp"
            p="En app för att sköta en affär"
        />
         <ProjectCard 
            src={inventoryApp} 
            link="https://github.com/Myseie/ShopInventory" 
            h3="LagerApp"
            p="En app till att ha koll på sitt lager"
        />
         <ProjectCard 
            src={weatherApp} 
            link="https://github.com/Myseie/Weather-app" 
            h3="VäderApp"
            p="Ha koll på vädret med denna enkla app!"
        />
        </div>
    </section>
  )
}

export default Projects;