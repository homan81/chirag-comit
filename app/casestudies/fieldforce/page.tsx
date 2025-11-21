import "@/app/globals.css";
import Banner from "@/app/components/casestudies/fieldforce/banner";
import Second from "@/app/components/casestudies/fieldforce/second";
import Third from "@/app/components/casestudies/fieldforce/third";
import Fourth from "@/app/components/casestudies/fieldforce/fourth";
import Fifth from "@/app/components/casestudies/fieldforce/fifth";
import Last from "@/app/components/casestudies/fieldforce/last";
import TargetSection from "@/app/components/casestudies/targetsection";
import Button from "@/app/components/casestudies/button";
// import Parallax from "../../components/casestudies/parallax";
// import ScrumPage from "../../components/homepage/ScrumPage";

export default function FeildForce() {
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
