import {useRef} from "react";
import {useFrame} from "@react-three/fiber";
import { easing } from "maath";

const PointerCamera = ({children, isMobile}) => {
    const groupRef = useRef();



    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta)
        const zoom = 1 + (-state.pointer.y * 0.1);

        if(!isMobile){
            easing.dampE(groupRef.current.rotation, [-state.pointer.y / 9 , -state.pointer.x / 5, 0],
                0.25, delta)
            easing.damp3(
                groupRef.current.scale,
                [zoom, zoom, zoom],
                0.25,
                delta
            );
        }
    })



    return (
        <group ref={groupRef} scale={1}>{children}</group>
    )
}
export default PointerCamera
