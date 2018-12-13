<template>
    <sui-table-row>
        <sui-table-cell>{{gameTime}}</sui-table-cell>
        <sui-table-cell>{{description}}</sui-table-cell>
    </sui-table-row>
</template>

<script>
    export default {
        name: "LiveRow",
        props: {
            gameTime: String,
            description: String
        }
    }
</script>

<style scoped>

</style>
