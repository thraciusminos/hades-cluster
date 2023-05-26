import { ThemeProvider } from "@mui/material";
import { theme } from "theme/theme";
import "./App.css";
import { HadesClusterViewer } from "./components/viewer/HadesClusterViewer";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <HadesClusterViewer />
      </ThemeProvider>
    </div>
  );
}

export default App;
