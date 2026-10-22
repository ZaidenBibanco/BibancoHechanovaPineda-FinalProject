<template>
    <section id="bsit">
        <div class="bsit-top">
            <div class="bsit-heading">
                <h1>Bachelor of Science in Information Technology</h1>
                <p>Empowering the Future Through Technology.</p>
            </div>
        </div>

        <div class="bsit-content">
            <div class="bsit-card">
                <h2>Program Overview</h2>
                <p>
                    The Bachelor of Science in Information Technology (BSIT)
                    focuses on the design, development, implementation, and
                    management of computer-based information systems. It
                    prepares students to use technology to solve problems
                    and meet the needs of individuals and organizations.
                </p>
            </div>

            <div class="bsit-card">
                <h2>What You Will Learn</h2>
                <ul>
                    <li>Web and application development</li>
                    <li>Database design and management</li>
                    <li>Networking and systems administration</li>
                    <li>Systems analysis and design</li>
                    <li>Information security and IT project management</li>
                </ul>
            </div>

            <div class="bsit-card">
                <h2>Career Opportunities</h2>
                <h3>BSIT graduates may pursue careers such as:</h3>
                <ul class="career-list">
                    <li>Web or Application Developer</li>
                    <li>Database Administrator</li>
                    <li>IT Support Specialist</li>
                    <li>Systems Analyst</li>
                    <li>Network Administrator</li>
                </ul>
                <p>
                    Specific positions may require additional qualifications,
                    professional experience, or industry certifications.
                </p>
            </div>

            <div class="BLIS-card">
                <h2>Why Choose BSIT?</h2>
                <p>
                    BSIT is a good choice for students who enjoy solving
                    problems, developing software, working with databases,
                    and applying technology to real-world challenges.
                    It offers opportunities to build practical technical
                    skills for a wide range of industries.
                </p>
            </div>

            <div class="BLIS-card">
                <h2>Who Should Enroll?</h2>
                <p>
                    This program may suit students who are curious about
                    computers, interested in programming and technology,
                    enjoy logical thinking, and want to develop digital
                    solutions that help people and organizations.
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped>

#bsit {
    background-color: white;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
}

#bsit h1 {
    font-family: "Montserrat", sans-serif;
}
#bsit p {
    font-family: "Roboto";
}
#bsit li {
    font-family: "Roboto";
}

.bsit-top {
    background-color: rgb(226, 236, 236);
    padding: 40px;
    border: 2px solid rgb(171, 224, 224);
    border-left: 10px solid purple;
}

.bsit-content {
    background-color: white;
    padding: 40px;
    max-width: 800px;
    margin: 0 auto;
}

.bsit-heading h1 {
    color: black;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.bsit-heading p {
    color: black;
}

.bsit-card {
    background: white;
    width: 800px;
    height: auto;
    margin-bottom: 30px;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid purple;
    border-top: 4px solid purple;
    box-shadow: 0 2px 8px black;
    transition: transform 0.3s, box shadow 0.3s;
}

.bsit-card li::marker {
    color: purple;
    font-size: 1.5em;
}

.BLIS-card {
    background: rgb(226, 236, 236);
    width: 800px;
    height: auto;
    margin-bottom: 30px;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid purple;
    border-left: 4px solid purple;
    box-shadow: 0 2px 8px black;
    transition: transform 0.3s, box shadow 0.3s;
}



.BLIS-card h2{
    text-align: left;
}
.bsit-card h2 {
    color: black;
    text-align: center;
}

.bsit-card h3 {
    color: purple;
    text-align: left;
}

.career-list::after {
    content: "";
    display: block;
    width: 500px;
    height: 4px;
    background-color: purple;
    margin: 12px auto 0;
}

.career-list {
    color:black;
    text-align: left;
    font-size: larger;
}
.bsit-card ul {
    color:black;
    text-align: left;
    font-size: larger;
}



.bsit-card p {
    font-size: larger;
}

.BLIS-card p {
    font-size: larger;
}


</style>