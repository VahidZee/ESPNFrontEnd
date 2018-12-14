<template>
    <div id="main-nav-bar">


        <sui-sidebar inverted class="inverted" animation="push"  width="wide" direction="left" >
            <sui-menu-item>

            </sui-menu-item>

        </sui-sidebar>
    </div>
</template>

<script>
    import LoginSgnUp from '../SignInSignUp/SignInSignUp'
    import LoginSignUp from "@/Components/SignInSignUp/SignInSignUp";
    export default {
        name: "NavBar",
        components: { LoginSignUp},
        component : {
            LoginSgnUp
        }

    }
</script>

<style scoped>
    #main-nav-bar{
        background-image: linear-gradient(   #000000ff , #00000033 );
        width: 100vw;
        height:40vh;
    }
    .shit{
        background-color: black;
    }
</style>