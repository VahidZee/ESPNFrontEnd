<template>
    <div>
        <GamesList title="Team Games" background-image="url('./Images/bg13.jpeg')"></GamesList>
        <TeamPlayers></TeamPlayers>
        <NewsList title="Team News" background-image="url('./Images/bg13.jpeg')"></NewsList>

    </div>
</template>

<script>
    import NewsList from "../Components/News/NewsList";
    import GamesList from "../Components/Games/GamesList";
    import TeamPlayers from "../Components/TeamPlayers/TeamPlayers";
    export default {
        name: "TeamPage",
        components: {TeamPlayers, GamesList, NewsList},

    }
</script>

<style scoped>

</style>
