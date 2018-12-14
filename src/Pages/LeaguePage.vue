<template>
    <div class="gameCnt">
        <sui-grid :columns="2">
            <sui-grid-row>
                <sui-grid-column :width="4">
                    <GameTable background-image="url('/Images/bg3.jpeg')"></GameTable>
                    <MatchTable background-image="url('/Images/bg3.jpeg')"></MatchTable>
                </sui-grid-column>
                <sui-grid-column :width="10">
                    <!--<div style="margin: 5rem;" ></div>-->
                    <Tournament background-image="url('/Images/bg3.jpeg')"></Tournament>
                </sui-grid-column>
            </sui-grid-row>
        </sui-grid>


        <!--<Tournament background-image="url('/Images/bg15.png')"></Tournament>-->
    </div>
</template>

<script>

    import GameTable from "../Components/GameTable/GameTable";
    import Tournament from "../Components/Tournament/Tournament";
    import MatchTable from "../Components/MatchTable/MatchTable";
    export default {
        name: "LeaguePage",
        components: {MatchTable, Tournament, GameTable}
    }

</script>

<style scoped>
    .gameCnt {
        /*background: url('Images/bg3.jpeg');*/
        background-color: black;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        /*align-items: start;*/
    }
</style>
