import banner from "./assets/homepage-banner.png";
import GamingNewsList from "./components/GamingNewsList";
import imagecontent2 from "./assets/content2-section.png";

const Home = () => {
  return (
    <div className="homepage-parent">
      <div className="homepage">
        <div className="welcome">
          <img className="homepage-banner-image" src={banner} alt="" />
          {/* <h1>Welcome to Game Catalogue!</h1> */}
        </div>

        <div className="content1">
          <div className="square-title">
            <h2>Track Your Video Game Collection!</h2>
          </div>

          <h3>{"\u2B24"} See every game you own in one place</h3>
          <h3>{"\u2B24"} Track your progress</h3>
          <h3>{"\u2B24"} Become a member!</h3>
          <h3>{"\u2B24"} Join Us Now!</h3>
          <div className="square-start-button">
            <h2>Press Start to Continue!</h2>
          </div>
        </div>

        <div className="content2">
          <div className="square-title">
            <h2>Adding Games is Very Easy!</h2>
          </div>
          <img className="homepage-image" src={imagecontent2} alt="" />
        </div>

        <div className="content3">
          <div className="square-title-news">
            <h2>Latest Gaming News</h2>
          </div>
          <GamingNewsList />
        </div>
      </div>
    </div>
  );
};

export default Home;
