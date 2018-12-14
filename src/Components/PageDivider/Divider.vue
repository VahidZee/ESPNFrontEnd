<template>
    <div class="divider-back" :style="dividerBackStyle" >
        <div  class="divider-fore" :style="dividerForeStyle">
        </div>
    </div>

</template>

<script>
    export default {
        name: "Divider",
        props : {
            width: {
                type : String,
                default : '100vw'
            },
            'background-image' : {
                type: String,
            },
            height : {
                type : String,
                default: '30vh'
            },
            type : {
                type : String,
                default : 'middle'
            }
        },
        computed:{
            dividerBackStyle : function() {
                return {
                    width : this.width,
                    height : this.height,
                    backgroundImage : this.backgroundImage
                }
            },
            dividerForeStyle : function() {
                return {
                    width : this.width,
                    height : this.height,
                    backgroundImage:
                        ( this.type === 'top' ) ? 'linear-gradient(   #000000ff , #00000033 ,  #00000000 )'
                            : ( this.type === 'middle' ) ? 'linear-gradient( #000000dd ,  #00000099 , #00000000 ,  #00000000 , #00000000 ,  #00000099 , #000000dd )'
                            : 'linear-gradient(  #00000000 , #00000033 ,  #000000ff    )',
                }
            }
        }
    }
</script>

<style scoped>
    .divider-back{
        background-attachment : fixed;
        background-size: cover;
        background-repeat:  no-repeat;
        background-position: center
    }
    .divider-fore{
        ;
    }
</style>