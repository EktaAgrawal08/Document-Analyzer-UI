"use client"

import Lottie from "lottie-react"

export function DocumentScannerAnimation() {
  // Minimalist document scanning animation data
  const animationData = {
    v: "5.7.0",
    meta: { g: "getbem.com", a: "", tc: "" },
    fr: 60,
    ip: 0,
    op: 180,
    w: 200,
    h: 200,
    nm: "Document Scan",
    ddd: 0,
    assets: [],
    layers: [
      // Background document shape
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Document",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [100, 100, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "rc",
                d: 1,
                s: { a: 0, k: [60, 80] },
                p: { a: 0, k: [0, 0] },
                r: { a: 0, k: 4 },
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.067, 0.557, 0.635, 1] },
              },
            ],
            nm: "Rectangle",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
          },
        ],
      },
      // Scanning line animation
      {
        ddd: 0,
        ind: 2,
        ty: 4,
        nm: "Scan Line",
        sr: 1,
        ks: {
          o: { a: 0, k: 60 },
          r: { a: 0, k: 0 },
          p: {
            a: [
              {
                i: { x: 0.667, y: 1 },
                o: { x: 0.333, y: 0 },
                t: 0,
                s: [100, 40, 0],
                to: [0, 20, 0],
                ti: [0, -20, 0],
              },
              {
                i: { x: 0.667, y: 1 },
                o: { x: 0.333, y: 0 },
                t: 90,
                s: [100, 140, 0],
                to: [0, 0, 0],
                ti: [0, 0, 0],
              },
              {
                t: 180,
                s: [100, 40, 0],
              },
            ],
          },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "rc",
                d: 1,
                s: { a: 0, k: [60, 2] },
                p: { a: 0, k: [0, 0] },
                r: { a: 0, k: 0 },
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.067, 0.925, 1, 1] },
              },
              {
                ty: "gp",
                o: {
                  a: [
                    {
                      i: { x: [0.667], y: [1] },
                      o: { x: [0.333], y: [0] },
                      t: 0,
                      s: [0],
                    },
                    {
                      i: { x: [0.667], y: [1] },
                      o: { x: [0.333], y: [0] },
                      t: 90,
                      s: [100],
                    },
                    {
                      t: 180,
                      s: [0],
                    },
                  ],
                },
              },
            ],
            nm: "Scan",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
          },
        ],
      },
      // AI waves
      {
        ddd: 0,
        ind: 3,
        ty: 4,
        nm: "AI Waves",
        sr: 1,
        ks: {
          o: { a: 0, k: 80 },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [100, 160, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "el",
                d: 1,
                s: { a: 0, k: [4, 4] },
                p: { a: 0, k: [0, 0] },
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.067, 0.925, 1, 1] },
              },
            ],
            nm: "Dot",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
          },
        ],
      },
    ],
  }

  return (
    <div className="flex items-center justify-center w-full h-full">
      <Lottie animationData={animationData} loop autoPlay />
    </div>
  )
}
