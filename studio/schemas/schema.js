// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// document schemas
import siteSettings from "./documents/siteSettings";
import singletonHomepage from "./documents/singletonHomepage";
import singletonMenu from "./documents/singletonMenu";
import singletonAbout from "./documents/singletonAbout";

// Object types
import bodyPortableText from "./objects/bodyPortableText";
import bioPortableText from "./objects/bioPortableText";
import excerptPortableText from "./objects/excerptPortableText";
import mainImage from "./objects/mainImage";
import iceCreamSize from "./objects/iceCreamSize";
import specialtyFlavor from "./objects/specialtyFlavor";
import drink from "./objects/drink";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "blog",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    singletonAbout,
    singletonMenu,
    singletonHomepage,
    siteSettings,
    mainImage,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,
    iceCreamSize,
    specialtyFlavor,
    drink,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
});
