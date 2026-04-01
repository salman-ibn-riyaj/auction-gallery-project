import { Suspense, useState} from "react";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import ActiveAuctions from "./components/ActiveAuctionFold/ActiveAuctions";
import { ToastContainer } from "react-toastify";

const navDataFetch = async () => {
  const res = await fetch("/navData.json");
  return res.json();
};

const tableDataFetch = async()=>{
  const res = await fetch('/auctionData.json');
  return res.json();
}



function App() {

  const navDataPromise = navDataFetch();
  const auctionDataPromise = tableDataFetch();


   const [total, setTotal] = useState([]);
   console.log(total);
  return (
    <>
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <Navbar navDataPromise={navDataPromise} total={total}></Navbar>
      </Suspense>

      

      <HeroSection></HeroSection>

      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        <ActiveAuctions auctionDataPromise={auctionDataPromise} setTotal={setTotal}></ActiveAuctions>
      </Suspense>

      <Footer></Footer>

      <ToastContainer />
    </>
  );
}

export default App;
