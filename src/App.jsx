import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Home from "./pages/Home"
import Video from "./components/Video"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Navbar />
      <Video />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;