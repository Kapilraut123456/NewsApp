import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navabar/Navbar";
import News from "./component/News/News";
import LoadingSpinner from "./component/LoadingSpinner/LoadingSpinner";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState("false");
  const [progress, setProgress] = useState(0);
  const apiKey = "07b0a8c2f11b458e8f8846e435e69538";
  return (
    <>
      <Navbar setCategory={setCategory} />
      <LoadingBar height={4} color="#f11946" progress={progress} />
      {loading && <LoadingSpinner />}
      <News
        category={category}
        setLoading={setLoading}
        loading={loading}
        apiKey={apiKey}
        setProgress={setProgress}
      />
    </>
  );
}

export default App;
