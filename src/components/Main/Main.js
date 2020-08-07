import React from 'react';
import { Container } from 'reactstrap';
import './Main.css'

function Main() {
    return (
        <section id="main-section">
            <Container id="main-landing" className="text-center d-flex align-items-center">
                <Container className="home-wrapper">
                    <h1>ESTHER MIN</h1>
                    <h2 id="tagline">Full Stack Web Developer</h2>
                </Container>
            </Container>
        </section>
    )
}

export default Main;