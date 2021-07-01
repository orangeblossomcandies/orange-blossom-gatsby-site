import React from "react";
import { graphql } from "gatsby";
import Layout from "../containers/layout";

export const query = graphql`
  query AboutPageQuery {
    settings: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`;

export default function About() {
  return (
    <Layout>
      <div style={{ color: `teal` }}>
        <h1>About Gatsby</h1>
        <p>Such wow. Very React.</p>
      </div>
    </Layout>
  );
}
