function Header() {
  return (
    <div style={styles.header}>
      
      {/* Background Image */}
      <img 
        src="/Hero.jpg"   
        alt="Hero"
        style={styles.image}
      />

      {/*Black Tint*/}
      <div style={styles.blackTint}></div>

      {/* Logo and Title */}     
      <div style={styles.overlay}>
       <div style={styles.heroRow}>
         {/* LEFT: LOGO */}
          <img src="/Jonathan Goldfish.jpg" style={styles.heroLogo} />
         {/* RIGHT: TEXT */}
          <div style={styles.textBlock}>
            <div style={styles.titleRow}>
              {"WELCOME".split("").map((letter, index) => (
                <span key={index} style={styles.letter}>{letter}</span>
              ))}
            </div>
            <div style={styles.subtitleWrapper}>
              <p style={styles.subtitle}>
                Jonathan Goldfish EDU presents
             </p>
              <div style={styles.underline}></div>
              </div>
          </div>
        </div>
      </div>
       
    </div>
  )
}

const styles = {
    header: {
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
    },

    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center"
    },
    
    blackTint: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.6)", // ✅ semi-transparent black
        zIndex: 1,
    },

    overlay: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        zIndex: 2,
    },
    
    heroRow:{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "60px",
    },
    
    heroLogo: {
        width: "350px",
        height: "350px",
        borderRadius: "30px",
        boxShadow: "0 0 40px rgba(255, 215, 0, 0.8)",
    },
    
    textRow:{
        display: "flex",
        gap: "18px",
    },

    titleRow: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        fontFamily: '"Anton", sans-serif',
        fontSize: "clamp(60px, 10vw, 140px)", // Responsive font size
        letterSpacing: "clamp(6px, 1.5vw, 12px)", // Responsive letter spacing
        color:"#fff",
        textTransform:"uppercase",
        textShadow: "0 4 20px rgba(0, 0, 0, 0.5)", 
    },
    
    letter: {
      fontFamily: '"Anton", sans-serif',
      fontSize: "clamp(60px, 10vw, 140px)", // Responsive font size
      color:"#fff",
      textShadow: "0 5 25px rgba(0, 0, 0, 0.8)",
    },
    
    subtitle: {
      marginTop: "12px", 
      fontSize: "28px", // Responsive subtitle size
      fontWeight: "700",
      color:"#f5e6b3",
      letterSpacing: "1px",
    },

    subtitleWrapper: {
      display: "flex",
      textAlign:"center",
    },

    underline:{
      width: "100%",
      height: "4px",
      background: "linear-gradient(90deg, #ffd700, #ffcc00)",
      marginTop: "2px",
      borderRadius: "2px",
      boxShadow: "0 0 10px rgba(255, 215, 0, 0.7)",
    },

}

export default Header;