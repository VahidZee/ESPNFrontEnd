<template>
    <div class="gameCnt">
        <GameTable></GameTable>

    </div>
</template>

<script>

    import GameTable from "../Components/GameTable/GameTable";
    export default {
        name: "LeaguePage",
        components: {GameTable}
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
