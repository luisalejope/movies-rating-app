<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router'
import { useMovieStore } from '@/stores/movies';

// ROUTER
const route = useRoute();

// STORE
const movies = useMovieStore();
const { getMovieByID } = movies;

// DATA
const movie = ref({})

// LIFECYCLE HOOKS
onBeforeMount(async () => {
    const idByUrl = route.params.id;
    movie.value = await getMovieByID(idByUrl);
})
</script>

<template>
    <div id="detail">
        <section id="general-info">

            <h3>{{ movie.title }}</h3>
            <p>Content rating: {{ movie.content_rating }}</p>
            <br>
            <div class="detail-container">
                <div class="banner">
                    <img class="img-movie" :src="movie.banner" :alt="movie.title">
                </div>
                <div class="info-movie mt-xxs">
                    <p>{{ movie.description }}</p>
                    <p class="mt-m">Genres</p>
                    <div class="genre-container mb-m">
                        <template v-for="(gen, index) in movie.gen" :key="index">
                            <div class="genre mt-s">
                                <p>{{ gen.genre }}</p>
                            </div>
                        </template>
                    </div>
                    <p>Year released: {{ movie.year }}</p>
                    <p>Rating: {{ movie.rating }}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
#detail {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 30px;
    animation: move-left 2s linear reverse;
}

#general-info {
    width: 70%;
}

#detail>h3 {
    font-size: 3rem;
}

.banner {
    width: 35%;
    display: flex;
    align-items: center;
}

.img-movie {
    width: 100%;
    border-radius: 30px;
}

.detail-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid grey;
    border-radius: 30px;
    padding: 10px;
}

.genre-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
}

.genre {

    width: 92px;
    padding: 4px;
    border: 1px solid grey;
    border-radius: 35px;
}

.info-movie {
    width: 50%;
}

.info-movie>p {
    text-align: justify;
}

.detail-container>h3 {
    font-size: 50px;
}

.detail-container>p {
    margin: 20px 0;
    font-size: 30px;
}

@keyframes move-left {
    from {
        left: 0;
    }

    to {
        left: 100%;
    }
}

@media (max-width: 600px) {
    .detail-container {
        flex-direction: column;
    }

    #general-info,
    .banner,
    .info-movie {
        width: 100%;
    }

}</style>