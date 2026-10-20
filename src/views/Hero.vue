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
            <img src="@/assets/ccs.png" class="ccs">
        </div>
    </section>
</template>

<style>
#hero {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #727272;
    background-position: center;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    padding: 10px;
}
.ccs  {
    width: 450px;
}
.explore {
    border: 0;
    border-radius: 4px;
    padding: 10px;
    cursor: pointer;
    margin-top: 10px;
    color: #fff;
    background-color: #2E7D32;
}
.tagline {
    font-family: 'Playfair Display', serif;
    font-size: 50px;
    font-weight: 700;
    color: #fff;    
    line-height: 50px;
}
.description {
    font-family: 'Roboto', sans-serif;
    max-width: 500px;
    line-height: 1.6;
    margin: 0 auto;
    color: #fff;
    padding-left: 10px;
}
</style>