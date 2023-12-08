"use client"
import React, { Suspense } from "react";
import styled from "styled-components";
import Cubes from "./Cubes";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight:500;
  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`

`;

const Button = styled.button`
  background-color: blueviolet;
  color: white;
  font-weight: 600;
  padding: 20px;
  width:30%;
  margin-top:10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const AboutInfo = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Title>VK Creative Learning: </Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle className="text-xl font-semibold ">Passionate People, Passionate Work</Subtitle>
          </WhatWeDo>
          <Desc className="text-slate-600 font-medium text-lg py-2">
          Serving for a vast number of years, we have championed the art of creating pedagogical, effectual, and cost effective e-learning solutions. Our tailor-made e-learning packages entail social learning solutions, customized lectures, videos and simulation, Instructional design, blended learning, translation and localization in more than 50 languages.

            With a wide variety of hybrid e-learning options on the offerings, our clients can choose a learning solution that is cost effective; highly productive; and beneficial to them. Our methodical and systematic approach has helped a lot of business entities, entrepreneurs, and many top notch corporations to save time and efforts. Healthcare, retail, ecommerce, education, manufacturing, IT, corporates, construction, and many other sectorscould use our e-learning solution to reap high ROI, and experience improved results.


          </Desc>
          <Button>See our works</Button>
        </Left>

        <Right>
          {/* <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas> */}
          <Cubes />
        </Right>
      </Container>
    </Section>
  );
};

export default AboutInfo;