import './index.css';
import { createRoot } from "react-dom/client";

function Game() {
  // Points to your public directory folder
  const localGameUrl = "./learn.html";

  return (
    <iframe
    src={localGameUrl}
    title="Sans Fight Simulator"
    allow="autoplay; fullscreen; keyboard; gamepad; pointer-lock"
    allowFullScreen
    style={{ width: '100%', height: '100%', border: 'none' }}
    />
);

}

createRoot(document.getElementById("root")!).render(
  <>
  <Game /> 
  </>
)