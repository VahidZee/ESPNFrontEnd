<template>
    <div>
        <Timeline :events="events"></Timeline>
        <PlayersTable :best-player="bestPlayer" :in-players="inPlayers" :save-players="savePlayers"></PlayersTable>
        <EventTable :penalties="penalties" :corners="corners" :goals="goals" :goal-opp="goalOpp"></EventTable>
    </div>
</template>

<script>
    import Timeline from "../Components/Timeline/Timeline";
    import EventTimeData from "../Components/Timeline/EventTimeData";
    import PlayersTable from "../Components/PlayersTable/PlayersTable";
    import EventTable from "../Components/EventTable/EventTable";

    export default {
        name: "GamePage",

        components: {
            EventTable,
            Timeline,
            PlayersTable,
        },

        data() {
            return{
                events: [
                    new EventTimeData("0:05", "penalty for folan team", "charand charand"),
                    new EventTimeData("9:12", "things are weird", "hello hello hello")
                ],

                bestPlayer: new this.player("Best!!", "-"),

                inPlayers: [new this.player("In 1", "25:03"), new this.player("In 2", "20:09")],

                savePlayers: [new this.player("bench 1", "25:03"), new this.player("bench 2", "20:09")],

                penalties: [new this.evePen("offside", "46:00", "Real Madrid"), new this.evePen("hand", "32:23", "Barcelona")],

                corners: [new this.evePen("corner", "23:32", "Real Madrid")],

                goals: new this.goal("Real Madrid", "Barcelona", "2", "1"),

                goalOpp: new this.goal("Real Madrid", "Barcelona", "5", "3"),
            }
        },

        methods: {
            player: function(name, subTime) {
                this.name = name;
                this.subTime = subTime
            },

            evePen: function(type, time, team) {
              this.typ = type;
              this.time = time;
              this.team = team;
            },

            goal: function(team1, team2, scr1, scr2) {
                this.team1 = team1;
                this.team2 = team2;
                this.scr1 = scr1;
                this.scr2= scr2
            }

        }
    }
</script>

<style scoped>
</style>
