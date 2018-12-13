<template>
    <div>
        <NewsList :auth="true" ></NewsList>
    </div>
</template>

<script>
    import NewsList from "@/Components/News/NewsList";
    import NavBar from "@/Components/NavBar/NavBar";
    export default {
        name: "MainPage",
        components: { NewsList},
        data() {
            return {

            }
        },

    }
</script>

<style scoped>

</style>