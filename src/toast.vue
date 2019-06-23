<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>
<script>

    export default {
        name:'GuluToast'
    }
</script>
<style scoped lang="scss">
    $font-size:14px;
    $line-height: 40px;
    $toast-bg:rgba(0,0,0,0.75);
    .toast{
        font-size: 14px;
        height: $line-height;
        line-height: 1.8;
        color: white;
        position: fixed;
        top:0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items:center;
        background:$toast-bg;
        border-radius: 4px;
        box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.5);
        padding: 0 16px;
    }
</style>