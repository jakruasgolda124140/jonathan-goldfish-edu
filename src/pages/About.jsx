function About() {
  return (
    <section style={styles.section}>

      <h2 style={styles.title}>About</h2>
      
      <div style={styles.divider}> </div>

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
    fontSize: "32px",
    marginBottom: "15px",
    color: "#fff",
  },

  divider:{
    width: "60px",
    height: "4px",
    backgroundColor: "#fff",
    margin: "0 auto 30px auto",
    borderRadius: "2px",
  },

  text: {
    maxWidth: "700px",
    margin: "10px auto",
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#f9fafb" //light gray for better readability on the golden background
  }
}

export default About