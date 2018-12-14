<template>
    <sui-table-row>
        <sui-table-cell>{{teamF}}</sui-table-cell>
        <sui-table-cell>{{scoreF}}-{{scoreS}}</sui-table-cell>
        <sui-table-cell>{{teamS}}</sui-table-cell>
    </sui-table-row>
</template>

<script>
    export default {
        name: "MatchRow",
        props: [
            'team-f',
            'team-s',
            'score-f',
            'score-s'
        ]
    }
</script>

<style scoped>

</style>
