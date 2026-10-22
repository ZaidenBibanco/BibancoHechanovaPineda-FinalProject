<template>
    <nav>
        <div class="nav-left">
            <div class="ccs-logo">
            <img src="@/assets/ccs.png" class="logo" alt="CCS Logo">
            </div>
            <div class="brand-text">
                <h3>College of Computer Studies</h3>
            </div>
        </div>

        <div class="nav-right">
            <ul>
                <li><router-link to="/#hero" active-class="active">Home</router-link></li>
                <li><router-link to="/#programs" active-class="active">Programs</router-link></li>
                <li><router-link to="/#partnerships" active-class="active">Partnerships</router-link></li>
            </ul>
        </div>
    </nav>
</template>

<style>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 50px;
    background: #fff;
    flex-wrap: wrap;
    gap: 1rem;
    
    font-family: 'Montserrat',sans-serif;
    font-size: larger;
    font-weight: 600;

}
.nav-left {
    display: flex;
    flex-direction: row;
}
.logo {
    width: 150px;
}
.brand-text {
    font-family: 'Playfair Display',sefic;
    font-size: 1.5rem;
    font-weight: 700;
    color: #2E2D2D;
}
nav ul {
    display: flex;
    list-style: none;
    gap: 2rem;
    margin: 0;
    padding: 0;
}
.nav-right {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}
nav a {
    text-decoration: none;
    color: black;
    transition: color .2s;
}
</style>