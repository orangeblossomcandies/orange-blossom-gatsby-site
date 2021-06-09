import React from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import Seo from "../components/seo";
import Layout from "../containers/layout";
import BluePanel from "../components/bluePanel";
import MainSection from "../components/mainSection";
import AboutPanel from "../components/aboutPanel";

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    home: sanityHome {
      heading
      subheading
      panelImage {
        asset {
          _id
        }
        caption
        alt
        ...SanityImage
      }
      body
    }
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />G
      </Layout>
    );
  }

  const site = (data || {}).site;
  const home = (data || {}).home;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <Seo
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <MainSection />
      <BluePanel
        imageSrc={home.panelImage}
        imageAlt={home.panelImage.alt}
        imageCaption={home.panelImage.caption}
        heading={home.heading}
        subheading={home.subheading}
        panelText={home.body}
      />
      <AboutPanel />
    </Layout>
  );
};

export default IndexPage;
