// components/VideoUploader.js
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function VideoUploader({ onUpload }) {
  const onDrop = useCallback((acceptedFiles) => {
      if (acceptedFiles.length) {
            const file = acceptedFiles[0];
                  const url = URL.createObjectURL(file);
                        onUpload({ file, url });
                            }
                              }, [onUpload]);

                                const { getRootProps, getInputProps, isDragActive } = useDropzone({
                                    onDrop,
                                        accept: "video/mp4, video/mov, video/webm",
                                          });

                                            return (
                                                <div
                                                      {...getRootProps()}
                                                            className="border-2 border-dashed p-6 rounded-md text-center cursor-pointer"
                                                                >
                                                                      <input {...getInputProps()} />
                                                                            {isDragActive ? (
                                                                                    <p>Drop the video here...</p>
                                                                                          ) : (
                                                                                                  <p>Drag and drop your video here, or click to select a file.</p>
                                                                                                        )}
                                                                                                            </div>
                                                                                                              );
                                                                                                              }