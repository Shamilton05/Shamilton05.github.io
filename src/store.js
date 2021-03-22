import { createRef } from "react"
import { Euler, Vector3 } from "three"

const state = {
  sections: 8,
  pages: 7,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 1,
      header: "dream",
      image: "/house.png",
      aspect: 1,
      
    },
    {
      offset: 2,
      factor: 1,
      header: "opportunity",
      image: "/Light.png",
      aspect: 1,
      
    },
    {
      offset: 3,
      factor: 1,
      header: "prise",
      image: "/Flowers.png",
      aspect: 1,
      
    },
    {
      offset: 4,
      factor: 1,
      header: "fixate",
      image: "/trees.png",
      aspect: 1,
      
    },
    {
      offset: 5,
      factor: 1,
      header: "flow",
      image: "/cup.png",
      aspect: 1,
      
    },
    { offset: 6, factor: 1.0, header: "escape", image: "/cabin.png", aspect: 1,  },
    { offset: 7, factor: 1.0, header: "origin", image: "/Run1.png", aspect: 1,  }
  ],
  stripes: [
    { offset: -0.50, color: "#fff7c7", height: 13 },
    { offset: 2.75, color: "#fff7c7", height: 13 },
    { offset: 6.05, color: "#fff7c7", height: 13 }
  ],
  diamonds: [
    { x: 2.5, offset: -0.05, pos: new Vector3(), scale: 0.6, factor: 1.8 },
    //{ x: -11, offset: 0.9, pos: new Vector3(), scale: 0.8, factor: 2.1 },
   // { x: 3, offset: 2, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    { x: -8, offset: 3.15, pos: new Vector3(), scale: 0.8, factor: 1.75 },
   // { x: 3, offset: 4, pos: new Vector3(), scale: 0.8, factor: 2.5 },
   // { x: -2, offset: 5.0, pos: new Vector3(), scale: 0.6, factor: 0.85 },
   // { x: 3, offset: 6, pos: new Vector3(), scale: 0.8, factor: 2 },
    { x: -6, offset: 7.15, pos: new Vector3(), scale: 0.4, factor: 2 }
  ],
  rectangles: [
    { x: -6.7, offset: 0.9, pos: new Vector3(), scale: 5.0, factor: 2.1 },
    { x: 3, offset: 2, pos: new Vector3(), scale: 3.8, factor: 2.5},
    { x: -8, offset: 3.15, pos: new Vector3(), scale: 3.8, factor: 1.75 },
    { x: 3, offset: 4, pos: new Vector3(), scale: 3.8, factor: 2.5 },
    { x: -2, offset: 5.0, pos: new Vector3(), scale: 3.6, factor: 0.85 },
    { x: 3, offset: 6, pos: new Vector3(), scale: 3.8, factor: 2 },
    { x: -6, offset: 7.15, pos: new Vector3(), scale: 3.4, factor: 2 }
  ],
  rendered: false,
  top: createRef()
}

export default state
