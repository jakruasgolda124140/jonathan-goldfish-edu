import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./pages/About";

const Styles = {
  blurDivider: {
    height: "120px",
    marginTop: "-80px",
    background: "linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(212, 175, 55, 0.4) 40%, rgba(212, 175, 55, 0.8) 100%)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
  }
};

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <div style={Styles.blurDivider}>
        {/* Decorative Blur Divider */}
      </div>
      <About />
    </div>
  );
}

export default App