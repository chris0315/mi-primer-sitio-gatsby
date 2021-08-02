import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const about = () => {
  return (
    <Layout pageTitle="About">
      <h2>christopher</h2>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/25.jpg"
      />
    </Layout>
  );
};

export default about;
