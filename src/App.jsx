import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import "./Styles.css";

import {
  EducationResume,
  NavBar,
  ProfilResume,
  OtherCards,
  Footer,
} from "./components/Profil.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <ProfilResume />
      <EducationResume />
      <OtherCards />
      <Footer />
    </>
  );
}

export default App;
