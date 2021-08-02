import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { fondo } from "../components/layout.module.css";

const about = () => {
  return (
    <Layout pageTitle="About">
      <h2>christopher</h2>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/25.jpg"
      />
      <div className={fondo}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          ullam mollitia ex maiores distinctio, dolorum autem nulla quod
          consequuntur numquam corporis in molestiae, repudiandae quaerat dicta,
          quae aliquid delectus esse!
        </p>
      </div>
    </Layout>
  );
};

export default about;
