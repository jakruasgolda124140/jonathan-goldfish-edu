import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Announcements from "./pages/Home/Annoucements";
import About from "./pages/Home/About";
import Achievements from "./pages/Home/Achievement";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <div style={Styles.heroDivider}>
      </div>
      <Announcements />
      <div style={Styles.heroDivider}></div>
      <About />
      <div style={Styles.achievementDivider}></div>
      <Achievements />
    </div>
  );
}

const Styles = {
  heroDivider: {
    height: "240px",
    marginTop: "-160px",
    position: "relative",
    zIndex: 2,
    pointerEvents: "none",
    background: "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.1) 25%, rgba(0, 0, 0, 0.3) 65%, rgba(0, 0, 0, 0.15) 85%, transparent 100%)",
  },
  achievementDivider: {
    height: "12px",
    width: "100%",
    marginTop: "-6px",
    position: "relative",
    zIndex: 2,
    pointerEvents: "none",
    backgroundColor: "rgba(212, 175, 55, 0.3)",
  },
  blurDivider: {
    height: "120px",
    marginTop: "-80px",
    background: "linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(212, 175, 55, 0.4) 40%, rgba(212, 175, 55, 0.8) 100%)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
  },
  transition: {
    height: "140px",
    width: "100%",
    background: `
      linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.5), 
      rgba(212, 175, 55, 0.4) 75%,
      rgba(212, 175, 55, 0.7) 100%,
      `,
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    marginTop:"40px",
    marginBottom:"-40px",
    zIndex:"2",
    position:"relative",
    borderTop:"1px solid rgba(255, 215, 0, 0.8)",
  }
};

export default App