<template>
    <div class="cnt" :style="listStyle">
        <sui-table inverted>
            <sui-table-header>
                <sui-table-row>
                    <sui-table-header-cell>Team Name</sui-table-header-cell>
                    <sui-table-header-cell>Scores</sui-table-header-cell>
                    <sui-table-header-cell>Games</sui-table-header-cell>
                </sui-table-row>
            </sui-table-header>
            <sui-table-body >
                <TableRow v-for="t in teams" :key="t.id" :team-name="t.name" :score="t.score" :games="t.games"></TableRow>
            </sui-table-body>
        </sui-table>
        <sui-button color="blue" inverted @click="sortByName">Sort By Team Name</sui-button>
        <sui-button color="violet" inverted @click="sortByScore">Sort By Score</sui-button>
    </div>
</template>

<script>
    import GameTableData from "./GameTableData";
    import TableRow from "./TableRow";
    // import TableRow from "./TableRow";

    export default {
        name: "GameTable",
        components: {TableRow},
        props: {
            'background-image' : String
        },

        data() {
            return {
                // teams: [new GameTableData("Esteghlal", 30, 15), new GameTableData("Perspolis", 40, 16), new GameTableData("Sepahan", 15, 9)]
            }
        },

        computed: {
            listStyle : function () {
                return {
                    backgroundImage : this.backgroundImage,
                    backgroundAttachment : 'fixed',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }
            }
        },

        methods: {
            sortByName() {
                return this.teams.sort((a, b) => {return ((a.teamName < b.teamName) ? -1 : 1)})
            },

            sortByScore() {
                return this.team.sort((a, b) => {return ((a.score < b.score) ? -1 : 1)})
            }
        }
    }
</script>

<style scoped>

</style>
