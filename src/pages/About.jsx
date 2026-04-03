function About() {
  return (
    <section style={styles.section}>

      <h2 style={styles.title}>About</h2>
      
      <div style={styles.divider}></div>
      
      <div style={styles.card}> 
        <p style={styles.text}>
          Hi, I’m Jonathan Goldfish, a graduated A-Level student who is passionate in Mathematics and Physics, 
          and I'd love sharing knowledge with others as well as giving back to A-Level community.
          I created this platform to provide a dedicated and handwritten lecture notes, exercises, and full solutions 
          to help students excel in their studies.
          My goal is to make learning clearer, structured, and more enjoyable, especially for A-Level and SPM Additional Mathematics.
          I’m committed to supporting students on their academic journey and fostering a love for learning.
          I did clarify that I will be only teaching what subjects I've taken during my A-Level studies, which are Mathematics(9709), Further Mathematics(9231), 
          Chemistry(9701) and Physics(9702). I will not be teaching any other subjects, as I want to ensure that I provide the best quality content for the subjects I am knowledgeable in.
          Please DO NOT share the content on this website without my permission, as it is my intellectual property and I have put a lot of effort into creating it. 
          Sharing the content without permission would be an infringement of my rights and could lead to legal consequences. If you would like to share the content, please contact me for permission and proper attribution via WhatsApp( please visit the Contact page for more details).
          Thank You for your understanding and support!
        </p>
      </div>

    </section>
  )
}

const styles = {
  section: {
    minHeight: "40vh",
    padding: "60px 20px 80px",
    textAlign: "center",

    // ✅ FIXED gradient (correct usage)
    background: "linear-gradient(135deg, #e6c766, #c89b1d, #8b6b00)",
  },
  
  title: {
    fontSize: "clamp(56px, 8vw, 110px)", // 🔥 BIG responsive
    marginBottom: "5px",
    marginTop: "0px",
    color: "#ffffff", // ✅ visible

    fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif',
    fontWeight: "800",
    letterSpacing: "4px",
    textTransform: "uppercase",

    // ✅ dark glow for contrast (not gold)
    textShadow: "0 0 20px rgba(0,0,0,0.4)",
  },

  divider: {
    width: "80px",
    height: "4px",
    backgroundColor: "#ffffff",
    margin: "0 auto 40px auto",
    borderRadius: "2px",
  },

  card: {
    width: "70%",               // 🔥 KEY CHANGE
    maxWidth: "1000px",
    margin: "30px auto",
    padding: "50px 60px",

    
    background: "rgba(251, 165, 5, 0.67)",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",

    borderRadius: "20px",
    border: "1px solid rgba(255, 215, 0, 0.6)",

    //strong glow effect for the card 
    boxShadow: `
    0 0 10px rgba(255,215,0,0.4),
    0 0 25px rgba(255,215,0,0.5),
    0 0 50px rgba(255,215,0,0.6)
    `, 

    transition: "0.3s ease",
  },

  text: {
    margin: "15px auto",
    fontSize: "20px",      // bigger text
    lineHeight: "1.9",
    color: "#f5f5f5",
  }
}

export default About