function Announcements() {
  return (
    <div style={styles.title}>
      Announcements Page 📢
    </div>
  );
}

const styles = {
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
}
export default Announcements;