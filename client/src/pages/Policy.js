import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus-webhunt.png.webp"
            alt="contactus"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          We started V-Kart because we believe that shopping online should be just as personal and enjoyable as shopping in a brick-and-mortar store. Join us on this journey and see the difference for yourself!
From our humble beginnings to where we are today, V-Kart has always been driven by a commitment to quality, value, and customer satisfaction. Discover our story and shop with confidence knowing that we're here to support you every step of the way.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;