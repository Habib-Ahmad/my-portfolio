import React, { Component } from 'react'
import Particles from "react-tsparticles";

export default class Particle extends Component {
    render() {
        return (
            <Particles
                id="tsparticles"
                options={{
                background: {
                    color: {
                    value: "#151617",
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    detectsOn: "window",
                    events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                    },
                    modes: {
                    bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 20,
                    },
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4,
                    },
                    },
                },
                particles: {
                    color: {
                    value: "#fff",
                    },
                    links: {
                    color: "#fff",
                    distance: 150,
                    enable: true,
                    opacity: 0.1,
                    width: 1,
                    },
                    collisions: {
                    enable: true,
                    },
                    move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 6,
                    straight: false,
                    },
                    number: {
                    density: {
                        enable: true,
                        value_area: 500,
                    },
                    value: 100,
                    },
                    opacity: {
                    value: 0.1,
                    },
                    shape: {
                    type: "circle",
                    },
                    size: {
                    random: true,
                    value: 0,
                    },
                },
                detectRetina: true,
                }}
            />
        )
    }
}
