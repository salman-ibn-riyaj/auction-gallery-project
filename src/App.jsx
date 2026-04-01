import { Suspense} from "react";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import ActiveAuctions from "./components/ActiveAuctionFold/ActiveAuctions";

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

  return (
    <>
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <Navbar navDataPromise={navDataPromise}></Navbar>
      </Suspense>

      

      <HeroSection></HeroSection>

      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        <ActiveAuctions auctionDataPromise={auctionDataPromise}></ActiveAuctions>
      </Suspense>

      <Footer></Footer>
    </>
  );
}

export default App;
