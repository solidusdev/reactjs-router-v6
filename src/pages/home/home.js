import React, { Component } from "react";
import Footer from "../../common-components/footer.js";
import StateButton from "./components/state-button.js";
import { clients } from "../../data/clients.js";
import RenderingClientLogos from "./components/render-client-logo.js";

class Home extends Component {

    render() {
        return(
            <main id="home">
                <section id="clients">
                    <h1>Home</h1>
                    <h2>Clients we worked with in the past</h2>

                    <article>
                        {
                            clients.map((item, i) => (
                                <RenderingClientLogos src={item.src} alt={item.alt} key={i} />
                            ))
                        }
                    </article>
                </section>
                <section id="interaction">
                        <h1>Welcome to the button interaction</h1>
                        <StateButton />
                </section>
                <Footer />
            </main>
        )
    }
}

export default Home;