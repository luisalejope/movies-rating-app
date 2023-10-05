<template>
    <div id="myModal" class="modal">
        <div class="modal-content">
            <slot name="content"></slot>
        </div>
    </div>
</template>
<style scoped>
.modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>