<template>
    <sui-table-row>
        <sui-table-cell>{{teamName}}</sui-table-cell>
        <sui-table-cell>{{score}}</sui-table-cell>
        <sui-table-cell>{{games}}</sui-table-cell>
    </sui-table-row>
</template>

<script>
    export default {
        name: "TableRow",
        props: ['team-name', 'score', 'games']
    }
</script>

<style scoped>

</style>
