<script setup>
const emit = defineEmits(['action'])

defineProps({
    text: {
        type: String,
        required: true
    },
    buttonType: {
        type: String,
        default: '' 
    },
    disabled: {
        type: Boolean,
        default: false,
    },
})

// METHODS
const handleClick = () => emit('action')

</script>
<template >
    <button id="button" :class="`${buttonType} ${disabled ? 'disabled' : ''}`" :disabled="disabled" @click="handleClick">{{ text }}</button>
</template>
<style scoped>
#button {
  width: 100%;
  height: 2.5rem;
  border: none;
  cursor: pointer;
}

.disabled {
    background-color: rgb(194, 194, 194) !important;
}

.primary {
    background-color: rgb(0, 75, 173);
    color: white;
    border-radius: 4px;
}
.primary:hover {
    background-color: rgb(0, 103, 238);
}

.font-size-bg {
    font-size: 30px;
}

.secondary {
    background-color: rgb(160, 160, 160);
    color: rgb(255, 255, 255);
    border-radius: 4px;
}
.secondary:hover {
    background-color: rgb(150, 150, 150);
}

.link {
    background-color: white;
    color: rgb(0, 75, 173);
}
.link:hover {
    color: rgb(0, 103, 238);
    text-decoration: underline;
}

</style>