<template>
    <div>
        <div style="background-color: black">
            <sui-button color="black">
                <sui-menu-item right>
                    <sui-input transparent inverted icon="search" placeholder="Search..."/>
                </sui-menu-item>
            </sui-button>
        </div>
        <div class="league">
            <sui-card>
                <sui-card-content>
                    <sui-card-header>In Process</sui-card-header>
                </sui-card-content>
            </sui-card>
            <LeagueCard league-name="league Name" message="In Process" date="97/12/12" link=""></LeagueCard>
            <LeagueCard league-name="league Name" message="In Process" date="97/12/12" link=""></LeagueCard>
            <LeagueCard league-name="league Name" message="In Process" date="97/12/12" link=""></LeagueCard>
            <LeagueCard league-name="league Name" message="In Process" date="97/12/12" link=""></LeagueCard>
            <LeagueCard league-name="league Name" message="In Process" date="97/12/12" link=""></LeagueCard>
            <LeagueCard league-name="league Name" message="In Process" date="97/12/12" link=""></LeagueCard>
            <LeagueCard league-name="league Name" message="In Process" date="97/12/12" link=""></LeagueCard>
            <LeagueCard league-name="league Name" message="In Process" date="97/12/12" link=""></LeagueCard>
            <LeagueCard league-name="league Name" message="In Process" date="97/12/12" link=""></LeagueCard>
            <LeagueCard league-name="league Name" message="In Process" date="97/12/12" link=""></LeagueCard>
            <sui-card>
                <sui-card-content>
                    <sui-card-header>In Process</sui-card-header>
                </sui-card-content>
            </sui-card>
        </div>
        <Divider background-image="url('/Images/bg36.jpeg')"/>
        <div style="background-color: black">
            <sui-button color="black">
                <sui-menu-item right>
                    <sui-input transparent inverted icon="search" placeholder="Search..."/>
                </sui-menu-item>
            </sui-button>
        </div>
        <div class="league">
            <LeagueCard v-for="league in leagues" v-bind:league-name="league.name" v-bind:message="league.status"
                        v-bind:date="league.date" v-bind:link="league.id"></LeagueCard>
            <!--<LeagueCard league-name="league Name" message="Finished" date="97/12/12" link=""></LeagueCard>-->
            <sui-card>
                <sui-card-content>
                    <sui-card-header>Finished</sui-card-header>
                </sui-card-content>
            </sui-card>
        </div>

    </div>
</template>

<script>
    import LeagueCard from "../LeagueCard/LeagueCard";
    import Divider from "../Components/PageDivider/Divider";

    export default {
        name: "LeaguesPage",
        components: {Divider, LeagueCard},
        data() {
            return {
                leagues: null
            }
        },
        methods: {
            getLeaguesData() {
                axios.post(this.$store.getters.NewsBackEndURL + this.$route.params.id)
                    .then(response => {
                        this.leagues = response.data;
                    })
                    .catch(error => {
                        //TODO 404
                        console.log(error)
                        // this.errored = true
                    })
            },
        },
        beforeMount() {
            this.getLeaguesData()
        },
    }
</script>

<style scoped>
    .league {
        display: flex;
        flex-direction: row;
        flex-shrink: 0;
        flex-grow: 0;
        justify-content: center;
        align-content: flex-start;
        align-items: center;
        overflow-x: auto;
        background-color: black;

    }


</style>
