<script setup>
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia'
import { useMovieStore } from '@/stores/movies';
import GenericList from '@/components/global/GenericList.vue';
import GenericButton from '@/components/global/GenericButton.vue';

// STORES
const movies = useMovieStore();
const { numberFavorites, getFavoritesByPage } = storeToRefs(movies);

// DATA
const numberPage = ref(1)

// COMPUTED
const isVisibleNext = computed(() => numberPage.value < numberFavorites.value / 20)
const isVisibleBack = computed(() => numberPage.value > 1)

// METHODS
const handlePaginate = async (type) => {
    if (type === 'next') {
        numberPage.value += 1;
    } else {
        numberPage.value -= 1;
    }
}
</script>

<template>
    <div id="favorites">
        <div class="container-buttons mt-l">
            <div>
                <GenericButton button-type="secondary font-size-bg" text="&#9754;" @action="handlePaginate('back')"
                    v-show="isVisibleBack" />
            </div>
            <h2 class="principal-title">
                Favorite Movies
            </h2>
            <div>
                <GenericButton button-type="secondary font-size-bg " text="&#9755;" @action="handlePaginate('next')"
                    v-show="isVisibleNext" />
            </div>
        </div>
        <div class="favorite-empty mt-xxl" v-show="getFavoritesByPage.length === 0">
            <p>
                There are no Favorite movies
            </p>
        </div>
        <GenericList :list="getFavoritesByPage[numberPage - 1] || []" :page="numberPage" />
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
#favorites {
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

.favorite-empty {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 60px;
    border: 1px solid #C5C5C5;
    border-radius: 3px;
    box-shadow: 1px 1px 3px 0px rgba(134, 134, 134, 0.21);
    font-size: 2rem;
    color: rgb(0, 75, 173);
}

.principal-title {
    text-align: center;
}

@media (max-width: 600px) {
    .container-buttons {
        width: 90%;
    }

    .favorite-empty {
        width: 90%;
    }
}
</style>