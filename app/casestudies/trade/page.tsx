import "@/app/globals.css";
import Banner from "@/app/components/casestudies/trade/banner";
import Second from "@/app/components/casestudies/trade/second";
import Third from "@/app/components/casestudies/trade/third";
import Fourth from "@/app/components/casestudies/trade/fourth";
import Fifth from "@/app/components/casestudies/trade/fifth";
import Last from "@/app/components/casestudies/trade/last";
// import Parallax from "../../components/casestudies/parallax";
// import ScrumPage from "../../components/homepage/ScrumPage";

export default function Trade() {
  return (
    <>
      <Banner />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <div className="container border-1 border-b-black border-dashed mx-auto"></div>
      <Last />
      {/* <Parallax />
      <ScrumPage /> */}
    </>
  );
}
