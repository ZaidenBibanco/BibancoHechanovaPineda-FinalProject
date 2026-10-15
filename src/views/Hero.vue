<template>
    <section id="hero">
        <div class="left">
            <h1>Home of the Dauntless and the Brave</h1>
            <p class="description">The College of Computer Studies (CCS) at Central Philippine University provides quality education in 
                Information Technology (IT), Computer Science (CS), Digital Media and Interactive Arts (DMIA), 
                and Library and Information Science (BLIS). It prepares students to become skilled professionals by fostering 
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
    background-image: url('@/assets/church.jpeg');
}
.ccs  {
    width: 350px;
}
.explore {
    border: 0;
    border-radius: 4px;
    padding: 10px;
}
.description {
    max-width: 500px;
    line-height: 1.6;
    margin: 0 auto;
}
</style>