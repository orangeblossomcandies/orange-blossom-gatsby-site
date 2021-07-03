import S from "@sanity/desk-tool/structure-builder";
import {
  FcHome,
  FcEditImage,
  FcSettings,
  FcAbout,
  FcBusinesswoman,
} from "react-icons/fc";
import IframePreview from "../previews/IframePreview";

// Web preview configuration
const remoteURL = "https://orange-blossom-gatsby-site.netlify.app";
const localURL = "http://localhost:8000";
const previewURL =
  window.location.hostname === "localhost" ? localURL : remoteURL;

export const getDefaultDocumentNode = (props) => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const { schemaType } = props;
  if (schemaType == "post") {
    return S.document().views([
      S.view.form(),
      S.view
        .component(IframePreview)
        .title("Web preview")
        .options({ previewURL }),
    ]);
  }
  return S.document().views([S.view.form()]);
};

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Settings")
        .icon(FcSettings)
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
      S.listItem()
        .title("Store Info")
        .icon(FcAbout)
        .child(
          S.editor().id("info").schemaType("info").documentId("singletonInfo")
        ),
      S.listItem()
        .title("Homepage")
        .icon(FcHome)
        .child(
          S.editor()
            .id("home")
            .schemaType("home")
            .documentId("singletonHomepage")
        ),
      S.listItem()
        .title("About Page")
        .icon(FcBusinesswoman)
        .child(
          S.editor()
            .id("about")
            .schemaType("about")
            .documentId("singletonAbout")
        ),
      S.listItem()
        .title("Menu Page")
        .icon(FcEditImage)
        .child(
          S.editor().id("menu").schemaType("menu").documentId("singletonMenu")
        ),
      // `S.documentTypeListItems()` returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above.
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["siteSettings", "home", "menu", "about", "info"].includes(
            listItem.getId()
          )
      ),
    ]);
