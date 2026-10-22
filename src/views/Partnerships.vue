<template>
    <section id="partnerships">
        <div class="partner-heading">
            <h1>Partnerships &amp; Memberships</h1>
            <p>Connecting education, industry, and the computing community.</p>
        </div>

        <div class="content">
            <div class="partner-subheading">
                <h3>Our Industry Partners</h3>
                <p>Explore organizations associated with technology and professional learning.</p>
            </div>

            <div class="partner-grid">
                    <div class="partner-card">
                        <img src="/src/assets/acer.jpg" alt="Acer Academy logo">
                        <h3>Acer Academy</h3>
                        <p>
                            An institutional partnership and school-support program in the Philippines.
                        </p>
                    </div>

                    <div class="partner-card">
                        <img src="/src/assets/cisco.png" alt="Cisco logo">
                        <h3>Cisco Networking Academy</h3>
                        <p>
                            A global IT skills and career-building program launched by Cisco in 1997.
                        </p>
                    </div>

                    <div class="partner-card">
                        <img src="/src/assets/govesmart.jpg" alt="Goversmart logo">
                        <h3>Goversmart</h3>
                        <p>
                            Provides digital transformation services for government agencies, educational instuitutions, and business.
                        </p>
                    </div>

                    <div class="partner-card">
                        <img src="/src/assets/huawei.jpg"  alt="Huawei logo">
                        <h3>Huawei Academy</h3>
                        <p>
                            A partnership between Huawei and Academies around the world.
                        </p>
                    </div>

                    <div class="partner-card">
                        <img src="/src/assets/mayad.png" alt="Mayad logo">
                        <h3>Mayad</h3>
                        <p>
                            Educational and training arm of Mayad Studios, a prominent Philippine wedding photography and videography company.
                        </p>
                    </div>

                    <div class="partner-card">
                        <img src="/src/assets/oracle.png" alt="Oracle logo">
                        <h3>Oracle Academy</h3>
                        <p>
                            Oracle's global philantropic educational program.
                        </p>
                    </div>

                    <div class="partner-card">
                        <img src="/src/assets/lasortech.jpg" alt="Lasortech logo">
                        <h3>Lasortech</h3>
                        <p>
                            A trusted IT hardware retailer and comprehensive multi-device repair center.
                        </p>
                    </div>

                    <div class="partner-card">
                        <img src="/src/assets/psite.png" alt="Psite logo">
                        <h3>Psite</h3>
                        <p>
                            A national professional organizations for IT educators, researchers, and schools in the Philippines.
                        </p>
                    </div>

                    <div class="partner-card">
                        <img src="/src/assets/startup.jpg" alt="Startup logo">
                        <h3>Startup</h3>
                        <p>
                            An industry-linked technology organization that serves as an incubator for software development.
                        </p>
                    </div>
                </div>
        </div>
    </section>
</template>

<style scoped>

#partnerships {
    background-color: rgb(100, 98, 98);
    padding: 40px;
    text-align: center;
    font-family: 'Montserrat',sans-serif;
}

.partner-heading h1 {
    color: white;
}

.partner-heading p {
    color: whitesmoke;
}
.partner-subheading h3{
    color: white;
}

.partner-subheading p {
    color: whitesmoke;
}

.partner-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
    gap: 20px;
    max-width: 1100px;
    margin: 30px auto 0;
}

.partner-card {
    background: white;

    padding: 20px;
    border-radius: 10px;
    border:  1px solid #e6e6ec ;
    border-top: 7px solid #2E7D32 ; 
    
}

.partner-card img {
    width: 100%;
    height: 120px;
    object-fit: contain;
}

.partner-card h3 {
    color: #2f3438;
}

.partner-card img {
    width: 200px;
}

.partner-card p{
    color: #4a5157;
}

.partner-card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

</style>