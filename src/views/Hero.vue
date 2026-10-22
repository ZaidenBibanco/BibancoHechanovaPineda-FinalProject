<template>
    <section id="hero">
        <div class="left">
            <h1 class="tagline">Home of the Dauntless <br> and the Brave</h1>
            <p class="description">The College of Computer Studies (CCS) at Central Philippine University provides quality education in 
                Information Technology (IT), Computer Science (CS), Digital Media and Interactive Arts (DMIA), 
                and Library and Information Science (BLIS). 
            </p>
            <br>
            <p class="description">
                It prepares students to become skilled professionals by fostering 
                technological innovation, digital creativity, critical thinking, and 
                effective information management.
            </p>
            <button class="explore"><router-link to="/#programs" active-class="active">Explore Programs</router-link></button>
        </div>
        <div class="right">
            <div class="shapes">
                <div class="bg-square"></div>
                <div class="front-square">
                    <div class="details">
                        <img src="@/assets/ccs.png" class="ccs" alt="CCS Logo">
                        <h1>College of <br> Computer Studies</h1>
                        <div class="line"></div>
                        <h4><i>"CCS THE BEST"</i></h4>
                    </div>
            </div>
            </div>
        </div>
    </section>
</template>

<style>
#hero {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
    background-color: #fff;
    color: #1A1919;
    padding: 80px 6%;
    box-sizing: border-box;
}
/** Left */
.left {
    flex: 1;
    min-width: 0;
    max-width: 600px;
}
.ccs  {
    width: 450px;
}
.tagline {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 3.5vw, 3.125rem);
    font-weight: 700;
    color: #2E2D2D;
    line-height: 1.1;
}
.description {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    max-width: 500px;
    line-height: 1.6;
    margin: 0;
    padding-left: 10px;
}
.explore {
    border: 0;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    margin-top: 20px;
    background-color: #2E7D32;

    color: #fff;
    font-style: 'Montserrat',serif;
    font-size: 1.3rem;
    font-weight: bold;
}

/** Right */
.right {
    flex: 0 1 400px;
    min-width: 0;
    margin: 0;
}
.shapes {
    position: relative;
    width: 100%;
    max-width: 400px;
    aspect-ratio: 1;
}
.front-square {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px ridge;
    border-radius: 10px;
}
.bg-square {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #2E7D32;
    border-radius: 10px;
    bottom: 20px;
    left: 20px;
    z-index: 1;
}
.ccs {
    width: 250px;
    margin: 20px 75px;
}
.line {
    width: 70px;
    height: 5px;
    background-color: #2E7D32;
    justify-self: center;
    margin-top: 30px;
}
.details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 15px;
    box-sizing: border-box;
}
.details .ccs {
    width: 65%;
    max-width: 250px;
    margin: 10px auto 15px;
}
.details h1 {
    color: #2E2D2D;
    margin-top:-5px;
    text-align: center;
    font-size: 2rem;
    font-family: "Playfair Display", sans-serif;
}
.details h4 {
    color: #2E7D32;
    text-align: center;
    font-size: 1.5rem;
    font-family: "Montserrat", sans-serif;
}
#hero a {
    text-decoration: none;
    color: #fff;
}

/* Tablet layout */
@media (max-width: 1024px) {
    #hero {
        gap: 35px;
        padding: 60px 5%;
    }

    .tagline {
        font-size: 2.5rem;
        line-height: 1.15;
    }

    .description {
        font-size: 0.95rem;
    }

    .right {
        flex-basis: 320px;
    }

    .ccs {
        width: 65%;
        display: block;
        margin: 20px auto;
    }

    .details h1 {
        font-size: 1.6rem;
    }

    .details h4 {
        font-size: 1.2rem;
    }
}

/* Phone layout */
@media (max-width: 600px) {
    #hero {
        flex-direction: column;
        align-items: stretch;
        gap: 50px;
        padding: 45px 7% 60px;
    }

    .left {
        width: 100%;
    }

    .tagline {
        font-size: clamp(2rem, 8vw, 2.5rem);
        line-height: 1.15;
        margin-top: 0;
    }

    .description {
        font-size: 0.95rem;
        padding-left: 0;
        margin-bottom: 16px;
    }

    .explore {
        font-size: 1rem;
        padding: 12px 18px;
        margin-top: 5px;
    }

    .right {
        width: 85%;
        max-width: 320px;
        flex: none;
        align-self: center;
    }

    .shapes {
        width: 100%;
    }

    .bg-square {
        bottom: 12px;
        left: 12px;
    }

    .ccs {
        width: 65%;
        margin: 10px auto 15px;
    }

    .details h1 {
        font-size: clamp(1.2rem, 5vw, 1.6rem);
        margin-top: 0;
    }

    .line {
        width: 50px;
        height: 4px;
        margin-top: 20px;
    }

    .details h4 {
        font-size: 1rem;
        margin-top: 15px;
    }
}

/* Very small phones */
@media (max-width: 380px) {
    #hero {
        padding-left: 6%;
        padding-right: 6%;
    }

    .tagline {
        font-size: 1.9rem;
    }

    .right {
        width: 82%;
    }
}
</style>