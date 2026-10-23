<template>
    <section id="cs">
        <div class="cs-top">
            <div class="cs-heading">
                <h1>Bachelor of Science in Computer Science (CS)</h1>
                <p>Innovating today, shaping the technology of tomorrow.</p>
            </div>
        </div>

        <div class="cs-content">
            <div class="cs-card">
                <h2>Program Overview</h2>
                <p>
                    Computer Science focuses on computing, programming,
                    algorithms, software development, and solving problems
                    through technology.
                </p>
            </div>

            <div class="cs-card">
                <h2>What You Will Learn</h2>
                <ul>
                    <li>Programming and Software Development</li>
                    <li>Data Structures and Algorithms</li>
                    <li>Database Management</li>
                    <li>Computer Networks</li>
                    <li>Artificial Intelligence</li>
                </ul>
            </div>

            <div class="cs-card">
                <h2>Career Opportunities</h2>
                <h3>CS graduates may pursue careers such as:</h3>
                <ul class="career-list">
                    <li>Software Developer</li>
                    <li>Web Developer</li>
                    <li>Systems Analyst</li>
                    <li>Data Analyst</li>
                    <li>AI Developer</li>
                </ul>
                <p>
                    Specific positions may require additional qualifications,
                    professional experience, or certifications.
                </p>
            </div>

            <div class="CS-card">
                <h2>Why Choose CS?</h2>
                <p>
                    CS is a good choice for students who enjoy programming,
                    logical thinking, problem-solving, and exploring
                    new technologies.
                </p>
            </div>

            <div class="CS-card">
                <h2>Who Should Enroll?</h2>
                <p>
                    This program may suit students who are curious about
                    computers, software, technology, and creating
                    digital solutions.
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped>

#cs,
#cs *,
#cs *::before,
#cs *::after {
    box-sizing: border-box;
}

#cs {
    background-color: white;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
}


#cs .cs-content {
    display: grid;
    grid-template-columns: minmax(0, 1fr); 
    justify-items: center;                 
    gap: 30px;
}

#cs h1 {
    font-family: "Montserrat", sans-serif;
}

#cs p,
#cs li {
    font-family: "Roboto";
}

.cs-top {
    background-color: rgb(225, 237, 255);
    padding: 40px;
    border: 2px solid rgb(170, 205, 255);
    border-left: 10px solid #1565c0;
}

.cs-content {
    background-color: white;
    padding: 40px;
    max-width: 800px;
    margin: 0 auto;
}

.cs-heading h1 {
    color: black;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.cs-heading p {
    color: black;
}

.cs-card {
    box-sizing: border-box;
    background: white;
    width: 100%;
    margin-bottom: 30px;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #1565c0;
    border-top: 4px solid #1565c0;
    box-shadow: 0 2px 8px black;
    transition: transform 0.3s, box-shadow 0.3s;
}

.cs-card li::marker {
    color: #1565c0;
    font-size: 1.5em;
}

.CS-card {
    box-sizing: border-box;
    background: rgb(225, 237, 255);
    width: 100%;
    margin-bottom: 30px;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #1565c0;
    border-left: 4px solid #1565c0;
    box-shadow: 0 2px 8px black;
    transition: transform 0.3s, box-shadow 0.3s;
}


#cs .cs-card,
#cs .CS-card {
    min-width: 0;
    margin: 0 auto;
}

.CS-card h2 {
    text-align: left;
}

.cs-card h2 {
    color: black;
    text-align: center;
}

.cs-card h3 {
    color: #1565c0;
    text-align: left;
}

.career-list::after {
    content: "";
    display: block;
    width: 100%;
    max-width: 500px;
    height: 4px;
    background-color: #1565c0;
    margin: 12px auto 0;
}

.career-list,
.cs-card ul {
    color: black;
    text-align: left;
    font-size: larger;
}

.cs-card p,
.CS-card p {
    font-size: larger;
}


@media (max-width: 900px) {
    #cs .cs-content {
        grid-template-columns: 1fr;
        justify-items: center;
    }

    #cs .cs-card,
    #cs .CS-card {
        max-width: 700px;
    }
}

@media (max-width: 600px) {
    #cs .cs-content {
        padding: 24px 16px;
    }
}
</style>