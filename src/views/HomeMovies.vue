<script setup>
import { onBeforeMount, ref, computed } from 'vue';
import { storeToRefs } from 'pinia'
import { useMovieStore } from '@/stores/movies';
import GenericList from '@/components/global/GenericList.vue';
import GenericButton from '@/components/global/GenericButton.vue';

// // STORE
const movies = useMovieStore();
const { numberMovies, getAllMoviesByPage } = storeToRefs(movies);
const { requestMovies } = movies;

// DATA
const numberPage = ref(1);
const errorMessage = ref(false);

// LIFECYCLE HOOKS
onBeforeMount(async () => {
    try {
        errorMessage.value = false;
        await requestMovies();
    } catch (error) {
        errorMessage.value = true;
    }
})

// COMPUTED
const isVisibleNext = computed(() => numberPage.value < numberMovies.value / 20)
const isVisibleBack = computed(() => numberPage.value > 1)

// METHODS
const handlePaginate = (type) => {
    if (type === 'next') {
        numberPage.value += 1;
    } else {
        numberPage.value -= 1;
    }
}
</script>

<template>
    <div id="home-movies">
        <div class="container-buttons mt-l">
            <div>
                <GenericButton button-type="secondary font-size-bg" text="&#9754;" @action="handlePaginate('back')"
                    v-show="isVisibleBack" />
            </div>
            <h2 class="principal-title">
                Movies
            </h2>
            <div>
                <GenericButton button-type="secondary font-size-bg " text="&#9755;" @action="handlePaginate('next')"
                    v-show="isVisibleNext" />
            </div>
        </div>
        <div class="error-message mt-xxl" v-show="errorMessage">
            <p>
                It seems to be a problem! Try Later
            </p>
        </div>
        <GenericList :list="getAllMoviesByPage[numberPage - 1] || []" :page="numberPage" />
        <div class="container-buttons">
            <div>
                <GenericButton button-type="secondary font-size-bg" text="&#9754;" @action="handlePaginate('back')"
                    v-show="isVisibleBack" />
            </div>
            <div />
            <div>
                <GenericButton button-type="secondary font-size-bg" text="&#9755;" @action="handlePaginate('next')"
                    v-show="isVisibleNext" />
            </div>
        </div>
    </div>
</template>


<style scoped>
#home-movies {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-animation: bounce-in 1s ease 0s 1 normal;
    -moz-animation: bounce-in 1s ease 0s 1 normal;
    -ms-animation: bounce-in 1s ease 0s 1 normal;
    animation: bounce-in 1s ease 0s 1 normal;
}

.container-buttons {
    display: grid;
    width: 50%;
    grid-template-columns: 40px auto 40px;
}

.principal-title {
    text-align: center;
}


.error-message {
    display: flex;
    background-color: #ff9999;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 60px;
    border: 1px solid #cacaca;
    border-radius: 3px;
    box-shadow: 1px 1px 3px 0px rgba(134, 134, 134, 0.21);
    font-size: 2rem;
    color: rgb(255, 255, 255);
}


@media (max-width: 600px) {
    .container-buttons {
        width: 90%;
    }

    .error-message {
        width: 90%;
    }
}
</style>