<template>
    <div class="gameCnt">
        <div style="margin: 0.5rem">
            <h1 style="color: black; text-align: center;"> <span style="background-color: darkgrey; padding: 2px;">League Title</span></h1>
        </div>
        <sui-grid :columns="2">
            <sui-grid-row>
                <sui-grid-column :width="4">
                    <GameTable v-bind:teams="teams" background-image="url('/Images/bg3.jpeg')"></GameTable>
                    <MatchTable v-bind:matches="matches" background-image="url('/Images/bg3.jpeg')"></MatchTable>
                </sui-grid-column>
                <sui-grid-column :width="10">
                    <Tournament v-bind:tour="tournament" background-image="url('/Images/bg3.jpeg')"></Tournament>
                </sui-grid-column>
            </sui-grid-row>
        </sui-grid>
    </div>
</template>

<script>

    import GameTable from "../Components/GameTable/GameTable";
    import Tournament from "../Components/Tournament/Tournament";
    import MatchTable from "../Components/MatchTable/MatchTable";
    export default {
        name: "LeaguePage",
        components: { MatchTable, Tournament, GameTable},
        data() {
           return {
               id: 1,
               j: null,
               matches: null,
               teams: null,
               tournament: null
           }
        },
        methods: {
            getLeague() {
                axios.post('' + id, 'profile')
                    .then(res => {
                        let json_res = res.json()
                        this.matches = json_res.matches
                        this.teams = json_res.teams
                        this.tournament = json_res.tournament
                    })
                    .catch(err => {
                        console.log(err)
                    })

            }
        },
        beforeMount() {
            this.getLeague()
        },
    }


</script>

<style scoped>
    .gameCnt {
        /*background: url('Images/bg3.jpeg');*/
        background-color: black;
        /*background-color: rgba(0, 0, 0, 1);*/
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        /*align-items: start;*/
    }
</style>
