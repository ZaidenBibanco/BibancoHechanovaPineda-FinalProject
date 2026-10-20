<template>
    <nav>
        <div class="brand-text">
            <h3>College of Computer Studies</h3>
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
    font-family: Verdana, Geneva, Tahoma, sans-serif
}
.brand {
    display: flex;
    align-items: center;
    gap: .7rem;
}
.brand-text {
    font-family: 'Times New Roman', Times, serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #2E7D32;
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