import Care from "../Component/Body/Care/Care";
import Hero from "../Component/Body/Hero/Hero";
import OurServices from "../Component/Body/OurService/OurServices";
import Track from "../Component/Body/Track/Track";
import UserSay from "../Component/Body/UserSay/UserSay";

function Home() {
  return (
    <div className="pt-14"> 
      <Hero />
      <OurServices />
      <UserSay />
      <Track />
      <Care/>
    </div>
  );
}

export default Home;
