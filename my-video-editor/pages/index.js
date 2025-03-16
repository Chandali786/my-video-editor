// pages/index.js
import { useState } from "react";
import VideoUploader from "../components/VideoUploader";
import VideoPlayer from "../components/VideoPlayer";
import EditorToolbar from "../components/EditorToolbar";
import Timeline from "../components/Timeline";

export default function Home() {
  const [videoData, setVideoData] = useState(null);
  const [editedVideoUrl, setEditedVideoUrl] = useState(null);

  const handleUpload = ({ file, url }) => {
    setVideoData({ file, url });
    setEditedVideoUrl(url); // start with the raw video URL
  };

  const handleTrim = async () => {
    if (videoData) {
      const { trimVideo } = await import("../services/ffmpegService");
      // Example: trim from 5 sec for 10 sec duration.
      const newUrl = await trimVideo(videoData.file, 5, 10);
      setEditedVideoUrl(newUrl);
    }
  };

  const handleAddText = () => {
    alert("Add text overlay – feature coming soon!");
  };

  const handleApplyEffect = async () => {
    const res = await fetch("/api/ai-enhance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ videoUrl: editedVideoUrl }),
    });
    const { subtitles } = await res.json();
    alert("AI subtitles generated:\n" + subtitles);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold">
        AI‑Powered Video Editor for Reels & Shorts
      </h1>
      <VideoUploader onUpload={handleUpload} />
      {editedVideoUrl && (
        <>
          <VideoPlayer src={editedVideoUrl} />
          <EditorToolbar
            onTrim={handleTrim}
            onAddText={handleAddText}
            onApplyEffect={handleApplyEffect}
          />
          <Timeline segments={[]} onSegmentChange={() => {}} />
        </>
      )}
    </div>
  );
}
