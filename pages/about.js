
import React, { useRef, useState } from 'react'





const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <h4>
Building Products and tools with deep focus on problem at hand and 
satisfying customer requirement with established and tested 
procedure to attain optimised end result. Working in rapid 
changing environment and maintaining the agility of systems.
</h4>


    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
