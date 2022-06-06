import React from "react";
<<<<<<< HEAD
import HomeHero from "../ASSETS/Home.jpg";
import "../Styles/Home.css";
=======
import "../Styles/Home.css";
import AboutBrief from "../ASSETS/AboutBrief.jpg";
>>>>>>> Sarthak Updated

function Home() {
  return (
    <div className="Home">
<<<<<<< HEAD
      <img src={HomeHero} alt="HomeHero" className="HomeImage" />
=======
      <div className="HeroArea">
        <h3 className="HeroData">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem quidem nihil ullam reprehenderit cupiditate ex, libero
          repellat repudiandae aliquid recusandae est, aperiam accusantium! Illo
          error quaerat necessitatibus cum, maxime perferendis similique.
          Commodi suscipit magnam non veritatis atque unde deleniti culpa.
        </h3>
        <button className="Button">Know More</button>
      </div>

      <div className="AboutInformation">
        <h1>About Us:</h1>
        <div className="BriefAbout">
          <p className="AboutPara">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            dignissimos et ducimus, inventore culpa quod, aperiam tempora minima
            est officiis quas? Beatae numquam placeat quia dolorem harum tenetur
            ad voluptatibus, iusto, repellat unde perspiciatis perferendis
            eveniet non. Itaque quo perferendis repellat dicta obcaecati vel
            laudantium. Ut nesciunt doloribus nisi quibusdam! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Iste, id. Est nobis mollitia
            itaque veritatis facilis, excepturi quidem ipsa veniam suscipit
            consequatur sit, distinctio quod, non ab minus odio dolorum?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            voluptatum non praesentium corrupti quae aperiam iure, amet
            aspernatur voluptatem est itaque impedit ipsa, atque neque! Nisi
            suscipit atque sapiente blanditiis.
            <br />
          </p>

          <img src={AboutBrief} alt="AboutImage" className="AboutImage" />
        </div>
        <div className="ButtonDiv">
          <button className="AboutButton">More</button>
        </div>
        <h1>Facilities:</h1>
        <div className="BriefAbout">
          <img src={AboutBrief} alt="AboutImage" className="AboutImage" />
          <p className="FacilityPara">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            dignissimos et ducimus, inventore culpa quod, aperiam tempora minima
            est officiis quas? Beatae numquam placeat quia dolorem harum tenetur
            ad voluptatibus, iusto, repellat unde perspiciatis perferendis
            eveniet non. Itaque quo perferendis repellat dicta obcaecati vel
            laudantium. Ut nesciunt doloribus nisi quibusdam! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Iste, id. Est nobis mollitia
            itaque veritatis facilis, excepturi quidem ipsa veniam suscipit
            consequatur sit, distinctio quod, non ab minus odio dolorum?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            voluptatum non praesentium corrupti quae aperiam iure, amet
            aspernatur voluptatem est itaque impedit ipsa, atque neque! Nisi
            suscipit atque sapiente blanditiis.
            <br />
          </p>
        </div>
      </div>
>>>>>>> Sarthak Updated
    </div>
  );
}

export default Home;
