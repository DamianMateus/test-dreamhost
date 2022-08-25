import React from "react";
import MainPage from "./components/MainPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from "react-bootstrap/esm/ThemeProvider";

function App() {
  return (
    <ThemeProvider
      breakpoints={['xl', 'lg', 'md', 'sm']}
      minBreakpoint='sm'
    >
      <div className="App">
        <header className="App-header">
          <MainPage></MainPage>
        </header>
      </div>

    </ThemeProvider>

  );
}

export default App;
