<template>
    <section id="blis">
        <div class="blis-top">
            <div class="blis-heading">
                <h1>Bachelor of Librabry and Information Science (BLIS)</h1>
                <p>Beyond books: Engineering the digital information age.</p>
            </div>
        </div>

        <div class="blis-content">
            <div class="blis-card">
                <h2>Program Overview</h2>
                <p>The Bachelor Library and Information Science (BLIS)
                    focuses on oragnizing, managing, and providing access
                    to information resources in libraries and other organizations.
                </p>
            </div>

            <div class="blis-card">
                <h2>What You Will Learn</h2>
                <ul>
                    <li>Organization of Information resources</li>
                    <li>Cataloging and information retrieval</li>
                    <li>Librabry Management</li>
                    <li>Research and Information Literacy</li>
                    <li>Preservation of information resources</li>
                </ul>
            </div>

            <div class="blis-card">
                <h2> Career Opportunities</h2>
                <h3>BLIS graduates may pursue careers such as:</h3>
                <ul class="career-list">
                    <li>Librarian</li>
                    <li>Library Assistant</li>
                    <li>Information Specialist</li>
                    <li>Records Management Assistant</li>
                    <li>Archivist</li>
                </ul>
                <p>Specific Positions may require additional qualifications,
                    professional experience, or a license.
                </p>
            </div>

            <div class="BLIS-card">
                <h2>Why Choose BLIS?</h2>
                <p>BLIS is a good choice for students who enjoys
                    reading, researching, organizing information,
                    and using technology.
                </p>
            </div>

            <div class="BLIS-card">
                <h2>Who Should Enroll?</h2>
                <p>This program may suit students who are
                    interested in books, research, technology, and helping
                    people find useful information.
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped>

#blis {
    background-color: white;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
}

.blis-top {
    background-color: rgb(226, 236, 236);
    padding: 40px;
    border: 2px solid rgb(171, 224, 224);
    border-left: 10px solid teal;
}

.blis-content {
    background-color: white;
    padding: 40px;
    max-width: 800px;
    margin: 0 auto;
}

.blis-heading h1 {
    color: black;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.blis-heading p {
    color: black;
}

.blis-card {
    background: white;
    width: 800px;
    height: auto;
    margin-bottom: 30px;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid teal;
    border-top: 4px solid teal;
    box-shadow: 0 2px 8px black;
    transition: transform 0.3s, box shadow 0.3s;
}

.blis-card li::marker {
    color: teal;
    font-size: 1.5em;
}

.BLIS-card {
    background: rgb(226, 236, 236);
    width: 800px;
    height: auto;
    margin-bottom: 30px;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid teal;
    border-left: 4px solid teal;
    box-shadow: 0 2px 8px black;
    transition: transform 0.3s, box shadow 0.3s;
}



.BLIS-card h2{
    text-align: left;
}
.blis-card h2 {
    color: black;
    text-align: center;
}

.blis-card h3 {
    color: teal;
    text-align: left;
}

.career-list::after {
    content: "";
    display: block;
    width: 500px;
    height: 4px;
    background-color: teal;
    margin: 12px auto 0;
}

.career-list {
    color:black;
    text-align: left;
    font-size: larger;
}
.blis-card ul {
    color:black;
    text-align: left;
    font-size: larger;
}



.blis-card p {
    font-size: larger;
}

.BLIS-card p {
    font-size: larger;
}


</style>