<script setup>
import { useRouter } from 'vue-router'
import ItemList from '@/components/global/ItemList.vue';
import { useMovieStore } from '@/stores/movies';

const props = defineProps({
    list: {
        type: Array,
        required: true,
    },
    page: {
        type: Number,
        required: true,
    },
})

// ROUTER
const router = useRouter();

// STORE
const movies = useMovieStore();
const { assignFavorite } = movies;

// METHODS
const handleSetFavorites = (id) => {
    const filtered = props.list.filter((m) => m.imdb_id === id)
    const movie = Object.assign({}, filtered[0]);
    movie.favorite = !movie.favorite;
    assignFavorite(movie)
}

const goDetail = (id) => {
    router.push(`/detail/${id}`)
}
</script>


<template>
    <div class="list-container">
        <ItemList v-for=" item of list" :key="item.imdb_id" :title="item.title" :favorite="item.favorite" :id="item.imdb_id"
            @action="handleSetFavorites" @goDetail="goDetail(item.imdb_id)"/>
    </div>
</template>

<style scoped>
.list-container {
    width: 50%;
}

@media (max-width: 600px) {
    .list-container {
        width: 90%;
    }
}
</style>