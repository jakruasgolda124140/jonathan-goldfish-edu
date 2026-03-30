function Header() {
  return (
    <div style={styles.header}>
      
      {/* Background Image */}
      <img 
        src="/Hero.jpg"   
        alt="Hero"
        style={styles.image}
      />

      {/* Overlay Text */}
      <div style={styles.overlay}>
        <h1 style={styles.title}>Jonathan Goldfish EDU</h1>
        <p style={styles.subtitle}>Official Website</p>
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
    overlay: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "white",
        background: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for better text visibility
        backdropFilter: "blur(6px)", // Optional: adds a blur effect to the background
        padding: "20px 40px",
        borderRadius: "8px",
        textAlign: "center",
    },

    title: {
        fontSize: "36px",
        margin: 0,
    },

    subtitle: {
        fontSize: "18px",
        margin: "10px"
    }
}

export default Header;