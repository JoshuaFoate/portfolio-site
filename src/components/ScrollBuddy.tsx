"use client";

import { useEffect, useRef, useState } from "react";

const messages = ["Slow down!", "Wait for me!", "Too fast!", "Hey!"];
const PACE = 0.2;
const VIEWPORT_OFFSET = 300;

const HEAD_BACK = [
  ".HHHHHHH...",
  ".HHHHHHHH..",
  "..HHHHHHH..",
  "..HHHHHHH..",
  "..HHHHHHH..",
  "..HHHHHHH..",
  "...HHHHH...",
];

const HEAD_FRONT = [
  "...HHHHHHH.",
  "..HHHHHHHH.",
  "..HHHHHHH..",
  "..HFFFFFH..",
  "..FF.F.FF..",
  "..FF.F.FF..",
  "...FFFFF...",
];

const BODY_FRONT = [
  "....FFF....",
  "..###T###..",
  ".#H##T##.#.",
  ".A.##T##.A.",
  ".A.#####.A.",
  "...LL.RR...",
  "...LL.RR...",
  "...LL.RR...",
  "..lll.rrr..",
];

const BODY_BACK = [
  "....FFF....",
  "..#######..",
  ".#H#####.#.",
  ".A.#####.A.",
  ".A.#####.A.",
  "...LL.RR...",
  "...LL.RR...",
  "...LL.RR...",
  "..lll.rrr..",
];

const BACK_SPRITE = [...HEAD_BACK, ...BODY_BACK];
const FRONT_SPRITE = [...HEAD_FRONT, ...BODY_FRONT];

function PixelSprite({ running, direction }: { running: boolean; direction: "up" | "down" }) {
  const sprite = direction === "up" ? BACK_SPRITE : FRONT_SPRITE;
  return (
    <div className="grid grid-cols-[repeat(11,5px)] grid-rows-[repeat(16,5px)]">
      {sprite.flatMap((row, y) =>
        row.split("").map((cell, x) => {
          if (cell === ".") return <div key={`${y}-${x}`} />;
          const color =
            cell === "H" ? "bg-neutral-800" :
            cell === "F" ? "bg-[#e0ac69]" :
            cell === "T" ? "bg-red-600" :
            cell === "#" || cell === "A" ? "bg-[#3b6ea5]" :
            cell === "L" || cell === "R" ? "bg-muted" :
            "bg-black";
          const anim = !running
            ? ""
            : cell === "H" || cell === "F"
            ? " animate-[head-bob_0.3s_ease-in-out_infinite]"
            : cell === "A"
            ? " animate-[arm-swing_0.3s_ease-in-out_infinite]"
            : cell === "L" || cell === "l"
            ? " animate-[leg-left_0.3s_ease-in-out_infinite]"
            : cell === "R" || cell === "r"
            ? " animate-[leg-right_0.3s_ease-in-out_infinite]"
            : "";
          return <div key={`${y}-${x}`} className={`${color}${anim}`} />;
        })
      )}
    </div>
  );
}

export default function ScrollBuddy() {
  const [running, setRunning] = useState(false);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const [bubble, setBubble] = useState<string | null>(null);
  const buddyY = useRef(0);
  const runningRef = useRef(false);
  const directionRef = useRef<"up" | "down">("down");
  const elRef = useRef<HTMLDivElement>(null);
  const bubbleCooldown = useRef(0);
  const lastFrameTime = useRef(0);
  const scrolledSinceBubble = useRef(0);
  const lastScrollYForBubble = useRef(0);

  useEffect(() => {
    buddyY.current = window.scrollY + VIEWPORT_OFFSET;
    lastScrollYForBubble.current = window.scrollY;

    function onScroll() {
      const y = window.scrollY;
      scrolledSinceBubble.current += Math.abs(y - lastScrollYForBubble.current);
      lastScrollYForBubble.current = y;

      const now = performance.now();
      if (scrolledSinceBubble.current > 600 && now - bubbleCooldown.current > 2000) {
        bubbleCooldown.current = now;
        scrolledSinceBubble.current = 0;
        setBubble(messages[Math.floor(Math.random() * messages.length)]);
        setTimeout(() => setBubble(null), 1800);
      }
    }

    let frameId: number;
    function tick(time: number) {
      const dt = lastFrameTime.current ? time - lastFrameTime.current : 0;
      lastFrameTime.current = time;

      const target = window.scrollY + VIEWPORT_OFFSET;
      const diff = target - buddyY.current;
      const maxStep = PACE * dt;

      buddyY.current += Math.abs(diff) <= maxStep ? diff : Math.sign(diff) * maxStep;
      if (elRef.current) elRef.current.style.top = `${buddyY.current}px`;

      const isMoving = Math.abs(diff) > 2;
      if (isMoving !== runningRef.current) {
        runningRef.current = isMoving;
        setRunning(isMoving);
      }
      if (isMoving) {
        const dir = diff > 0 ? "down" : "up";
        if (dir !== directionRef.current) {
          directionRef.current = dir;
          setDirection(dir);
        }
      }

      frameId = requestAnimationFrame(tick);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    frameId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div ref={elRef} className="absolute left-6 z-40">
      <div className="relative w-9">
        {bubble && (
          <div className="absolute -top-10 left-0 bg-foreground text-background border-2 border-black rounded-md px-3 py-1.5 text-sm font-pixel shadow-[inset_0_2px_0_0_#cfdfe3,inset_0_-2px_0_0_#4b7581] whitespace-nowrap">
            {bubble}
          </div>
        )}
        <PixelSprite running={running} direction={direction} />
      </div>
    </div>
  );
}
