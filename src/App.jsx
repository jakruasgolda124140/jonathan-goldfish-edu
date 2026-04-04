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
      <div style={Styles.blurDivider}>
        {/* Decorative Blur Divider */}
        <div style={Styles.transition}></div>
      </div>
      <Announcements />
       <div style={Styles.blurDivider}>
        {/* Decorative Blur Divider */}
        <div style={Styles.transition}></div>
      </div>
      <About />
      <div style={Styles.blurDivider}>
        {/* Decorative Blur Divider */}
        <div style={Styles.transition}></div>
      </div>
      <Achievements />
    </div>
  );
}

const Styles = {
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