import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import { imageUrlFor } from "../lib/image-url";
import { buildImageObj } from "../lib/helpers";

function Seo({ description, lang, meta, keywords, title, image }) {
  const { site } = useStaticQuery(detailsQuery) || {};

  const metaDescription = description || site.description || "";
  const siteTitle = site.title || "";
  const metaImage = image?.asset
    ? imageUrlFor(buildImageObj(image)).width(1200).url()
    : "";

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={title === siteTitle ? "%s" : `%s | ${siteTitle}`}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:image",
          content: metaImage,
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
      ]
        .concat(
          keywords && keywords.length > 0
            ? {
                name: "keywords",
                content: keywords.join(", "),
              }
            : []
        )
        .concat(meta)}
    />
  );
}

Seo.defaultProps = {
  lang: "en",
  meta: [],
  keywords: [],
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default Seo;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site: sanitySiteSettings(_id: { eq: "siteSettings" }) {
      title
      description
      keywords
    }
  }
`;
