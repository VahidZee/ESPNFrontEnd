<template>
    <div class="cnt">
        Penalties
        <sui-table color="red" inverted>
            <sui-table-header>
                <sui-table-row>
                    <sui-table-header-cell>Penalties</sui-table-header-cell>
                    <sui-table-header-cell>Time</sui-table-header-cell>
                    <sui-table-header-cell>Team</sui-table-header-cell>
                </sui-table-row>
            </sui-table-header>
            <sui-table-body>
                <sui-table-row v-for="(penalty , i) in penalties" :key="'penalty' + i">
                    <sui-table-cell>{{penalty.typ}}</sui-table-cell>
                    <sui-table-cell>{{penalty.time}}</sui-table-cell>
                    <sui-table-cell>{{penalty.team}}</sui-table-cell>
                </sui-table-row>
            </sui-table-body>
        </sui-table>
        Corners
        <sui-table color="orange" inverted>
            <sui-table-header>
                <sui-table-row>
                    <sui-table-header-cell>Time</sui-table-header-cell>
                    <sui-table-header-cell>Team</sui-table-header-cell>
                </sui-table-row>
            </sui-table-header>
            <sui-table-body>
                <sui-table-row v-for="(corner , i) in corners" :key="'shit' + i">
                    <sui-table-cell>{{corner.time}}</sui-table-cell>
                    <sui-table-cell>{{corner.team}}</sui-table-cell>
                </sui-table-row>
            </sui-table-body>
        </sui-table>
        Goals
        <sui-table color="yellow" inverted>
            <sui-table-header>
                <sui-table-row>
                    <sui-table-header-cell>{{goals.team1}}</sui-table-header-cell>
                    <sui-table-header-cell>{{goals.team2}}</sui-table-header-cell>
                </sui-table-row>
            </sui-table-header>
            <sui-table-body>
                <sui-table-row>
                    <sui-table-cell>{{goals.scr1}}</sui-table-cell>
                    <sui-table-cell>{{goals.scr2}}</sui-table-cell>
                </sui-table-row>
            </sui-table-body>
        </sui-table>
        Goal Opportunities
        <sui-table color="olive" inverted>
            <sui-table-header>
                <sui-table-row>
                    <sui-table-header-cell>{{goalOpp.team1}}</sui-table-header-cell>
                    <sui-table-header-cell>{{goalOpp.team2}}</sui-table-header-cell>
                </sui-table-row>
            </sui-table-header>
            <sui-table-body>
                <sui-table-row>
                    <sui-table-cell>{{goalOpp.scr1}}</sui-table-cell>
                    <sui-table-cell>{{goalOpp.scr2}}</sui-table-cell>
                </sui-table-row>
            </sui-table-body>
        </sui-table>
    </div>
</template>

<script>
    export default {
        name: "EventTable",

        props: {
            penalties: Array,
            corners: Array,
            goals: Object,
            goalOpp: Object
        },

    }
</script>

<style scoped>

</style>
