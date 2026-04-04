import {useState} from "react"

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <nav style={styles.navbar}>

        {/*Left Section*/} 
      <div style={styles.leftSection}>
        <img src="/Jonathan Goldfish.jpg" alt="Logo" style={styles.logoImg} />

        <div style={styles.divider}></div>

        <span style={styles.title}> Jonathan Goldfish EDU </span>
      </div>
      
     
      {/*Menu*/}
      <ul style={styles.menu}>
        <li style={styles.menuItem}
            onMouseEnter={() => setActiveMenu("home")}
            onMouseLeave={() =>  setActiveMenu(null)}
            >
              Home
            {activeMenu === "home" && (
                <ul style={styles.dropdownMenu}>
                    <li style={styles.dropdownMenuItem}>Announcements</li>
                    <li style={styles.dropdownMenuItem}>About</li>
                    <li style={styles.dropdownMenuItem}>My Achievements</li>
                    <li style={styles.dropdownMenuItem}>Contact</li>
                </ul>
            )}
        </li>

        <li style={styles.menuItem}
            onMouseEnter={() =>  setActiveMenu("A-Level Subjects")}
            onMouseLeave={() => setActiveMenu(null)}
        >
            A-Level Subjects 
            {activeMenu === "A-Level Subjects" && (
                <ul style={styles.dropdownMenu}>
                    <li style={styles.dropdownMenuItem}>9709 Mathematics</li>
                    <li style={styles.dropdownMenuItem}>9231 Further Mathematics</li>
                    <li style={styles.dropdownMenuItem}>9701 Chemistry</li>
                    <li style={styles.dropdownMenuItem}>9702 Physics</li>
                </ul>
            )}
        </li>

        <li style={styles.menuItem}>Solutions</li>

        <li style={styles.menuItem}>SPM/IGCSE Add Maths</li>

      </ul>
    </nav>
  )
}

const styles = {
  navbar: {
    width: "100%",            // VERY IMPORTANT
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#A67C00", //golden brown
    color: "white",
    padding: "12px 24px",
    boxSizing: "border-box" ,    // Prevent overflow issues
    fontFamily: '"Banhschrift", sans-serif',
    zIndex: 2000,              // Ensure navbar is on top of other elements
  },
  
  leftSection: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginLeft:"10px",
    fontWeight: 600,
  },
  
  logo: {
    fontWeight: "bold",
    fontSize: "20px"
  },

  logoContainer:{
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },

  logoImg:{
    width: "35px",
    height: "35px",
    borderRadius: "6px",
  },

  divider:{
    width: "1px",
    height: "24px",
    backgroundColor: "#9ca3af" //light gray divider
  },
  
  title:{
    fontWeight: 600,
    letterSpacing: "0.5px",
    fontFamily: '"Banhschrift", sans-serif'
  },

  menu: {
    display: "flex",
    listStyle: "none",
    gap: "30px",
    margin: 0,  
    marginRight: "120px",   
    alignItems: "center",        
    padding: 0,
    justifyContent: "space-between",
    cursor: "pointer",
    fontWeight: 600,
  },

  menuItem:{
   padding:"6px 0",
   position: "relative",
  },

  dropdownMenu:{
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "#a67d00b9",
    color: "white",
    listStyle: "none",
    padding: "10px 0",
    marginTop: "0px",
    borderRadius: "6px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    minWidth: "200px",
    zIndex: 2000,
  },

  dropdownMenuItem: {
    padding: "10px 20px",
    cursor: "pointer",
    color: "white",
  }
}

export default Navbar