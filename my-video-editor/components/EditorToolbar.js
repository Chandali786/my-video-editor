// components/EditorToolbar.js
export default function EditorToolbar({ onTrim, onAddText, onApplyEffect }) {
  return (
      <div className="flex gap-4 p-2 bg-gray-100 rounded-md">
            <button onClick={onTrim} className="btn">
                    Trim Video
                          </button>
                                <button onClick={onAddText} className="btn">
                                        Add Text Overlay
                                              </button>
                                                    <button onClick={onApplyEffect} className="btn">
                                                            Apply AI Enhancement
                                                                  </button>
                                                                      </div>
                                                                        );
                                                                        }