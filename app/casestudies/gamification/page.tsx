import "@/app/globals.css";
import Banner from "@/app/components/casestudies/gamification/banner";
import Second from "@/app/components/casestudies/gamification/second";
import Third from "@/app/components/casestudies/gamification/third";
import Fourth from "@/app/components/casestudies/gamification/fourth";
import Fifth from "@/app/components/casestudies/gamification/fifth";
import Last from "@/app/components/casestudies/gamification/last";
// import Parallax from "../../components/casestudies/parallax";
// import ScrumPage from "../../components/homepage/ScrumPage";

export default function Gamification() {
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
