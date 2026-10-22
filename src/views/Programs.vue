<template>
    <section id="programs">
        <h3>Academic Programs</h3>
        <div class="programs-column">
            <div class="programs-card">
                <div class="programs-img">
                    <img src="@/assets/itso.png" class="img" alt="Information Technology Students Organization">
                </div>
                <h3>Information Technology</h3>
                <div class="programs-info">
                    <p>Learn to develop, manage, and maintain technology solutions that address real-world needs.
                    </p>
                    <button class="read"><router-link to="/bsit" active-class="active">Read More</router-link></button>
                </div>
            </div>
            
            <div class="programs-card">
                <div class="programs-img">
                   <img src="@/assets/css.png" class="img" alt="Computer Science Society">
                </div>
                <h3>Computer Science</h3>
                <div class="programs-info">
                    <p>Explore programming, algorithms, and computing principles to design innovative software and solve complex problems.
                    </p>
                    <button class="read"><router-link to="/bscs" active-class="active">Read More</router-link></button>
                </div>
            </div>

            <div class="programs-card">
                <div class="programs-img">
                    <img src="@/assets/midas.png" class="img" alt="Modern Digital Artists">
                </div>
                <h3>Digital Media and Interactive Arts</h3>
                <div class="programs-info">
                    <p>Combine creativity and technology to create engaging digital media, interactive experiences, and visual content.
                    </p>
                    <button class="read"><router-link to="/bsdmia" active-class="active">Read More</router-link></button>
                </div>
            </div>

            <div class="programs-card">
                <div class="programs-img">
                    <img src="@/assets/lisso.png" class="img" alt="Library and Information Science Student Organization">
                </div>
                <h3>Libracy Information Science</h3>
                <div class="programs-info">
                    <p>Learn to organize, manage, preserve, and provide access to information in libraries and other information-centered organizations.
                    </p>
                    <button class="read"><router-link to="/blis" active-class="active">Read More</router-link></button>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
#programs {
    background-color: #fff;
    width: 100%;
    padding: 4rem 1.5rem;
    min-height: 50vh; 
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: 'Monserrat', sans-serif;
    
}
#programs a {
    text-decoration: none;
    color: #fff;
}
#programs > h3 {
    color: #1A1919;
    font-size: 1.8rem;
    letter-spacing: 0.05rem;
    margin: 0 0 2rem 0;
    text-transform: uppercase;
    position: relative;
}
.programs-column {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.5rem;
    width: 100%;
    max-width: 1400px;
    align-items: stretch;
}
.programs-card {
    min-width: 0;
    background-color: #fff;
    border: 1px solid #e6e6ec;
    border-top: 4px solid #2E7D32;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.04);
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    text-align: left;

    font-family: 'Montserrat';
    font-size: 0.9rem;
    line-height: 1.6;

    transition: transform 0.2s ease, box-shadow 0.2 ease;
}
.programs-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 24px rgba(43,27,94,0.10);
}
.programs-img {
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.25rem;
}
.programs-card .img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.programs-card h3 {
    color: #1A1919;
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
    margin-top: auto;
    align-self: flex-start;
    background-color: #2E7D32;
    border: 1px solid #2E7D32;
    padding: 0.7rem 1.1rem;
    color: #fff;
    border-radius: 6px;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
}

/* Tablet */
@media (max-width: 1024px) {
    .programs-column {
        grid-template-columns: repeat(2,minmax(0,1fr));
    }
}

/* Mobile */
@media (max-width: 600px) {
    #programs {
        padding: 3rem 1.25rem;
    }

    .programs-column {
        grid-template-columns: 1fr;
        gap: 1.25rem;
    }

    .programs-card {
        padding: 1.25rem;
    }
}

</style>