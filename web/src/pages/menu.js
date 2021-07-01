import React from "react";
import { graphql } from "gatsby";
import Layout from "../containers/layout";
import MenuBlueSection from "../components/menuBlueSection";
import MenuIceCreamContent from "../components/menuIceCreamContent";
import MenuYellowSection from "../components/menuYellowSection";
import MenuShakeContent from "../components/menuShakeContent";
import MenuSundaeContent from "../components/menuSundaeContent";
import MenuDrinkContent from "../components/menuDrinkContent";
import MenuSouvenirs from "../components/menuSouvenirs";
import MenuWineContent from "../components/menuWineContent";

export const query = graphql`
  query MenuPageQuery {
    menu: sanityMenu {
      flavorOfTheMonth
      iceCreamFlavors
      iceCreamImage {
        ...SanityImage
        asset {
          _id
        }
        alt
        caption
      }
      iceCreamSizes {
        title
        price
        _key
      }
      shakeFlavors {
        title
        description
        _key
      }
      shakePrice
      specialtyShakePrice
      shakeImage {
        ...SanityImage
        asset {
          _id
        }
        alt
        caption
      }
      sundaePrice
      sundaeFlavors {
        title
        description
        _key
      }
      sundaeImage {
        ...SanityImage
        asset {
          _id
        }
      }
      title
      drinkImage {
        ...SanityImage
        asset {
          _id
        }
      }
      drinkVarieties {
        title
        price
        description
        _key
      }
      bottomImage {
        ...SanityImage
        asset {
          _id
        }
        alt
        caption
      }
      bottomHeading
      bottomSubheading
      bottomText
    }
  }
`;

const Menu = ({ data }) => {
  const menu = (data || {}).menu;
  return (
    <Layout>
      <MenuBlueSection
        imageSrc={menu.iceCreamImage}
        imageAlt={menu.iceCreamImage.alt}
        imageCaption={menu.iceCreamImage.caption}
      >
        {menu && <MenuIceCreamContent {...menu} />}
      </MenuBlueSection>
      <MenuYellowSection
        imageSrc={menu.shakeImage}
        imageAlt={menu.shakeImage.alt}
        imageCaption={menu.shakeImage.caption}
      >
        {menu && <MenuShakeContent {...menu} />}
      </MenuYellowSection>
      <MenuBlueSection
        imageSrc={menu.sundaeImage}
        imageAlt={menu.sundaeImage.alt}
        imageCaption={menu.sundaeImage.caption}
      >
        {menu && <MenuSundaeContent {...menu} />}
      </MenuBlueSection>
      <MenuYellowSection
        imageSrc={menu.drinkImage}
        imageAlt={menu.drinkImage.alt}
        imageCaption={menu.drinkImage.caption}
      >
        {menu && <MenuDrinkContent {...menu} />}
      </MenuYellowSection>
      <MenuSouvenirs />
      <MenuBlueSection
        imageSrc={menu.bottomImage}
        imageAlt={menu.bottomImage.alt}
        imageCaption={menu.bottomImage.caption}
      >
        {menu && <MenuWineContent {...menu} />}
      </MenuBlueSection>
    </Layout>
  );
};
export default Menu;
