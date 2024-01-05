import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import ApiContextProvider from "./contexts/ApiContext";
import PageRoute from "./routes/PageRoute";
import AuthContextProvider from "./contexts/AuthContext";
import AppHeader from "./components/AppHeader/AppHeader";
import AppFooter from "./components/AppFooter/AppFooter";

function App() {
  return (
    <AuthContextProvider>
      <ApiContextProvider>
        <AppHeader />
        <PageRoute />
        <AppFooter />
      </ApiContextProvider>
    </AuthContextProvider>
  );
}

export default App;
