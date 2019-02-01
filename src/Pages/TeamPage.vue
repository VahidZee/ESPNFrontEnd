<template>
    <div>
        <GamesList title="Team Games" background-image="url('./Images/bg13.jpeg')"></GamesList>
        <h2>{{ response.name }}</h2>
        <TeamPlayers v-bind:resp="response"></TeamPlayers>
        <NewsList title="Team News" background-image="url('./Images/bg13.jpeg')"></NewsList>

    </div>
</template>

<script>
    import NewsList from "../Components/News/NewsList";
    import GamesList from "../Components/Games/GamesList";
    import TeamPlayers from "../Components/TeamPlayers/TeamPlayers";
    import axios from 'axios'

    export default {
        name: "TeamPage",
        components: {TeamPlayers, GamesList, NewsList},
        data() {
          return {
              response: "",
          }
        },
        methods: {
            getTeamData() {
                axios.post(this.$store.getters.NewsBackEndURL + this.$route.params.id)
                    .then(response => {
                        this.response = response.data;
                        console.log(this.response)
                    })
                    .catch(error => {
                        //TODO 404
                        console.log(error)
                        // this.errored = true
                    })
            },
        },
        beforeMount() {
            this.getTeamData()
        },
    }
</script>

<style scoped>

</style>
