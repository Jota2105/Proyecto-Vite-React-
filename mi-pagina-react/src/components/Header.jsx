function Header({ darkMode, setDarkMode }) {
  return (
    <header>
      <h1>Página Informativa React</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Modo Claro" : "Modo Oscuro"}
      </button>
    </header>
  );
}

export default Header;