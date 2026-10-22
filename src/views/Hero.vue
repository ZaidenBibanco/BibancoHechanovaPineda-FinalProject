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
            <button class="explore">Explore Programs</button>
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
    background-color: #fff;
    color: #1A1919;
}
/** Left */
.ccs  {
    width: 450px;
}
.tagline {
    font-family: 'Playfair Display', serif;
    font-size: 50px;
    font-weight: 700;  
    color: #2E2D2D;
    line-height: 50px;
}
.description {
    font-family: 'Roboto', sans-serif;
    font-size: large;
    max-width: 500px;
    line-height: 1.6;
    margin: 0 auto;
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
    margin-left: 150px;
    margin-top: -30px;
}
.shapes {
    position: relative;
    width: 400px;
    height: 400px;
}
.front-square {
    position: relative;
    z-index: 2;
    width: 400px;
    height: 400px;
    background-color: #ffff;
    border: 1px ridge;
    border-radius: 10px;
}
.bg-square {
    position: absolute;
    width: 400px;
    height: 400px;
    background-color: #2E7D32;
    border-radius: 10px;
    bottom: 25px;
    left: 25px;
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
</style>