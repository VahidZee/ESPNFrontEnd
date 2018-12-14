<template>
    <div class="back" :style="backgroundStyle" >
        <NewsList :auth="true" title="Global News" background-image="url('/Images/bg3.jpeg')"></NewsList>
        <Divider background-image="url('./Images/bg14.jpeg')" />

        <games-list title="Top Games" :auth="true" background-image="url('/Images/bg14.jpeg')"></games-list>
    </div>
</template>

<script>
    import NewsList from "@/Components/News/NewsList";
    import GamesList from "@/Components/Games/GamesList";
    import Divider from "@/Components/PageDivider/Divider";
    export default {
        name: "MainPage",
        components: {Divider, GamesList, NewsList},
        props : {
            'background-image' : {
                type: String,
            }
        },
        data() {
            return {

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
    .back {
        background-attachment : fixed;
        background-size: cover;
        background-repeat:  no-repeat;
        background-position: center
    }
</style>