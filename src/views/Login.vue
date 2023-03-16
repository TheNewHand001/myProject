<template>
    <!-- <div id="login-all">
        test
    </div> -->
    <button @click="handle">
        点击跳转
    </button>
</template>

<script>
    export default{
        methods: {
            handle(){
                this.$router.push('./baidu.vue');
            }
        }
    }
</script>
<style scoped>
    #login-all{
        background-color:aqua;
        position:fixed;
        height: 100%;
        width:100%;
        top:0%;
        left:0%;
    }
</style>
add_filter