import "@/app/globals.css";
import Banner from "@/app/components/casestudies/business/banner";
import Second from "@/app/components/casestudies/business/second";
import Third from "@/app/components/casestudies/business/third";
import Fourth from "@/app/components/casestudies/business/fourth";
import Fifth from "@/app/components/casestudies/business/fifth";
import Last from "@/app/components/casestudies/business/last";
import TargetSection from "@/app/components/casestudies/targetsection";
import Button from "@/app/components/casestudies/button";
// import Parallax from "../../components/casestudies/parallax";
// import ScrumPage from "../../components/homepage/ScrumPage";

export default function Business() {
  return (
    <>
      <Banner />
      <TargetSection />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <div className="container border-1 border-b-black border-dashed mx-auto"></div>
      <Last />
      <Button />
      {/* <Parallax />
      <ScrumPage /> */}
    </>
  );
}
