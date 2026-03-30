function About() {
  return (
    <section style={styles.section}>

      <h2 style={styles.title}>About</h2>
      
      <div style={styles.divider}> </div>
      
      <div style={styles.card}> 
        <p style={styles.text}>
          Hi, I’m Jonathan Goldfish, an A-Level student passionate about Mathematics, Physics, and sharing knowledge with others.
        </p>

        <p style={styles.text}>
          I created this platform to provide high-quality lecture notes, exercises, and full solutions to help students excel in their studies.
        </p>

        <p style={styles.text}>
          My goal is to make learning clearer, structured, and more enjoyable, especially for A-Level and SPM Additional Mathematics.
        </p>

        <p style={styles.text}>
         I’m committed to supporting students on their academic journey and fostering a love for learning.
        </p>
      </div>

    </section>
  )
}

const styles = {
  section: {
    padding: "80px 20px",
    textAlign: "center",
    backgroundColor: "linear-gradient(135deg, #f5e6b3, #d4af37, #8b6b00)", // Subtle gradient background
    background: "radial-gradient(circle at top left, #f5e6b3, #d4af37, #8b6b00)", // Radial gradient for added depth
  },
  
  title: {
    fontSize: "80px",
    marginBottom: "10px",
    color: "#fff",
    fontFamily:'"Franklin Gothic Medium", "Arial Narrow Bold", Arial, sans-serif', // Elegant font choice
    fontWeight: "600",
    letterSpacing: "1px",
  },

  divider:{
    width: "60px",
    height: "4px",
    backgroundColor: "#fff",
    margin: "0 auto 30px auto",
    borderRadius: "2px",
  },

  card:{
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent white for better readability
    backdropFilter: "blur(12px)", // Adds a blur effect to the background for a frosted glass look
    WebkitBackdropFilter: "blur(12px)", // For Safari support

    
    borderRadius: "16px",
    padding: "40px",
    maxWidth: "750px",
    margin: "30px auto",

    border:" 1px solid rgba(255, 255, 255, 0.2)", // Subtle border for definition
    boxShadow: "0 0 40px rgba(255, 215, 0, 0.3)", // Soft shadow for depth
    transition:"0.3s ease",
  },

  text: {
    maxWidth: "700px",
    margin: "10px auto",
    fontSize: "18px",
    lineHeight: "1.7",
    color: "#ffffff" //light gray for better readability on the golden background
  }
}

export default About