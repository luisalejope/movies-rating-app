
<script setup>

import IconHeart from '@/components/icons/IconHeart.vue';

const emit = defineEmits(['action', 'goDetail'])

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    favorite: {
        type: Boolean,
        required: true,
    }
})

// METHODS
const handleClick = () => {
    emit('action', props.id)
};
const handleDetail = () => emit('goDetail')
</script>

<template>
    <div id="item" class="mt-n mb-n">
        <div class="item-title" @click="handleDetail">
            <h4>
                {{ title }}
            </h4>
        </div>
        <i id="icon-heart" @click="handleClick">
            <IconHeart :filled="favorite" />
        </i>
    </div>
</template>

<style scoped>
#item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
    width: 100%;
    height: 50px;
    background-color: white;
    border: 1px solid #C5C5C5;
    border-radius: 3px;
    box-shadow: 1px 1px 3px 0px rgba(134, 134, 134, 0.21);
    cursor: pointer;
}
.item-title {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
}
.item-title > h4{
    width: 100%;
}
#icon-heart {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 23px;
  cursor: pointer;
  fill: rgb(0, 75, 173);
}

#icon-heart:hover {
  fill: rgb(159, 160, 160);
}
</style>