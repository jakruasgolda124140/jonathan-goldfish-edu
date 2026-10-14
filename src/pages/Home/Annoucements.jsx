function Announcements() {
  return (
    <section style={styles.section}>
      <h1 style={styles.title}>Announcements Page 📢</h1>
    </section>
  );
}

const styles = {
  section: {
    minHeight: "100vh",
    boxSizing: "border-box",
    padding: "100px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.5)),
      url("/Annoucements.png")
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  },
  title: {
    fontSize: "clamp(56px, 8vw, 110px)", // 🔥 BIG responsive
    margin: 0,
    color: "#ffffff", // ✅ visible

    fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif',
    fontWeight: "800",
    letterSpacing: "4px",
    textTransform: "uppercase",
    textAlign: "center",

    // ✅ dark glow for contrast (not gold)
    textShadow: "0 0 20px rgba(0,0,0,0.4)",
  },
}
export default Announcements;