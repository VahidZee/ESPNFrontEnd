<template>
    <div id="main-nav-bar">
        <login-sign-up></login-sign-up>
    </div>
</template>

<script>
    import LoginSgnUp from '../SignInSignUp/SignInSignUp'
    import LoginSignUp from "@/Components/SignInSignUp/SignInSignUp";
    export default {
        name: "NavBar",
        components: {LoginSignUp},
        component : {
            LoginSgnUp
        }
    }
</script>

<style scoped>
    div{
        background-color: black;
        width: 100vw;
        height:100vh;
    }
</style>