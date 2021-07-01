import React from "react";
import { graphql } from "gatsby";
import Layout from "../containers/layout";
import PortableText from "../components/portableText";

export const query = graphql`
  query AboutPageQuery {
    settings: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    about: sanityAbout {
      title
      _rawBio
    }
  }
`;

export default function About({ data }) {
  const about = (data || {}).about;
  return (
    <Layout>
      <div style={{ color: `teal` }}>
        <h1>{about.title}</h1>
        {about._rawBio && <PortableText blocks={about._rawBio} />}
      </div>
    </Layout>
  );
}
