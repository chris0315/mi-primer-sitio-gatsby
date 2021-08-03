import React from "react";
import Layout from "../components/Layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";

const blogPages = ({ data }) => {
  return (
    <div>
      <Layout pageTitle="blog">
        <h2>mi blog</h2>
        <ul>
          {data.allMdx.nodes.map((node) => (
            <article key={node.id}>
              <h2>{node.frontmatter.title}</h2>
              <p>Posted: {node.frontmatter.date}</p>
              <MDXRenderer>{node.body}</MDXRenderer>
            </article>
          ))}
        </ul>
      </Layout>
    </div>
  );
};
export const querry = graphql`
  query MyQuery {
    allMdx(sort: { fields: frontmatter___date, order: ASC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`;

export default blogPages;
