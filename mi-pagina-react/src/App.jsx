import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeatureCard from "./components/FeatureCard";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <div className="app">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <section>
        <Hero />
      </section>

      <section className="cards">
        <FeatureCard
          title="Componentes"
          description="Uso de componentes funcionales reutilizables."
        />
        <FeatureCard
          title="Hooks"
          description="Implementación de useState y useEffect."
        />
        <FeatureCard
          title="Buenas prácticas"
          description="Estructura clara y código mantenible."
        />
      </section>

      <section>
        <Stats likes={likes} setLikes={setLikes} />
      </section>

      <Footer />
    </div>
  );
}

export default App;
