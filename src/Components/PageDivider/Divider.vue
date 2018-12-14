<template>
    <div class="divider-back" :style="dividerBackStyle" >
        <div v-show="backgroundImage" class="divider-fore" :style="dividerForeStyle">
        </div>
    </div>

</template>

<script>
    export default {
        name: "Divider",
        props : {
            divWidth: {
                type : String,
                default : '100vw'
            },
            'background-image' : {
                type: String,
            },
            divHeight : {
                type : String,
                default: '30vh'
            }
        },
        computed:{
            dividerBackStyle : function() {
                return {
                    width : this.divWidth,
                    height : this.divHeight
                }
            },
            dividerForeStyle : function() {
                return {
                    width : this.divWidth,
                    height : this.divHeight,
                    backgroundImage : this.backgroundImage
                }
            }
        }
    }
</script>

<style scoped>
    .divider-back{
        background-image: linear-gradient(   #000000ff , #00000033 ,  #00000000 );
    }
    .divider-fore{

        background-attachment : fixed;
        background-size: cover;
        background-repeat:  no-repeat;
        background-position: center
    }
</style>