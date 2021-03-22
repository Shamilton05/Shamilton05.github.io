import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 3,
  pages: 3,
  zoom: 75,
  images: ["/photo-1548191265-cc70d3d45ba1.jpeg", "/photo-1519608487953-e999c86e7455.jpeg", "/photo-1533577116850-9cc66cad8a9b.jpeg"],
  diamonds: [
    { x: 0, offset: 0.1, pos: new Vector3(), factor: 1.25 },
    { x: 0, offset: 1.1, pos: new Vector3(), factor: 1.5 },
    { x: 0, offset: 2.1, pos: new Vector3(), factor: 0.75 }
  ],
  top: createRef()
}

export default state
