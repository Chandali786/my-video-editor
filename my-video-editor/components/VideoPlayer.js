// components/VideoPlayer.js
export default function VideoPlayer({ src }) {
  if (!src) return <p>No video loaded.</p>;
    return (
        <video controls className="w-full rounded-md">
              <source src={src} type="video/mp4" />
                    Your browser does not support HTML5 video.
                        </video>
                          );
                          }