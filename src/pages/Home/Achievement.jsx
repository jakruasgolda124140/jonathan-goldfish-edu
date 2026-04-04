function Achievements() {
  return (
    <section style={styles.section}>

      <h1 style={styles.title}>My Achievements</h1>
        <div style={styles.underline}> </div>
       
       <h2 style={styles.subtitle}>My A-Level Results(October/November Series 2024)</h2>
       

        <div style={styles.grid}>
           <div style={styles.card}>
             <h3 style={styles.grade}>A*(94)</h3>
             <p style={styles.subjectname}>
                <span style={styles.subjectcode}>9709</span> <br />Mathematics</p>
            </div>

            <div style={styles.card}>
             <h3 style={styles.grade}>A(86)</h3>
             <p style={styles.subjectname}>
                <span style={styles.subjectcode}>9231</span> <br />Further Mathematics</p>
            </div>

            <div style={styles.card}>
             <h3 style={styles.grade}>A(87)</h3>
             <p style={styles.subjectname}>
                <span style={styles.subjectcode}>9702</span> <br />Physics</p>
            </div>

            <div style={styles.card}>
             <h3 style={styles.grade}>A(85)</h3>
             <p style={styles.subjectname}>
                <span style={styles.subjectcode}>9701</span> <br />Chemistry</p>
            </div>
        </div>

        <div style={styles.imageContainer}>
            <img src="/A-Level Result 2024.jpeg" 
            alt="A-Level Results 2024" 
            style={styles.resultImage}
            onMouseOver={e => {
              e.target.style.transform = "scale(1.03)";
            }}
            onMouseOut={e => {
              e.target.style.transform = "scale(1)";
            }} />
        </div>
    </section>
  )
}

const styles = {
  section: {
    padding: "100px 20px",
    textAlign: "center",
    backgroundImage:`
      linear-gradient(
        rgba(0,0,0,0.8),
        rgba(0,0,0,0.9)
      ),
      url("/Achievement.png")
      `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    backgroundAttachment: "fixed",
  },

  title: {
    fontSize: "clamp(56px, 8vw, 120px)", // 🔥 BIG responsive
    fontWeight: "700",
    letterSpacing: "3px",
    textTransform: "uppercase",
    color: "#d4af37", // ✅ visible
    marginBottom: "5px",
    marginTop: "0px",
    color: "#fff", // ✅ visible

    fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif',

    // ✅ dark glow for contrast (not gold)
    textShadow: `
      0 0 10px rgba(255,255,255,0.6),
      0 0 20px rgba(212,175,55,0.6),
      0 0 40px rgba(212,175,55,0.4)
    `,
  },

  underline: {
    width: "800px",
    height: "4px",
    margin: "20px auto 60px auto",
    background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
    borderRadius: "2px",
    boxShadow: "0 0 15px #d4af37",
  },
  
  subtitle: {
    fontSize: "clamp(24px, 4vw, 32px)", // 🔥 responsive subtitle
    fontWeight: "500",
    color: "#ddd",
    letterSpacing: "1px",
    marginTop: "10px",
    marginBottom: "10px",
    textShadow: "0 0 10px rgba(255,255,255,0.2)",
    whiteSpace: "nowrap",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "30px",
    maxWidth: "1000px",
    margin: "80px auto 0 auto",
  },

  card: {
    padding: "40px 20px",
    borderRadius: "20px",

    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(15px)",

    border: "1px solid rgba(255,255,255,0.1)",

    boxShadow: "0 0 30px rgba(212,175,55,0.3)",

    transition: "all 0.3s ease",
    cursor:" pointer",
  },
  
   cardHover: {
    fontSize: "48px",
    color: "#d4af37",
    fontWeight: "700",

    textShadow: `
    0 0 10px rgba(212,175,55,0.8)
    0 0 25px rgba(212,175,55,0.6)`,
  },

  grade: {
    fontSize: "48px",
    color: "#d4af37",
    marginBottom: "10px",
    textShadow: "0 0 20px rgba(212,175,55,0.8)",
  },
  
  subjectcode: {
    fontSize: "30px",
    fontWeight: "1000",
    color: "#f3f1f1",
    marginRight: "6px",
    letterSpacing: "1px",
    textShadow: "0 0 5px rgba(255,255,255,0.2)",
  },

  subjectname: {
    fontSize: "20px",
    color: "#ccc",
    fontWeight:"600",
    textShadow: "0 0 5px rgba(255,255,255,0.2)",
    letterSpacing:"0.5px",
  },

  imageContainer: {
    marginTop: "80px",
    display: "flex",
    justifyContent: "center",
  },

  resultImage: {
    width: "95%",
    maxWidth: "1100px",
    borderRadius: "20px",
    boxShadow: `
    0 0 30px rgba(0,0,0,0.6),
    0 0 40px rgba(212,175,55,0.3)`,
    transition: "transform 0.3s ease",
  },


}

export default Achievements