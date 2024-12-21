import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id='contact' className={styles.container}>
        <h1 className='sectionTitle'>Kontakta Mig</h1>
        <form action="https://formspree.io/f/xyzzgekq" method="post">
            <div className="formGroup" >
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Namn" 
                    required 
                />
            </div>
            <div className="formGroup">
            <label htmlFor="email" hidden>
                    Email
                </label>
                <input 
                    type="text" 
                    name="email" 
                    id="email" 
                    placeholder="Email" 
                    required 
                />
            
            </div>
            <div className="formGroup">
            <label htmlFor="message" hidden>
                    Message
                </label>
                <textarea 
                    name="message" 
                    id="message" 
                    placeholder="Lämna ett meddelande..." 
                    required 
                ></textarea>
                <br />
                <input 
                    className="hover btn" 
                    type="submit" 
                    value="Submit"
                />
            </div>
        </form>
    </section>
  )
}

export default Contact;