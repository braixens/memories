import { useEffect, useState} from "react";

import Particles, {initParticlesEngine} from "@tsparticles/react";

import { loadFull } from "tsparticles";

import "../index.css"

import options from "../components/options.json"

import * as React from "react";


function IParticles() {

    const [init, setInit] = useState(false);


    useEffect(() => {

        if (init) {

            return;

        }


        initParticlesEngine(async (engine) => {

            await loadFull(engine);

        }).then(() => {

            setInit(true);

        });

    }, [init]);


    return (

        <div className="absolute Particles h-full z-50">

            {init && <Particles options={options}/>}

        </div>

    );

}


export default React.memo(IParticles);