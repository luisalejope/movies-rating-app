<script setup>
import { RouterLink, useRoute, useRouter } from 'vue-router'
import GenericButton from './global/GenericButton.vue';

// ROUTER
const route = useRoute();
const router = useRouter();


// METHODS
const handleBackward = () => {
    router.back()
}

</script>
<template>
    <header class="template-app">
        <div class="wrapper">

            <nav class="navContainer">
                <div class="backwards-container" v-if="route.name === 'Detail'">
                    <GenericButton buttonType="primary font-size-bg" text="&#9754;" @action="handleBackward" />
                    <h2>
                        Detail
                    </h2>
                </div>
                <div class="routes" v-else>
                    <div class="router-links">
                        <RouterLink class="linkNav" to="/home" exactActiveClass="active">
                            Home
                        </RouterLink>
                        <RouterLink class="linkNav" to="/favorites" exactActiveClass="active">
                            Favorites
                        </RouterLink>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<style scoped>
.wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 3.5rem;
    background-color: rgb(233, 232, 232);
    -webkit-box-shadow: 0px 3px 13px -5px rgba(0, 0, 0, 0.42);
    -moz-box-shadow: 0px 3px 13px -5px rgba(0, 0, 0, 0.42);
    box-shadow: 0px 3px 13px -5px rgba(0, 0, 0, 0.42);
}

.backwards-container {
    width: 120px;
    animation: move-left 2s linear reverse;

}

.backwards-container>h2 {
    margin-left: 1rem;
}

.logout-container {
    width: 70px;
}

.navContainer {
    width: 90%;
    display: flex;
}

.router-links,
.backwards-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.routes {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.linkNav {
    font-size: 25px;
    margin-left: 1rem;
    font-size: large;
    text-decoration: none;
    color: #323232;
}

.linkNav:hover {
    color: rgb(0, 75, 173);
}

.active {
    color: rgb(0, 75, 173);
}

@keyframes move-left {
  from {
    left: 0;
  }
  to {
    left: 100%;
  }
}
</style>