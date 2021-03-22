(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{25:function(e,t,r){e.exports=r(36)},35:function(e,t,r){},36:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r(17),o=r(10),i=r.n(o),c=r(8),l=r.n(c),s=r(1),u=r.n(s),f=r(3),m=r(0),v={sections:3,pages:3,zoom:75,images:["/photo-1548191265-cc70d3d45ba1.jpeg","/photo-1519608487953-e999c86e7455.jpeg","/photo-1533577116850-9cc66cad8a9b.jpeg"],diamonds:[{x:0,offset:.1,pos:new m.Vector3,factor:1.25},{x:0,offset:1.1,pos:new m.Vector3,factor:1.5},{x:0,offset:2.1,pos:new m.Vector3,factor:.75}],top:Object(s.createRef)()},d=Object(s.createContext)(0);function h(e){var t=e.children,r=e.offset,n=e.factor,o=Object(a.a)(e,["children","offset","factor"]),i=p(),c=i.offset,m=i.sectionHeight,h=Object(s.useRef)();return r=void 0!==r?r:c,Object(f.d)((function(){var e=h.current.position.y,t=v.top.current;h.current.position.y=l()(e,t/v.zoom*n,.1)})),u.a.createElement(d.Provider,{value:r},u.a.createElement("group",Object.assign({},o,{position:[0,-m*r*n,0]}),u.a.createElement("group",{ref:h},t)))}function p(){var e=v.sections,t=v.pages,r=v.zoom,n=Object(f.f)(),a=n.size,o=n.viewport,i=Object(s.useContext)(d),c=o.width,l=o.height,u=c/r,m=l/r,h=a.width<700;return{viewport:o,offset:i,viewportWidth:c,viewportHeight:l,canvasWidth:u,canvasHeight:m,mobile:h,margin:u*(h?.2:.1),contentMaxWidth:u*(h?.8:.6),sectionHeight:m*((t-1)/(e-1)),offsetFactor:(i+1)/e}}var g=r(23),b=r(4),x=r(5),y=r(6),w=function(e){Object(x.a)(r,e);var t=Object(y.a)(r);function r(){return Object(b.a)(this,r),t.call(this,{vertexShader:"varying vec3 worldNormal;\n      void main() {\n        vec4 transformedNormal = vec4(normal, 0.);\n        vec4 transformedPosition = vec4(position, 1.0);\n        #ifdef USE_INSTANCING\n          transformedNormal = instanceMatrix * transformedNormal;\n          transformedPosition = instanceMatrix * transformedPosition;\n        #endif\n        worldNormal = normalize(modelViewMatrix * transformedNormal).xyz;\n        gl_Position = projectionMatrix * modelViewMatrix * transformedPosition;\n      }",fragmentShader:"varying vec3 worldNormal;\n      void main() {\n        gl_FragColor = vec4(worldNormal, 1.0);\n      }",side:m.BackSide})}return r}(m.ShaderMaterial),E=function(e){Object(x.a)(r,e);var t=Object(y.a)(r);function r(e){return Object(b.a)(this,r),t.call(this,{vertexShader:"varying vec3 worldNormal;\n      varying vec3 viewDirection;\n      void main() {\n        vec4 transformedNormal = vec4(normal, 0.);\n        vec4 transformedPosition = vec4(position, 1.0);\n        #ifdef USE_INSTANCING\n          transformedNormal = instanceMatrix * transformedNormal;\n          transformedPosition = instanceMatrix * transformedPosition;\n        #endif\n        worldNormal = normalize( modelViewMatrix * transformedNormal).xyz;\n        viewDirection = normalize((modelMatrix * vec4( position, 1.0)).xyz - cameraPosition);;\n        gl_Position = projectionMatrix * modelViewMatrix * transformedPosition;\n      }",fragmentShader:"uniform sampler2D envMap;\n      uniform sampler2D backfaceMap;\n      uniform vec2 resolution;\n      varying vec3 worldNormal;\n      varying vec3 viewDirection;\n      float fresnelFunc(vec3 viewDirection, vec3 worldNormal) {\n        return pow(1.05 + dot(viewDirection, worldNormal), 100.0);\n      }\n      void main() {\n        vec2 uv = gl_FragCoord.xy / resolution;\n        vec3 normal = worldNormal * (1.0 - 0.7) - texture2D(backfaceMap, uv).rgb * 0.7;\n        vec4 color = texture2D(envMap, uv += refract(viewDirection, normal, 1.0/1.5).xy);\n        //gl_FragColor = vec4(mix(color.rgb, vec3(0.15), fresnelFunc(viewDirection, normal)), 1.0);\n        gl_FragColor = vec4(mix(color.rgb, vec3(0.4), fresnelFunc(viewDirection, normal)), 1.0);\n      }",uniforms:{envMap:{value:e.envMap},backfaceMap:{value:e.backfaceMap},resolution:{value:e.resolution}}})}return r}(m.ShaderMaterial),j=new m.Object3D;function M(){var e=Object(f.e)(g.a,"/diamond.glb");Object(s.useMemo)((function(){return e.scene.children[0].geometry.center()}),[]);var t=Object(f.f)(),r=t.size,a=t.gl,o=t.scene,i=t.camera,c=t.clock,d=p(),h=d.contentMaxWidth,b=d.sectionHeight,x=Object(s.useRef)(),y=a.getPixelRatio(),M=Object(s.useMemo)((function(){var e=new m.WebGLRenderTarget(r.width*y,r.height*y),t=new m.WebGLRenderTarget(r.width*y,r.height*y);return[e,t,new w,new E({envMap:e.texture,backfaceMap:t.texture,resolution:[r.width*y,r.height*y]})]}),[r,y]),O=Object(n.a)(M,4),N=O[0],D=O[1],k=O[2],S=O[3];return Object(f.d)((function(){v.diamonds.forEach((function(e,t){var r=c.getElapsedTime()/2,n=e.x,a=e.offset,o=e.factor;e.pos.set(n,l()(e.pos.y,-b*a*o+v.top.current/v.zoom*o,.1),0),j.position.copy(e.pos),j.rotation.set(r,r,r),j.scale.set(h/30,h/30,h/30),j.updateMatrix(),x.current.setMatrixAt(t,j.matrix),x.current.instanceMatrix.needsUpdate=!0})),a.autoClear=!1,i.layers.set(0),a.setRenderTarget(N),a.clearColor(),a.render(o,i),a.clearDepth(),i.layers.set(1),x.current.material=k,a.setRenderTarget(D),a.clearDepth(),a.render(o,i),i.layers.set(0),a.setRenderTarget(null),a.render(o,i),a.clearDepth(),i.layers.set(1),x.current.material=S,a.render(o,i)}),1),u.a.createElement("instancedMesh",{ref:x,layers:1,args:[null,null,v.diamonds.length],position:[0,0,50]},u.a.createElement("bufferGeometry",Object.assign({attach:"geometry"},e.__$[1].geometry)))}var O=r(24),N=function(e){Object(x.a)(r,e);var t=Object(y.a)(r);function r(){return Object(b.a)(this,r),t.call(this,{vertexShader:"uniform float scale;\n      uniform float shift;\n      varying vec2 vUv;\n      void main() {\n        vec3 pos = position;\n        pos.y = pos.y + ((sin(uv.x * 3.1415926535897932384626433832795) * shift * 5.0) * 0.125);\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);\n      }",fragmentShader:"uniform sampler2D texture;\n      uniform float hasTexture;\n      uniform float shift;\n      uniform float scale;\n      uniform vec3 color;\n      uniform float opacity;\n      varying vec2 vUv;\n      void main() {\n        float angle = 1.55;\n        vec2 p = (vUv - vec2(0.5, 0.5)) * (1.0 - scale) + vec2(0.5, 0.5);\n        vec2 offset = shift / 4.0 * vec2(cos(angle), sin(angle));\n        vec4 cr = texture2D(texture, p + offset);\n        vec4 cga = texture2D(texture, p);\n        vec4 cb = texture2D(texture, p - offset);\n        if (hasTexture == 1.0) gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);\n        else gl_FragColor = vec4(color, opacity);\n      }",uniforms:{texture:{value:null},hasTexture:{value:0},scale:{value:0},shift:{value:0},opacity:{value:1},color:{value:new m.Color("white")}}})}return Object(O.a)(r,[{key:"scale",get:function(){return this.uniforms.scale.value},set:function(e){this.uniforms.scale.value=e}},{key:"shift",get:function(){return this.uniforms.shift.value},set:function(e){this.uniforms.shift.value=e}},{key:"map",get:function(){return this.uniforms.texture.value},set:function(e){this.uniforms.hasTexture.value=!!e,this.uniforms.texture.value=e}},{key:"color",get:function(){return this.uniforms.color.value}},{key:"opacity",get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms&&(this.uniforms.opacity.value=e)}}]),r}(m.ShaderMaterial);Object(f.c)({CustomMaterial:N});r(35);function D(e){var t=e.color,r=void 0===t?"white":t,n=e.map,o=Object(a.a)(e,["color","map"]),i=p(),c=i.viewportHeight,m=i.offsetFactor,d=Object(s.useRef)(),h=v.top.current;return Object(f.d)((function(){var e=v.pages,t=v.top;d.current.scale=l()(d.current.scale,m-t.current/((e-1)*c),.1),d.current.shift=l()(d.current.shift,(t.current-h)/150,.1),h=t.current})),u.a.createElement("mesh",o,u.a.createElement("planeBufferGeometry",{attach:"geometry",args:[1,1,32,32]}),u.a.createElement("customMaterial",{ref:d,attach:"material",color:r,map:n}))}function k(e){var t=e.left,r=e.children,n=e.map,a=p(),o=a.contentMaxWidth,i=(a.canvasWidth-o-a.margin)/2;return u.a.createElement("group",{position:[i*(t?-1:1),0,0]},u.a.createElement(D,{scale:[o,o/1.75,1],color:"#bfe2ca",map:n}),r)}function S(){var e=p().contentMaxWidth;return u.a.createElement(D,{scale:[100,e,1],rotation:[0,0,Math.PI/4],position:[0,0,-1],color:"#171725"})}function z(){var e=Object(f.e)(m.TextureLoader,v.images).map((function(e){return e.minFilter=m.LinearFilter,e})),t=Object(n.a)(e,3),r=t[0],a=t[1],o=t[2],i=p(),c=i.contentMaxWidth,l=i.mobile,s=c*v.zoom;return u.a.createElement(u.a.Fragment,null,u.a.createElement(h,{factor:1.5,offset:0},u.a.createElement(k,{left:!0,map:r},u.a.createElement(f.b,{style:{width:s/(l?1:2),textAlign:"left"},position:[-c/2,-c/2/1.75-.4,1]},"The substance can take you to heaven but it can also take you to hell."))),u.a.createElement(h,{factor:2,offset:1},u.a.createElement(k,{map:a},u.a.createElement(f.b,{style:{width:s/(l?1:2),textAlign:"right"},position:[l?-c/2:0,-c/2/1.75-.4,1]},"We\u2019ve found that the people whose EEG doesn\u2019t show any alpha-wave activity when they\u2019re relaxed aren\u2019t likely to respond significantly to the substance."))),u.a.createElement(h,{factor:-1,offset:1},u.a.createElement(S,null)),u.a.createElement(h,{factor:1.5,offset:2},u.a.createElement(k,{left:!0,map:o},u.a.createElement(f.b,{style:{width:s/(l?1:2),textAlign:"left"},position:[-c/2,-c/2/1.75-.4,1]},"Education and enlightenment."))))}function F(){var e=Object(s.useRef)();return Object(f.d)((function(){return e.current.material.opacity=l()(e.current.material.opacity,0,.025)})),u.a.createElement("mesh",{ref:e,position:[0,0,200],scale:[100,100,1]},u.a.createElement("planeBufferGeometry",{attach:"geometry"}),u.a.createElement("meshBasicMaterial",{attach:"material",color:"#070712",transparent:!0}))}function P(){var e=Object(s.useRef)(),t=function(e){return v.top.current=e.target.scrollTop};return Object(s.useEffect)((function(){t({target:e.current})}),[]),u.a.createElement(u.a.Fragment,null,u.a.createElement(f.a,{orthographic:!0,camera:{zoom:v.zoom,position:[0,0,500]}},u.a.createElement(s.Suspense,{fallback:u.a.createElement(f.b,{center:!0,className:"loading",children:"Loading..."})},u.a.createElement(z,null),u.a.createElement(M,null),u.a.createElement(F,null))),u.a.createElement("div",{className:"scrollArea",ref:e,onScroll:t},u.a.createElement("div",{style:{height:"".concat(100*v.pages,"vh")}})))}i.a.render(u.a.createElement(P,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.5faaca17.chunk.js.map