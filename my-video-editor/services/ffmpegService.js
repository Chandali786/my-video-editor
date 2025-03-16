// services/ffmpegService.js
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

const ffmpeg = createFFmpeg({ log: true });

export async function loadFFmpeg() {
  if (!ffmpeg.isLoaded()) {
    await ffmpeg.load();
  }
}

export async function trimVideo(file, startTime, duration) {
  await loadFFmpeg();
  ffmpeg.FS('writeFile', 'input.mp4', await fetchFile(file));
  await ffmpeg.run('-i', 'input.mp4', '-ss', startTime.toString(), '-t', duration.toString(), '-c', 'copy', 'output.mp4');
  const data = ffmpeg.FS('readFile', 'output.mp4');
  return URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' }));
}
