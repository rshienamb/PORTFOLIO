import { GalleryItem } from "./data";

type RequireContext = {
  keys: () => string[];
  <T>(id: string): T;
};

type WebpackRequire = NodeRequire & {
  context: (
    path: string,
    deep?: boolean,
    filter?: RegExp,
  ) => RequireContext;
};

const toTitle = (filename: string) =>
  filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

const buildGallery = (context: RequireContext, subtitle: string): GalleryItem[] =>
  context.keys().map((key) => {
    const source = context<string>(key);
    const filename = key.replace("./", "");

    return {
      title: toTitle(filename),
      subtitle,
      image: source,
    };
  });

const webpackRequire = require as WebpackRequire;

const workplaceContext = webpackRequire.context(
  "./assets/workplace",
  false,
  /\.(png|jpe?g|webp|avif)$/i,
);

const trainingContext = webpackRequire.context(
  "./assets/training",
  false,
  /\.(png|jpe?g|webp|avif)$/i,
);

export const workplaceGallery = buildGallery(
  workplaceContext,
  "Workplace and company-related image",
);

export const trainingGallery = buildGallery(
  trainingContext,
  "Training, seminar, or certificate image",
);
