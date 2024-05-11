import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import SobreMim from "../../components/SobreMim";
import HeaderContainer from "../../components/HeaderContainer";
import LastProject from "../../components/LastProject";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <HeaderContainer></HeaderContainer>
      <SobreMim></SobreMim>
      <LastProject></LastProject>
    </>
  );
}
