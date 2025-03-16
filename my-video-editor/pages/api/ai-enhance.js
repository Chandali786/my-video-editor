// pages/api/ai-enhance.js
import { generateSubtitles } from "../../services/aiService";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { videoUrl } = req.body;
    try {
      const subtitles = await generateSubtitles(videoUrl);
      res.status(200).json({ subtitles });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
