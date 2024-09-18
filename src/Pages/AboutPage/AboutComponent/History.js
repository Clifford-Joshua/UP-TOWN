import React from "react";
import styled from "styled-components";
const History = () => {
  const founding_year = 2004;
  const current_year = new Date().getFullYear();
  const age = current_year - founding_year;

  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2 className="heading">Our history</h2>
          <p>
            Up-Town was born out of a desire to create a community where
            technology, creativity, and innovation converge. Established in
            {founding_year}, Up-Town started as a small but ambitious project by
            a group of passionate developers, designers, and entrepreneurs.
            Their vision was to create a platform that not only offers
            cutting-edge tech solutions but also fosters collaboration between
            tech enthusiasts, artists, and businesses. Initially, Up-Town began
            as a software development hub, catering to local startups and
            businesses in need of tailored digital solutions. However, as word
            spread about the quality of service and the dedication to
            innovation, Up-Town quickly expanded. Over the years, Up-Town has
            grown into a full-fledged ecosystem, encompassing everything from
            custom software development and creative design to digital
            marketing, gaming, music, and even culinary excellence. Today,
            Up-Town is known as a dynamic space that empowers businesses to
            thrive in the digital age, helping them scale their ideas and reach
            new heights. What started as a small venture has evolved into a
            thriving hub of innovation, hosting everything from tech conferences
            and music festivals to gaming tournaments and culinary events.
          </p>
        </div>
        <div>
          <h2 className="heading">Facts About Up-Town</h2>
          <ul>
            <li>Founded in {founding_year}:</li>
            <p>
              Up-Town has been serving the tech and creative communities for
              over {age} years.
            </p>
            <li>Tech and Creative Hub:</li>
            <p>
              {" "}
              Up-Town is more than just a technology provider—it's a vibrant
              community that bridges the gap between technology, creativity, and
              business innovation.
            </p>
            <li>Gaming Community:</li>
            <p>
              Up-Town has a dedicated gaming section, where top gamers come
              together to compete in tournaments and connect with other gaming
              enthusiasts.
            </p>
            <li>Music Events:</li>
            <p>
              {" "}
              Up-Town regularly hosts live music events featuring up-and-coming
              artists and well-known musicians from various genres.
            </p>
            <li>Global Reach:</li>
            <p>
              {" "}
              Although Up-Town started locally, it now serves clients and
              partners from around the world, from startups to large
              enterprises.
            </p>
          </ul>
        </div>
        <div>
          <h2 className="heading">Up-Town Mission Statement</h2>
          <p>
            At Up-Town, our mission is to empower innovation and creativity by
            providing cutting-edge technology solutions, fostering dynamic
            collaborations, and offering exceptional experiences. We are
            dedicated to helping businesses, creators, and enthusiasts bring
            their ideas to life through seamless integration of technology,
            design, and community. Our goal is to inspire growth, push
            boundaries, and create a space where technology and creativity
            thrive together.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* =========================== */
  /* Mobile */
  padding: 15px;
  background-color: white;
  .container {
    gap: 20px;
    display: flex;
    flex-direction: column;
  }
  .heading {
    padding: 10px;
    text-align: center;
    font-family: var(--font-family-logo);
    text-shadow: 2px 2px 3px var(--black);
  }
  li {
    font-weight: bold;
  }
  P {
    font-size: 0.9rem;
    font-family: "DM Sans", system-ui;
  }
  /* ============================= */
  /* Ipad */
  @media (width >= 764px) {
    p {
      font-size: 1rem;
    }
  }
  /* ============================= */
`;

export default History;
