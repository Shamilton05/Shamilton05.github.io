import ReactDOM from "react-dom"
import React, { Suspense, useEffect, useRef, useMemo } from "react"
import { Canvas, Dom, useLoader, useFrame, useThree } from "react-three-fiber"
import { TextureLoader, LinearFilter } from "three"

import lerp from "lerp"
import { Text, MultilineText } from "./components/Text"
import Diamonds from "./diamonds/Diamonds"
import Rectangles from "./diamonds/Glass"
import Plane from "./components/Plane"
import { Block, useBlock } from "./blocks"
import state from "./store"
import "./styles.css"

function Startup() {

  const ref = useRef()
  useFrame(() => (ref.current.material.opacity = lerp(ref.current.material.opacity, 0, 0.025)))
  return <Plane ref={ref} color="#f8f8f8" position={[0, 0, 200]} scale={[100, 100, 1]} />
}

function Paragraph({ image, index, offset, factor, header, aspect, text }) {
  const { contentMaxWidth: w, canvasWidth, margin, mobile } = useBlock()
  const {gl} = useThree()
  //const size = aspect < 1 && !mobile ? 0.6 : .7
  const size = 0.6
  const alignRight = (canvasWidth - w * size - margin) / 2
  const pixelWidth = w * state.zoom * size
  const left = !(index % 2)
  const color = index % 2 ? "#fff7c7" : "#b25253"
  useEffect(() => void gl.setPixelRatio(getDevicePixelRatio()*4), [])
  return (
    <Block factor={factor} offset={offset}>
      <group position={[0, 0, 0]}>
        <Plane map={image} args={[1, 1, 32, 32]} shift={50} size={size} aspect={aspect} scale={[w * size, (w * size) / aspect, 1]} frustumCulled={false} />
        <Dom
          style={{ width: pixelWidth / (mobile ? 1 : 2), textAlign: left ? "left" : "right" }}
          position={[left || mobile ? (-w * size) / 2 : 0, (-w * size) / 2 / aspect - 0.4, 1]}>
          <div tabIndex={index}>{text}</div>
        </Dom>
        <Text left={left} right={!left} size={w * 0.04} color={color} top position={[((left ? -w : w) * size) / 2, (w * size) / aspect / 2 + 0.5, -1]}>
          {header}
        </Text>
        <Block factor={0.2}>
          <Text opacity={0.5} size={w * 0.1} color="#ff7e30" position={[((left ? w : -w) / 2) * size, (w * size) / aspect / 1.5, -10]}>
            {"0" + (index + 1)}
          </Text>
        </Block>
      </group>
    </Block>
  )
}

function getDevicePixelRatio() {
  var mediaQuery;
  var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  if (window.devicePixelRatio !== undefined && !is_firefox) {
      return window.devicePixelRatio;
  } else if (window.matchMedia) {
      mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
        (min--moz-device-pixel-ratio: 1.5),\
        (-o-min-device-pixel-ratio: 3/2),\
        (min-resolution: 1.5dppx)";
      if (window.matchMedia(mediaQuery).matches) {
          return 1.5;
      }
      mediaQuery = "(-webkit-min-device-pixel-ratio: 2),\
        (min--moz-device-pixel-ratio: 2),\
        (-o-min-device-pixel-ratio: 2/1),\
        (min-resolution: 2dppx)";
      if (window.matchMedia(mediaQuery).matches) {
          return 2;
      }
      mediaQuery = "(-webkit-min-device-pixel-ratio: 0.75),\
        (min--moz-device-pixel-ratio: 0.75),\
        (-o-min-device-pixel-ratio: 3/4),\
        (min-resolution: 0.75dppx)";
      if (window.matchMedia(mediaQuery).matches) {
          return 0.7;
      }
  } else {
      return 1;
  }
}

function Content() {
  const images = useLoader(
    TextureLoader,
    state.paragraphs.map(({ image }) => image)
  )
  const {gl} = useThree()
  useEffect(() => void gl.setPixelRatio(getDevicePixelRatio()*4), [])
  useMemo(() => images.forEach(texture => (texture.minFilter = LinearFilter)), [images])
  const { contentMaxWidth: w, canvasWidth, canvasHeight, mobile } = useBlock()
  return (
    <>
      <Block factor={1} offset={0}>
        <Block factor={1.2}>
          <Text left size={w * 0.08} position={[-w / 3.2, 0.5, -1]} color="#b25253">
            Spencer
          </Text>
        </Block>
        <Block factor={1.0}>
          <Dom position={[-w / 3.2, -w * 0.08 + 0.25, -1]}>illustrator, front-end developer, {mobile ? <br /> : " "}mistake maker</Dom>
        </Block>
      </Block>
      
      {state.paragraphs.map((props, index) => (
        <Paragraph key={index} index={index} {...props} image={images[index]} />
      ))}
      {state.stripes.map(({ offset, color, height }, index) => (
        <Block key={index} factor={-1.5} offset={offset}>
          <Plane args={[50, height, 32, 32]} shift={-4} color={color} rotation={[0, 0, Math.PI / 8]} position={[0, 0, -10]} />
        </Block>
      ))}
    </>
  )
}

function Background() {
  // Calculates a plane filling the screen similar to background-size: cover
  const { contentMaxWidth: w, canvasWidth, canvasHeight, mobile } = useBlock()
  return (
    <mesh layers={0} scale={[canvasWidth, canvasHeight, 1]}>
      <planeBufferGeometry attach="geometry" />
      <meshBasicMaterial attach="material" color="#ffbf66" depthTest={false} />
    </mesh>
  )
}


function App() {
  const scrollArea = useRef()
  const onScroll = e => (state.top.current = e.target.scrollTop)
  useEffect(() => void onScroll({ target: scrollArea.current }), [])
  return (
    <>
      <Canvas className="canvas" concurrent pixelRatio={getDevicePixelRatio()*4} orthographic camera={{ zoom: state.zoom, position: [0, 0, 500] }}>
        <Suspense fallback={<Dom center className="loading" children="Loading..." />}>
          <Content />
          <Diamonds />
          <Rectangles />
          <Background/>
          
          <Startup />
        </Suspense>
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        {new Array(state.sections).fill().map((_, index) => (
          <div key={index} id={"0" + index} style={{ height: `${(state.pages / state.sections) * 100}vh` }} />
        ))}
      </div>
      <div className="frame">
        <h1 className="frame__title">spencer hamilton</h1>
        <div className="frame__links">
          <a className="frame__link" href="/resume">
            resume
          </a>
          <a className="frame__link" href="/projects">
            projects
          </a>
          <a className="frame__link" href="/illustrations">
            illustrations
          </a>
          <a className="frame__link" href="https://github.com/Shamilton05">
            github
          </a>
        </div>
        <div className="frame__nav">
          <a className="frame__link" href="#00" children="intro" />
          <a className="frame__link" href="#01" children="01" />
          <a className="frame__link" href="#02" children="02" />
          <a className="frame__link" href="#03" children="03" />
          <a className="frame__link" href="#04" children="04" />
          <a className="frame__link" href="#05" children="05" />
          <a className="frame__link" href="#06" children="06" />
          <a className="frame__link" href="#07" children="07" />

        </div>
      </div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
