<template>
    <nav>
        <div class="nav-left">
            <div class="ccs-logo">
                <router-link to='/'>
                    <img src="@/assets/ccs.png" class="logo" alt="CCS Logo">
                </router-link>
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
    padding: 12px 5%;
    background: #fff;
    gap: 1.5rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 600;
}
.nav-left {
    display: flex;
    align-items: center;
    gap: 15px;
    min-width: 0;
}
.logo {
    display: block;
    width: 90px;
    height: auto;
}
.brand-text {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: #2E2D2D;
}
.brand-text h3 {
    margin: 0;
}
nav ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 2rem;
    margin: 0;
    padding: 0;
}
.nav-right {
    display: flex;
    align-items: center;
}
nav a {
    text-decoration: none;
    color: #2E2D2D;
    transition: color 0.2s ease;
}
nav a:hover,
nav a.active {
    color: #2E7D32;
}

/* TABLET */
@media (max-width: 900px) {
    nav {
        padding: 12px 4%;
        gap: 1rem;
    }

    .logo {
        width: 70px;
    }

    .nav-left {
        gap: 10px;
    }

    .brand-text {
        font-size: 0.95rem;
    }

    nav ul {
        gap: 1rem;
    }

    nav {
        font-size: 0.9rem;
    }
}

/* PHONE */
@media (max-width: 600px) {
    nav {
        flex-direction: column;
        align-items: center;
        gap: 15px;
        padding: 15px 5%;
    }

    .nav-left {
        justify-content: center;
        width: 100%;
    }

    .logo {
        width: 60px;
    }

    .brand-text {
        font-size: 1rem;
    }

    .nav-right {
        width: 100%;
        justify-content: center;
    }

    nav ul {
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px 22px;
    }

    nav a {
        font-size: 0.85rem;
    }
}

/* VERY SMALL PHONES */
@media (max-width: 360px) {
    .brand-text {
        font-size: 0.85rem;
    }

    .logo {
        width: 50px;
    }

    nav ul {
        gap: 10px 16px;
    }
}
</style>