import { useFrame, useThree } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";

export default function Flag() {
    const { size } = useThree();

    const uniforms = useMemo(
        () => ({
            u_time: { value: 0 },
            u_resolution: { value: size },
            u_texture: { type: "t", value: new THREE.TextureLoader().load("/images/ffa_flag.png") },
        }),
        []
    );

    useFrame(() => {
        uniforms.u_time.value += 0.05;
    });

    return (
        <mesh scale={1.25}>
            <planeBufferGeometry attach="geometry" args={[6, 4, 18, 12]} />
            <shaderMaterial
                uniforms={uniforms}
                fragmentShader={`
                    uniform sampler2D u_texture;
                    uniform vec2 u_resolution;
                    varying vec2 vUv;
                    
                    void main() {
                        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
                        vec3 color = texture2D(u_texture, vUv).rgb;
                        gl_FragColor = vec4(color, 1.0);
                    }
                `}
                vertexShader={`
                    uniform float u_time;
                    varying vec2 vUv;

                    void main() {
                        vec3 pos = position;
                        pos.z = 0.15 * sin(1.2 * pos.x + u_time) - 0.05 * sin(pos.y + u_time);
                        vec4 modelViewPosition = modelViewMatrix * vec4(pos, 1.0);
                        vUv = uv;
                        gl_Position = projectionMatrix * modelViewPosition; 
                    }
                `}
            />
        </mesh>
    );
}
