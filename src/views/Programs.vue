<template>
    <section id="programs">
        <h3>Academic Programs</h3>
        <div class="programs-column">
            <div class="programs-card">
                <div class="programs-img">
                    <img src="@/assets/itso.png" class="img">
                </div>
                <h3>Information Technology</h3>
                <div class="programs-info">
                    <p>The Information Technology (IT) Program is designed to bridge the gap between computer science and management 
                        information systems.
                    </p>
                    <button class="read">Read More</button>
                </div>
            </div>
            
            <div class="programs-card">
                <img src="@/assets/css.png" class="img">
                <h3>Computer Science</h3>
                <div class="programs-info">
                    <p>The Computer Science (CS) Program is designed for students who wants to study computing in depth, 
                        focusing in the software and hardware. 
                    </p>
                    <button class="read">Read More</button>
                </div>
            </div>

            <div class="programs-card">
                <img src="@/assets/midas.png" class="img">
                <h3>Digital Media and Interactive Arts</h3>
                <div class="programs-info">
                    <p>The Degree of Bachelor of Science in Digital Media and Interactive Arts (DMIA) is focused on creativity, applied arts and digital 
                        media technologies.
                    </p>
                    <button class="read">Read More</button>
                </div>
            </div>

            <div class="programs-card">
                <img src="@/assets/lisso.png" class="img">
                <h3>Libracy Information Science</h3>
                <div class="programs-info">
                    <p>The Degree of Bachelor of Library and Information Science (BLIS) is a four-year 
                        program that prepares students in the devleopment.
                    </p>
                    <button class="read">Read More</button>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
#programs {
    background-color: #f8f9fa;
    width: 100%;
    padding: 4rem 1.5rem;
    min-height: 50vh; 
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 50vh;
}
#programs > h3 {
    color: #2b1b5e;
    font-size: 1.8rem;
    letter-spacing: 0.05rem;
    margin: 0 0 2rem 0;
    text-transform: uppercase;
    position: relative;
}
.programs-column {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    align-items: stretch;
    width: 100%;
    box-sizing: border-box;
    flex-wrap: wrap;
}
.programs-card {
    flex: 1;
    min-width: 280px;
    border: 1px solid #e6e6ec;
    border-top: 4px solid #c8a100;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
    box-sizing: border-box;
    text-align: left;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.85rem;
    line-height: 1.5rem;
    width: 100%;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.programs-card h3 {
    color: #2b1b5e;
    font-size: 1.15rem;
    margin: 0 0 1rem 0;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #f0f0f0;
}
.programs-info {
    font-size: 0.8rem;
    line-height: 1.5;
    color: #4a5568;
}
.read {
    background-color: #4a5568;
    border: 0;
    padding: 10px;
    color: #ffffff;
    border-radius: 4px;
}

</style>