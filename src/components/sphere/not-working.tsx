"use client";
import { SyntheticEvent, useEffect, useRef } from "react";

const CENTER_COUNT = 12;
const RADIUS = 600;
const TOTAL_ROW = 3;

const PhotoSphere = (props: { imageData: string[] }) => {
  const el = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  // Update animation
  const updateFrame = (mouseShift: number) => {
    const items = el.current!.children;
    if (items.length == 0) return;

    for (let i = 0; i < items.length; i++) {
      const item = items[i] as HTMLDivElement;
      if (item.style.backgroundImage === 'url("spring.svg")') {
        // debugger;
      }
      let angle = parseFloat(item.dataset.angle!);
      const ypos = parseFloat(item.dataset.ypos!);
      const radius = parseFloat(item.dataset.radius!);
      const prevXp = parseFloat(item.dataset.xp!);
      const prevZp = parseFloat(item.dataset.zp!);
      const percentage = (mouseShift * 100) / RADIUS;
      const newMouseShift = radius * (percentage / 100);
      let diff;
      if (prevZp > 0) {
        diff = prevXp - newMouseShift;
      } else {
        diff = prevXp + newMouseShift;
      }
      let changeZSign = false;
      let newXp;
      if (Math.abs(diff) < radius) {
        newXp = diff;
      } else {
        changeZSign = true;
        if (diff > 0) {
          newXp = radius - (diff % radius);
        } else {
          newXp = -radius + (Math.abs(diff) % radius);
        }
      }
      let newAngle = Math.asin(newXp / radius);
      [
        'url("node.svg")',
        'url("typescript.svg")',
        'url("git-hub.svg")',
      ].includes(item.style.backgroundImage) &&
        console.log("(prevXp - mouseShift) % radius", diff % radius);
      // while (newAngle < 0) {
      //   newAngle += 2 * Math.PI;
      // }
      // while (newAngle > 2 * Math.PI) {
      //   newAngle -= 2 * Math.PI;
      // }
      let newZp = Math.cos(newAngle) * radius;
      if (prevZp < 0) {
        newZp = -newZp;
      }
      if (changeZSign) {
        newZp = -newZp;
      }
      [
        'url("node.svg")',
        'url("typescript.svg")',
        'url("git-hub.svg")',
      ].includes(item.style.backgroundImage) &&
        console.log("newAngle", {
          newAngle,
          mouseShift: newMouseShift,
          radius,
          prevXp,
          newXp,
          newZp,
          prevZp,
          asd: diff,
          changeZSign,
          i,
        });
      // if ([0, 30].includes(i)) {
      //   // prevXp = Math.cos(angleRad) * radius;
      //   const supposedAngle = Math.asin(prevXp / radius);
      //   const alpha = 0;
      //   const beta = 0;
      //   // console.log("log!", {
      //   //   i,
      //   //   gamma,
      //   //   beta,
      //   //   beta2,
      //   // });
      //   console.log("log!", {
      //     i,
      //     prevXp,
      //     mouseShift,
      //     angle,
      //     supposedAngle,
      //     supposedAngle2: Math.acos(prevZp / radius),
      //     newXp,
      //     newAngle,
      //   });
      // }
      // angle += mouseShift;
      item.dataset.angle = newAngle.toString();
      item.dataset.xp = newXp.toString();
      item.dataset.zp = newZp.toString();
      item.style.transform = `translateY(${ypos}px) translateX(${newXp}px) translateZ(${newZp}px)`;
    }
  };

  useEffect(() => {
    // console.log(props.imageData);

    let listen = false;
    let starting = 0;
    let timeout: NodeJS.Timeout;
    let maxValueMoved = 0;

    const downListener = (e: MouseEvent) => {
      listen = true;
      starting = e.clientX;
    };
    const upListener = (e: MouseEvent) => {
      const moved = starting - e.clientX;
      console.log("moved", moved);
      const movedAbs = Math.abs(moved);
      if (listen && movedAbs > 5 && movedAbs < 500) {
        listen = false;
        if (Math.abs(moved) > maxValueMoved) {
          maxValueMoved = Math.abs(moved);
          console.log("maxValueMoved", maxValueMoved);
        }
        // timeout && clearTimeout(timeout);
        // timeout = setTimeout(() => {
        //   starting = e.clientX;
        // }, 50);
        // console.log("starting", {
        //   starting,
        //   clientX: e.clientX,
        //   move: e.movementX,
        //   page: e.pageX,
        //   containerWidth,
        // });
        console.log("1");
        updateFrame(starting - e.clientX);
      }
    };
    if (props.imageData) {
      const items = el.current!.children;
      if (items.length == 0) return;

      // Setup and distribute items in correct positions
      const angleDivision = ((90 / TOTAL_ROW) * Math.PI) / 180;
      // const angleDivision = 0,523598775598299;
      let radius,
        ypos,
        rowItemsCount = CENTER_COUNT;
      let indexCount = 0;

      for (let k = 0; k < TOTAL_ROW; k++) {
        radius = RADIUS * Math.cos(k * angleDivision);
        ypos = RADIUS * Math.sin(-k * angleDivision);
        // console.log("log", {
        //   ypos,
        //   angleDivision,
        //   RADIUS,
        //   radius,
        //   k,
        //   sin: Math.sin(-k * angleDivision),
        // });
        rowItemsCount = CENTER_COUNT / (k + 1);

        let angleUnit = 360 / rowItemsCount;
        // console.log("k", {
        //   k,
        //   angle: k * (90 / TOTAL_ROW),
        //   rowItemsCount,
        //   angleUnit,
        // });

        for (let i = 0; i < rowItemsCount; i++) {
          let angleRad = (angleUnit * i * Math.PI) / 180;
          do {
            angleRad -= 2 * Math.PI;
          } while (angleRad > 2 * Math.PI);
          const xp = Math.sin(angleRad) * radius;
          const zp = Math.cos(angleRad) * radius;

          // Upper item
          const item = items[indexCount] as HTMLDivElement;
          if ([0, 1, 2, 3, 4, 5, 12, 7, 30].includes(indexCount)) {
            console.log("log prev", {
              i,
              angleUnit,
              xp,
              angleRad,
              radius,
              supposedAngle: Math.asin(xp / radius),
              supposedAngle2: Math.acos(zp / radius),
              zp,
              item: item.style.backgroundImage,
            });
          }
          // console.log("i", {
          //   i,
          //   angleDeg: angleUnit * i,
          //   item: item.style.backgroundImage,
          //   ypos: ypos === 0 ? ypos : -ypos,
          //   xp,
          //   zp,
          // });
          item.className = "photosphere-item";
          item.style.transform = `translateY(${ypos}px) translateX(${xp}px) translateZ(${zp}px)`;
          indexCount++;
          if ([0, 12, 7, 30].includes(indexCount)) {
            console.log("log prev", {
              i,
              angleUnit,
              xp,
              angleRad,
              radius,
              supposedAngle: Math.asin(xp / radius),
              supposedAngle2: Math.acos(zp / radius),
              zp,
              item: (items[indexCount] as HTMLDivElement).style.backgroundImage,
            });
          }
          // Save item data
          item.dataset.radius = radius.toString();
          item.dataset.angle = angleRad.toString();
          item.dataset.ypos = ypos.toString();
          item.dataset.xp = xp.toString();
          item.dataset.zp = zp.toString();

          if (k !== 0) {
            // Lower item
            const item2 = items[indexCount] as HTMLDivElement;
            // console.log("i", {
            //   i,
            //   angleDeg: angleUnit * i,
            //   item: item2.style.backgroundImage,
            //   ypos: ypos === 0 ? ypos : -ypos,
            //   xp,
            //   zp,
            // });
            item2.className = "photosphere-item";
            item2.style.transform = `translateY(${-ypos}px) translateX(${xp}px) translateZ(${zp}px)`;
            indexCount++;
            item2.dataset.radius = radius.toString();
            item2.dataset.angle = angleRad.toString();
            item2.dataset.ypos = (-ypos).toString();
            item2.dataset.xp = xp.toString();
            item2.dataset.zp = zp.toString();
          }
        }
      }

      // updateFrame(0);
      const moveListener = (e: MouseEvent) => {
        // const moved = starting - e.clientX;
        // const movedAbs = Math.abs(moved);
        // if (listen && movedAbs > 5 && movedAbs < 500) {
        //   if (Math.abs(moved) > maxValueMoved) {
        //     maxValueMoved = Math.abs(moved);
        //     console.log("maxValueMoved", maxValueMoved);
        //   }
        //   timeout && clearTimeout(timeout);
        //   timeout = setTimeout(() => {
        //     starting = e.clientX;
        //   }, 50);
        //   // console.log("starting", {
        //   //   starting,
        //   //   clientX: e.clientX,
        //   //   move: e.movementX,
        //   //   page: e.pageX,
        //   //   containerWidth,
        //   // });
        //   updateFrame(starting - e.clientX);
        // }
      };

      container.current?.addEventListener("mousedown", downListener);
      window.addEventListener("mousemove", moveListener, true);
      window.addEventListener("mouseup", upListener);
      window.addEventListener("resize", () => {
        if (el.current) {
          console.log(
            "el.current.style.transition",
            el.current.style.transition
          );
          el.current.style.transform = `translateZ(min(-${
            4000 - innerWidth * 2
          }px, -1200px))`;
          // el.current.style.height = `${innerWidth / 50}px`;
          console.log(
            "el.current.style.transition after",
            el.current.style.transition
          );
        }
      });

      // Calculate mouse shift
      // const onMouseMove = (e: MouseEvent) => {
      //   console.log("e.offsetX", e.offsetX);
      //   // console.log("e", e);
      //   // console.log("innerWidth", innerWidth);
      //   mouseShift = 0;
      // };
      // el.current?.addEventListener("drag", onMouseMove);
    }
    return () => {
      window.removeEventListener("mouseup", upListener);
      window.removeEventListener("mousedown", downListener);
    };
  }, [props.imageData]);

  return (
    <div className="container my-4" ref={container}>
      <div className="photosphere" ref={el}>
        {props.imageData.map((it, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${it})` }}
            className="photosphere-item"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PhotoSphere;
