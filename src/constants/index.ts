import { Aflam, Alakhbar, Camera, PriceWise } from "@/images";

export const navigation = [
  {
    id: 1,
    label: "Feature",
    href: "#",
    isButton: false,
  },
  {
    id: 2,
    label: "Get Started",
    href: "#",
    isButton: true,
  },
];

export const bento = [
  {
    id: 1,
    title: "Aflam",
    description: "Aflam a movies/series web application",
    image: Aflam,
    wide: false,
  },
  {
    id: 2,
    title: "Alakhbar",
    description: "Alakhbar a news web application",
    image: Alakhbar,
    wide: true,
  },
  {
    id: 3,
    title: "PhotoLand",
    description: "PhotoLand a camera & lenses e-commerce web application",
    image: Camera,
    wide: true,
  },
  {
    id: 4,
    title: "PriseWise",
    description:
      "PriseWise an Amazon's products price tracker  web application",
    image: PriceWise,
    wide: false,
  },
];
