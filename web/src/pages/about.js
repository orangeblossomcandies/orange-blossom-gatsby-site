import React from "react";
import { graphql } from "gatsby";
import Layout from "../containers/layout";
import PortableText from "../components/portableText";
import AboutHeader from "../components/aboutHeader";
import AboutSection from "../components/aboutSection";

export const query = graphql`
  query AboutPageQuery {
    settings: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    about: sanityAbout {
      title
      bios {
        _key
        _rawBody
        name
        role
        image {
          ...SanityImage
          alt
          asset {
            _id
          }
        }
      }
    }
  }
`;

export default function About({ data }) {
  const about = (data || {}).about;
  return (
    <Layout>
      <AboutHeader />
      {about.bios.map((bio) => (
        <AboutSection
          key={bio._key}
          name={bio.name}
          role={bio.role}
          excerpt={bio.excerpt}
          image={bio.image}
          bio={bio._rawBody && <PortableText blocks={bio._rawBody} />}
        />
      ))}
    </Layout>
  );
}
