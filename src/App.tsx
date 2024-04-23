import { ToastContainer } from "react-toastify";
import DailySeries from "./components/DailySeries/DailySeries";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="container mx-auto h-screen">
      <Header />
      <div className="bg-slate-700 mt-4 rounded-lg text-left p-6">
        <DailySeries />
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
