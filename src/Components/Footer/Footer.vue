<template>
        <div id="main-footer">
            <div class="back"  :style="backgroundStyle">
                <div class="fore">
                    <div class="footer-notes">
                        Copy Right Aeonem @2018
                    </div>
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
        display:flex;
        flex-direction: column-reverse;
    }
    .back {
        background-attachment : fixed;
        background-size: cover;
        background-repeat:  no-repeat;
        background-position: center
    }
    .footer-notes {
        font-size: 1rem;
        color:lightgray;
        text-align: center;
        background-color: #00000055;
        padding: 5px;
        margin: 0;
        font-style: oblique;
    }
    .buttons {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        background-color: #00000099;
    }
</style>