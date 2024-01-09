export default function SpotifyComp({ src }) {
  return (
    <iframe
      // style="border-radius:12px"
      src={src}
      width="100%"
      height="152"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  );
}
