import { useEffect, useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useMotionValue, useSpring } from "framer-motion";

const Cube = () => {

    const mesh = useRef(null);
    const texture_1 = useLoader(TextureLoader, "/assets/image1.jpeg");
    const texture_2 = useLoader(TextureLoader, "/assets/image2.jpeg");
    const texture_3 = useLoader(TextureLoader, "/assets/image3.jpeg");
    const texture_4 = useLoader(TextureLoader, "/assets/image4.jpeg");

    useFrame((state, delta) => {

        mesh.current.rotation.x += delta * 1;
        mesh.current.rotation.y += delta * 1;
        mesh.current.rotation.z += delta * 1;

        if (mesh.current) {
            mesh.current.rotation.y = mouse.x.get() * Math.PI;
            mesh.current.rotation.x = mouse.y.get() * Math.PI;
        }

    })

    const options = {
        damping: 20
    }


    const mouse = {

        x: useSpring(useMotionValue(0), options),
        y: useSpring(useMotionValue(0), options),
    }

    const manageMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        const { clientX, clientY } = e;
        const x = -0.5 + (clientX / innerWidth);
        const y = -0.5 + (clientY / innerHeight);
        mouse.x.set(x);
        mouse.y.set(y);

    }

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove);
        return () => window.removeEventListener("mouse", manageMouseMove);
    }, []);


    return (
        <>
            <mesh ref={mesh} rotation-y={mouse.y} rotation-x={mouse.x}
            >
                <boxGeometry args={[3, 3, 3]} />
                {/* <meshStandardMaterial color="royalblue" /> */}
                <meshStandardMaterial map={texture_1} />

            </mesh>
        </>
    )

}

export default Cube;