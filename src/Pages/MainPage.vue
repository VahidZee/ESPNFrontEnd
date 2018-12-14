<template>
    <div>
        <NewsList :auth="true" title="Global News" background-image="url('/Images/bg3.jpeg')"></NewsList>
        <div class="partition"></div>
        <games-list title="Top Games" :auth="true" background-image="url('/Images/bg14.jpeg')"></games-list>
        <div class="partition"></div>
    </div>
</template>

<script>
    import NewsList from "@/Components/News/NewsList";
    import GamesList from "@/Components/Games/GamesList";
    export default {
        name: "MainPage",
        components: {GamesList, NewsList},
        data() {
            return {

            }
        },

    }
</script>

<style scoped>
    .partition{
        background-image: linear-gradient(180deg ,  #000000ff , #00000033 );
        height:30vh;
    }
</style>