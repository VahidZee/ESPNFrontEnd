<template>
    <div>
        <div class="cnt" :style="listStyle">
            <sui-table inverted>
                <sui-table-header>
                    <sui-table-row>
                        <sui-table-header-cell> </sui-table-header-cell>
                        <sui-table-header-cell>Match</sui-table-header-cell>
                        <sui-table-header-cell></sui-table-header-cell>
                    </sui-table-row>
                </sui-table-header>
                <sui-table-body >
                    <MatchRow v-for="match in matches" v-bind:team-s="match.teamF" v-bind:team-f="match.teamS"
                              v-bind:score-f="match.scoreF" v-bind:score-s="match.scoreS"></MatchRow>
                    <!--<MatchRow team-s="Spain" team-f="France" score-f="3" score-s="2"></MatchRow>-->
                    <!--<MatchRow team-s="Iran" team-f="Russia" score-f="2" score-s="1"></MatchRow>-->
                    <!--<MatchRow team-s="Iran" team-f="Russia" score-f="2" score-s="1"></MatchRow>-->
                    <!--<MatchRow team-s="team" team-f="team" score-f="3" score-s="1"></MatchRow>-->
                </sui-table-body>
            </sui-table>
        </div>
    </div>
</template>

<script>
    import MatchRow from "./MatchRow";
    export default {
        name: "MatchTable",
        components: {MatchRow},
        props: {
            'background-image': String
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


    }
</script>

<style scoped>

</style>
