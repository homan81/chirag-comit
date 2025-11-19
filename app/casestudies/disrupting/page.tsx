import "@/app/globals.css";
import Banner from "@/app/components/casestudies/disrupting/banner";
import Second from "@/app/components/casestudies/disrupting/second";
import Third from "@/app/components/casestudies/disrupting/third";
import Fourth from "@/app/components/casestudies/disrupting/fourth";
import Fifth from "@/app/components/casestudies/disrupting/fifth";
import Last from "@/app/components/casestudies/disrupting/last";
// import Parallax from "../../components/casestudies/parallax";
// import ScrumPage from "../../components/homepage/ScrumPage";

export default function Disrupting() {
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
