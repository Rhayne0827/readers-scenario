import { useEffect, useRef } from "react";
import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";
import { FreeCamera } from "@babylonjs/core/Cameras/freeCamera";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { Color4 } from "@babylonjs/core/Maths/math.color";

export function GameCanvas() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const initialized = useRef(false);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || initialized.current) return;
    initialized.current = true;
    const engine = new Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });
    const scene = new Scene(engine);
    scene.clearColor = new Color4(0.025, 0.028, 0.035, 1);
    const camera = new FreeCamera("reader-camera", new Vector3(0, 0, -10), scene);
    camera.setTarget(Vector3.Zero());
    engine.runRenderLoop(() => scene.render());
    const resize = () => engine.resize();
    window.addEventListener("resize", resize);
    return () => { window.removeEventListener("resize", resize); engine.stopRenderLoop(); scene.dispose(); engine.dispose(); initialized.current = false; };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 h-full w-full opacity-70" aria-hidden="true" />;
}
