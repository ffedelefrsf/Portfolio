import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";

export type PolaroidVisual = {
  placeholder: PlaceholderValue;
  rotation: number;
};

export type PolaroidItem = PolaroidVisual & {
  src: string;
  caption: string;
};
