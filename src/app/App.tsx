import { classNames } from "../shared/lib/classNames/classNames";
import AuthPage from "../pages/AuthPage/ui/AuthPage";
import AppRouter from "./providers/router/AppRouter";

function App() {
  return (
    <div className="app">
      <AppRouter />
      
    </div>
  )
}

export default App;
