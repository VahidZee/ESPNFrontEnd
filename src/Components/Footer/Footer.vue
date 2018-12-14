<template>
        <div id="main-footer">
            <div class="back"  :style="backgroundStyle">
                <div class="fore">

                </div>
            </div>
        </div>
</template>

<script>
    export default {

        name: "Footer",

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
        background-image: linear-gradient(  #00000033 , #000000ff   );
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