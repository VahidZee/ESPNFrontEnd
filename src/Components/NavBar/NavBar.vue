<template>
    <div id="main-nav-bar">
        <div class="back"  :style="backgroundStyle">
            <div class="fore">

            </div>
        </div>
        <sui-sidebar  class="inverted" animation="push"  width="wide" direction="left" >
            <sui-menu-item >
                Home Page
            </sui-menu-item>

        </sui-sidebar>
    </div>
</template>

<script>
    import LoginSgnUp from '../SignInSignUp/SignInSignUp'
    import LoginSignUp from "@/Components/SignInSignUp/SignInSignUp";

    export default {

        name: "NavBar",

        props : {
            'background-image' : {
                type: String,
            }
        },

        computed: {
            backgroundStyle : function() {
                return {
                    backgroundImage: this.backgroundImage
                }
            }
        }

    }
</script>

<style scoped>
    .fore{
        background-image: linear-gradient(   #000000ff , #00000033 );
        width: 100vw;
        height:40vh;
    }
    .back {
        background-attachment : fixed;
        background-size: cover;
        background-repeat:  no-repeat;
        background-position: center


    }

</style>