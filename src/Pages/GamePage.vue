<template>
    <div class="gameCnt" :style="backgroundHandle">
        <sui-grid :columns="3">
        <sui-grid-row>
            <sui-grid-column :width="4">
                <Timeline :events="events"></Timeline>
                <PlayersTable :best-player="bestPlayer" :in-players="inPlayers"
                              :save-players="savePlayers"></PlayersTable>
            </sui-grid-column>
            <sui-grid-column :width="10">
                <EventTable :penalties="penalties" :corners="corners" :goals="goals" :goal-opp="goalOpp"></EventTable>
                <LiveReport></LiveReport>
                <Multimedia></Multimedia>
            </sui-grid-column>
        </sui-grid-row>
        </sui-grid>
    </div>
</template>

<script>
    import PlayersTable from "../Components/PlayersTable/PlayersTable";
    import EventTable from "../Components/EventTable/EventTable";
    import LiveReport from "../Components/LiveReport/LiveReport";
    import Multimedia from "../Components/Multimedia/Multimedia";
    import EventTimeData from "../Components/Timeline/EventTimeData.js"
    import Timeline from "../Components/Timeline/Timeline"

    export default {
        name: "GamePage",

        components: {
            Multimedia,
            LiveReport,
            EventTable,
            Timeline,
            PlayersTable,
        },

        data() {
            return {
                events: [
                    new EventTimeData("0:05", "penalty for folan team", "charand charand"),
                    new EventTimeData("9:12", "things are weird", "hello hello hello"),
                    new EventTimeData("21:12", "things are weird", "'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam consectetur explicabo facere facilis in inventore nihil quod temporibus velit? A accusamus ad consequuntur deserunt dolores harum reprehenderit! Eos, nostrum.'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam consectetur explicabo facere facilis in inventore nihil quod temporibus velit? A accusamus ad consequuntur deserunt dolores harum reprehenderit! Eos, nostrum.',',"),
                    new EventTimeData("32:12", "things are weird", "hello hello hello"),
                    new EventTimeData("41:12", "things are weird", "hello hello hello"),
                ],

                bestPlayer: new this.player("Best!!", "-"),

                inPlayers: [new this.player("In 1", "25:03"), new this.player("In 2", "20:09")],

                savePlayers: [new this.player("bench 1", "25:03"), new this.player("bench 2", "20:09")],

                penalties: [new this.evePen("offside", "46:00", "Real Madrid"), new this.evePen("hand", "32:23", "Barcelona")],

                corners: [new this.evePen("corner", "23:32", "Real Madrid")],

                goals: new this.goal("Real Madrid", "Barcelona", "2", "1"),

                goalOpp: new this.goal("Real Madrid", "Barcelona", "5", "3"),

                backgroundImage: "url('/Images/bg12.jpeg')"
            }
        },

        computed: {
            backgroundHandle : function () {
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
            player: function (name, subTime) {
                this.name = name;
                this.subTime = subTime
            },

            evePen: function (type, time, team) {
                this.typ = type;
                this.time = time;
                this.team = team;
            },

            goal: function (team1, team2, scr1, scr2) {
                this.team1 = team1;
                this.team2 = team2;
                this.scr1 = scr1;
                this.scr2 = scr2
            }

        }
    }
</script>

<style scoped>
    .gameCnt {
        background-color: black;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        /*align-items: start;*/
    }
</style>
