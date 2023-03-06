export interface PhotoGaleryProps {
  photos: Array<string>;
  onClick: (src: string, alt: string) => void;
}
