<template>
    <router-link tag="div" :to="'/games/' + gameData.id" class="gameCard" >
        <sui-card class="raised link viewPort" @mouseenter="mouseEnter" @mouseleave="mouseleave" >
            <sui-image  :src="gameData.team1.logo" style="width: 150px; height:150px" circular></sui-image>
            <sui-card class="info">
                <sui-card-content  extra>
                    {{gameData.type}}
                    <span slot="right" v-show="gameData.isSubscribed" >
                        Subscribed
                    </span>
                </sui-card-content>
                <sui-card-content class="data" >
                        <div class="data-item">
                            <div>{{gameData.team1.name}}</div>
                            <div class="data-score">{{!(gameData.state === 'Upcomming' ) ? gameData.team1.score : '-'}}</div>
                        </div>
                        <div class="data-item">
                           <span class="data-score">-</span>
                        </div>
                        <div class="data-item">
                            <div>{{gameData.team2.name}}</div>
                            <div class="data-score">{{ !(gameData.state === 'Upcomming' ) ? gameData.team2.score : '-'}}</div>
                        </div>
                        <div class="data-item">
                            {{gameData.state}}
                        </div>
                </sui-card-content>

                <sui-card-content extra >
                    {{gameData.sportType}}
                    <span slot="right" >
                        <sui-icon shape="circular" name="calendar alternate outline icon" ></sui-icon>
                        {{gameData.date | formatDate}}
                    </span>
                </sui-card-content>
            </sui-card>

            <sui-image  :src="gameData.team2.logo" style="width: 150px; height:150px" circular></sui-image>

        </sui-card>
    </router-link>
</template>

<script>
    export default {

        name: "gameCard",
        components: {},
        data() {
            return {
                descriptionLength : (this.gameData.image) ? 200 : 610 ,
                cropActive : true
            }
        },
        props: [ 'game-data' ],
        filters: {
            crop : function( value ,  len , active = true) {
                return (value.length >len && active ) ? value.substr(0 , len) + ' . . .' : value;
            },
            formatDate( date ) {
                let monthNames = [
                    "Jan", "Feb", "Mar",
                    "Apr", "May", "Jun", "Jul",
                    "Aug", "Sep", "Oct",
                    "Nov", "Dec"
                ];

                let day = date.getDate();
                let monthIndex = date.getMonth();
                let year = date.getFullYear();

                return day + ' ' + monthNames[monthIndex] + ' ' + year;

            }
        },
        computed: {
            contentStyle() {

                return (!this.gameData.image) ? { 'height' : 350 + 'px' } : null;
            }
        },
        methods: {
            mouseEnter( ) {
                this.cropActive = false;
            },
            mouseleave( ) {
                this.cropActive = true;
            },
        }
    }
</script>

<style scoped>
    .gameCard{
        max-height: 150px;
        background-color: transparent;

    }
    .viewPort {
        width: 600px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .info {
        margin: 0;
        width: 300px;
        height:150px;
    }
    .info.ui.card .info.ui.card:hover{
        border:none;
        box-shadow: none;
        border-radius: 0;
    }
    .data {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
        text-align: center;
    }
    .data-item {
        text-align: center;
        font-weight: bold;
    }
    .data-score {
        font-weight: bolder;
        font-size: 2rem;
    }
    .card {
        border:none;
        background-color: #ffffff55;
        transition:0.3s ease-in-out;
    }
    .card:hover {
        background-color:#ffffffee;
    }

    .content.extra{
        background-color: #11111155;
        color: #ffffff66

    }
    .cardContent.content{
        background-color: #ffffffaa;
        height: 150px;

        overflow-y: scroll;
    }
    .card:hover .content.extra{
        background-color: #111111ee;
        color: #ffffff55;
    }
    ::-webkit-scrollbar {
        width: 0px;  /* remove scrollbar space */
        background: transparent;  /* optional: just make scrollbar invisible */
    }

</style>