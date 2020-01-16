import { useType } from "@hex-engine/core";
import { Point } from "../Models";

type ScaleFunc = {
  (): Point;
  (scaleFactor: Point): Point;
  (scaleFactor: number): Point;
  (scaleFactorX: number, scaleFactorY: number): Point;
};

const Scale: ScaleFunc = (...args: any[]) => {
  useType(Scale);

  let x = 1,
    y = 1;

  if (args.length === 1) {
    if (typeof args[0] === "number") {
      x = args[0];
      y = args[0];
    } else {
      const point = args[0];
      x = point.x;
      y = point.y;
    }
  } else if (args.length === 2) {
    x = args[0];
    y = args[1];
  }

  return new Point(x, y);
};

export default Scale;
