<template>
    <section id="dmia">
        <div class="dmia-top">
            <div class="dmia-heading">
                <h1>Digital Media and Interactive Arts (DMIA)</h1>
                <p>Where creativity meets technology and imagination.</p>
            </div>
        </div>

        <div class="dmia-content">
            <div class="dmia-card">
                <h2>Program Overview</h2>
                <p>
                    Digital Media and Interactive Arts focuses on digital
                    creativity, multimedia production, visual design,
                    and interactive digital experiences.
                </p>
            </div>

            <div class="dmia-card">
                <h2>What You Will Learn</h2>
                <ul>
                    <li>Graphic and Visual Design</li>
                    <li>Digital Illustration</li>
                    <li>Animation and Multimedia</li>
                    <li>Interactive Media Design</li>
                    <li>Digital Content Creation</li>
                </ul>
            </div>

            <div class="dmia-card">
                <h2>Career Opportunities</h2>
                <h3>DMIA graduates may pursue careers such as:</h3>
                <ul class="career-list">
                    <li>Graphic Designer</li>
                    <li>Multimedia Artist</li>
                    <li>Animator</li>
                    <li>UI/UX Designer</li>
                    <li>Digital Content Creator</li>
                </ul>
                <p>
                    Specific positions may require additional qualifications,
                    professional experience, or a portfolio.
                </p>
            </div>

            <div class="DMIA-card">
                <h2>Why Choose DMIA?</h2>
                <p>
                    DMIA is a good choice for students who enjoy art,
                    design, storytelling, multimedia, and using technology
                    to express their creativity.
                </p>
            </div>

            <div class="DMIA-card">
                <h2>Who Should Enroll?</h2>
                <p>
                    This program may suit students who are interested in
                    visual arts, digital design, animation, and creating
                    engaging digital experiences.
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped>

#dmia,
#dmia *,
#dmia *::before,
#dmia *::after {
    box-sizing: border-box;
}

#dmia {
    background-color: white;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
}

/* FIX: grid layout with centered cards and gaps between them */
#dmia .dmia-content {
    display: grid;
    grid-template-columns: minmax(0, 1fr); 
    justify-items: center;                
    gap: 30px;
}

#dmia h1 {
    font-family: "Montserrat", sans-serif;
}

#dmia p,
#dmia li {
    font-family: "Roboto";
}

.dmia-top {
    background-color: rgb(255, 246, 214);
    padding: 40px;
    border: 2px solid rgb(245, 218, 135);
    border-left: 10px solid #c99a00;
}

.dmia-content {
    background-color: white;
    padding: 40px;
    max-width: 800px;
    margin: 0 auto;
}

.dmia-heading h1 {
    color: black;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.dmia-heading p {
    color: black;
}

.dmia-card {
    box-sizing: border-box;
    background: white;
    width: 100%;
    margin-bottom: 30px;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #c99a00;
    border-top: 4px solid #c99a00;
    box-shadow: 0 2px 8px black;
    transition: transform 0.3s, box-shadow 0.3s;
}

.dmia-card li::marker {
    color: #c99a00;
    font-size: 1.5em;
}

.DMIA-card {
    box-sizing: border-box;
    background: rgb(255, 246, 214);
    width: 100%;
    margin-bottom: 30px;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #c99a00;
    border-left: 4px solid #c99a00;
    box-shadow: 0 2px 8px black;
    transition: transform 0.3s, box-shadow 0.3s;
}


#dmia .dmia-card,
#dmia .DMIA-card {
    min-width: 0;
    margin: 0 auto;
}

.DMIA-card h2 {
    text-align: left;
}

.dmia-card h2 {
    color: black;
    text-align: center;
}

.dmia-card h3 {
    color: #a47d00;
    text-align: left;
}

.career-list::after {
    content: "";
    display: block;
    width: 100%;
    max-width: 500px;
    height: 4px;
    background-color: #c99a00;
    margin: 12px auto 0;
}

.career-list,
.dmia-card ul {
    color: black;
    text-align: left;
    font-size: larger;
}

.dmia-card p,
.DMIA-card p {
    font-size: larger;
}


@media (max-width: 900px) {
    #dmia .dmia-content {
        grid-template-columns: 1fr;
        justify-items: center;
    }

    #dmia .dmia-card,
    #dmia .DMIA-card {
        max-width: 700px;
    }
}

@media (max-width: 600px) {
    #dmia .dmia-content {
        padding: 24px 16px;
    }
}
</style>