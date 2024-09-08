export default function ImageHero({ src }) {
  return (
    <img
      src={src}
      alt="angular logo"
      className="inline-block mr-3 w-4 h-4 md:w-7 md:h-7"
    />
  );
}
