import React, { useCallback, useState } from "react";
import cuid from "cuid";
import Dropzone from "./components/Dropzone";
import VideosGrid from "./components/VideosGrid";
import "./index.css";
import "./App.css";
function App() {
  const [videos, setVideos] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setVideos((prevState) => [
          ...prevState,
          { id: cuid(), src: e.target.result },
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);
  return (
    <div className="App">
      <div className="main_container">
        <h1 className="text-center">Drag and Drop To Upload Files</h1>
        <Dropzone onDrop={onDrop} accept={"video/mp4*"} />
        <VideosGrid videos={videos} />
      </div>
    </div>
  );
}
export default App;
