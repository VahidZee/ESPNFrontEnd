<template>

    <div class="pageContainer" :style="pageBackground">
        <divider
                type="top"
                height="20vh"
                :background-image="'url(\'../Images/bg' + ( gameData.id * 100 ) % 49 + '.jpeg\')'" />

        <div  class="header-container back" :style="titleBackground">
            <div class="fore" >
                <game-card class="titleCard" :is-link="false" :game-data="gameData" />
            </div>
        </div>
        <sui-grid :columns="3">
        <sui-grid-row>
            <sui-grid-column :width="6">
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
        <divider
                type="middle"
                height="3vh"
                :background-image="'url(\'../Images/bg' + ( gameData.id * 100 ) % 49 + '.jpeg\')'" />
        <comments-list></comments-list>
        <divider
                type="top"
                height="2vh"
                :background-image="'url(\'../Images/bg' + ( gameData.id * 100 ) % 49 + '.jpeg\')'" />
        <news-list  title="Related News"
                    :background-image="'url(\'../Images/bg' + ( gameData.id * 100 ) % 49 + '.jpeg\')'"
                    :related="getTags()"

        ></news-list>

        <divider
                type="down"
                height="5vh"
                :background-image="'url(\'../Images/bg' + ( gameData.id * 100 ) % 49 + '.jpeg\')'" />
        <!--<player-list></player-list>-->
    </div>
</template>

<script>
    import PlayersTable from "../Components/PlayersTable/PlayersTable";
    import EventTable from "../Components/EventTable/EventTable";
    import LiveReport from "../Components/LiveReport/LiveReport";
    import Multimedia from "../Components/Multimedia/Multimedia";
    // import EventTimeData from "../Components/TimeLine/EventTimeData.js"
    // import Timeline from "../Components/TimeLine/Timeline"
    import GameCard from "@/Components/Games/GameCard";
    import Divider from "@/Components/PageDivider/Divider";
    import NewsList from "@/Components/News/NewsList";
    import CommentsList from "@/Components/Comments/CommentsList";
    import PlayerList from "@/Components/Players/PlayerList";

    import EventTimeData from "../Components/Timeline/EventTimeData.js"
    import Timeline from "../Components/Timeline/Timeline"

    export default {
        name: "GamePage",
        props: {
            'background-image' : {
                type : String ,
                default : ""
            },
            'game-data' : {
                type : Object,

            }
        },
        components: {
            PlayerList,
            CommentsList,
            NewsList,
            Divider,
            GameCard,
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

            }
        },

        computed: {
            pageBackground : function () {
                return {
                    backgroundImage : this.backgroundImage,
                }
            },
            titleBackground() {
                return {
                    backgroundImage: 'url(\'../Images/bg' + ( this.gameData.id * 100 ) % 49 + '.jpeg\')'
                }
            },

        },

        methods: {
            //TODO remove
            generateData() {
                let value = Math.floor((Math.random() * 1000) + 1);
                let teamNames = [
                    'ABC' ,
                    'EFG' ,
                    'MCU' ,
                    'FAN' ,
                    'ASA' ,
                    'MIM' ,
                    'BFC' ,
                    'BIW' ,
                    'ESS' ,
                    'RMD'
                ]

                return {
                    id: value,
                    date: new Date(),
                    type: 'Eu Cup' ,
                    isSubscribed: (value % 6 === 0 || value % 6 === 2 || value % 7 === 6 ),
                    sportType: (!((value % 7 === 0 || value % 7 === 2 || value % 7 === 6 ))) ? 'Basketball' : 'Football',
                    state: ( value%3 === 0 ) ? 'Finished' : ( value%3 === 1 ) ? 'Upcomming' : 'Live' ,
                    team1: {
                        logo:  'https://picsum.photos/150/150/?random' + (value * 20),
                        name: teamNames[value % 10],
                        score : (value * 313  + value % 4 ) % 7
                    },
                    team2: {
                        logo:  'https://picsum.photos/150/150/?random' + (value * 10),
                        name: teamNames[(value + 1 ) % 10],
                        score : (value * 313  + value % 2 ) % 7
                    }
                }
            },

            //Data Fetch
            fetchData() {
                this.gameData = this.generateData();
            },
            getTags() {
                let arr = [];

                arr.push( {
                    type : 'team',
                    id : Math.floor((Math.random() * 1000) + 1),
                    title : 'Team - ' + this.gameData.team1.name,
                } );
                arr.push( {
                    type : 'team',
                    id : Math.floor((Math.random() * 1000) + 1),
                    title : 'Team - ' + this.gameData.team2.name,
                } );
                arr.push( {
                    type : 'team',
                    id : Math.floor((Math.random() * 1000) + 1),
                    title : 'Game - ' + this.gameData.id,
                } );
                return arr;
            },
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

        },
        beforeMount() {
            this.fetchData();
        }
    }
</script>

<style scoped>
    .header-container{


    }
    .pageContainer {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        /*align-items: start;*/
        background-attachment : fixed;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    .header-container{

    }
    .back{
        background-attachment : fixed;
        background-size: cover;
        background-repeat:  no-repeat;
        background-position: center
    }
    .fore{
        background-image: linear-gradient( #00000000 , #00000000, #000000aa , #000000cc ,#000000ff);
        width: 100%;
        height: 100%;
        padding-top: 10px;
        padding-bottom: 10px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
    }
    /*.titleCard {*/
        /*z-index: 2;*/
        /*position: relative;*/
        /*bottom: -75px;*/
    /*}*/
</style>
