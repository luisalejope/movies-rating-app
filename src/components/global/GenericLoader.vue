<script setup>
import GenericModal from '@/components/global/GenericModal.vue';

</script>
<template>
    <GenericModal>
        <template #content>
            <div class="dots"></div>
        </template>
    </GenericModal>
</template>
<style scoped>
.dots {
    width: 15px;
    aspect-ratio: 1;
    position: relative;
}

.dots::before,
.dots::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: rgb(0, 75, 173);
}

.dots::before {
    box-shadow: -25px 0;
    animation: dot-start 1s infinite linear;
}

.dots::after {
    transform: rotate(0deg) translateX(25px);
    animation: dot-restart 1s infinite linear;
}

@keyframes dot-start {
    100% {
        transform: translateX(25px)
    }
}

@keyframes dot-restart {
    100% {
        transform: rotate(-180deg) translateX(25px)
    }
}
</style>