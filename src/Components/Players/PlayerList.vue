<template>
    <div class="playersList" :style="listStyle"   >
        <!--<sui-menu class="controlBar" inverted vertical floated :class="{ 'related-menu' : related.length }">-->
            <!---->
        <!--</sui-menu>-->
        <div
                class="list-header"
        >
            <div class="list-header-title">
                {{title}}
            </div>
        </div>

        <div class="viewPort" >
            <div class="fore">
            shit
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PlayerList",
        components: { },
        props : {
            'background-image' : {
                type : String,
                default : 'radial-gradient(#00002211 , #22222211)'
            } ,
            'title' : {
                type : String,
                default: 'Players'
            },
            'players' : {
                type: Array
            },
            'auth' : {
                type: Boolean,
                default: false
            },

        } ,
        data() {
            return {
                posts: []
            }
        },

        //Computed Methods
        computed: {
            listStyle : function () {
                return {
                    backgroundImage : this.backgroundImage,
                    backgroundAttachment : 'fixed',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }
            },

        },

        //Methods
        methods : {
            //TODO remove Lorem ipsum
            generateData(value) {
                return null;
            },

            //Data Filtering

            //Data Fetching
            fetchData() {
                for( let i = 1 ; i < 100  ; i++ )
                    this.posts.push( this.generateData(i));
            },

            //ControlBar Methods

        },

        //Events
        beforeMount() {
            this.fetchData()
        }

    }
</script>

<style scoped>
    .playersList {
        min-height: 400px;
        max-height: 40vh;
        margin: 0;
        width: 100vw;
    }
    .viewPort{
        width: 100%;
        height: 100%;
        margin: 0;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-content: flex-start;
        align-items: center;
        overflow-y: hidden;
        overflow-x: auto;
        min-height: inherit;
        max-height: inherit;

    }
    ::-webkit-scrollbar {
        width: 0px;  /* remove scrollbar space */
        background: transparent;  /* optional: just make scrollbar invisible */
    }
    .viewPort>*{
        margin:5px
    }
    .list-header{
        background-image: linear-gradient(#00000099 ,#00000000 );
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;

        font-size: 2rem;
    }
    .list-header-title{
        background-color: #000000aa;
        padding: 8px 4vw;
        border-radius: 0 0 4vw 4vw;
        color: lightgray;
    }
    .fore{
        background-image: radial-gradient(ellipse at 50% 100% , #00000000 , #00000099);
        width: 100%;
        height: 100%;
    }
</style>