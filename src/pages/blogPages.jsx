import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

const blogPages = ({ data }) => {
  return (
    <div>
      <Layout pageTitle="blog">
        <h2>mi blog</h2>
        <ul>
          {data.allFile.nodes.map((node) => (
            <li key={node.name}>{node.name}</li>
          ))}
        </ul>
      </Layout>
    </div>
  );
};
export const querry = graphql`
  query MyQuery {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default blogPages;
