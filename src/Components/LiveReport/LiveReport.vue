<template>
    <div class="cnt">
        <sui-table definition inverted>
            <sui-table-body>
                <LiveRow :description="lorem + lorem" game-time="00:05"></LiveRow>
                <LiveRow :description="lorem" game-time="25:00"></LiveRow>
                <LiveRow :description="lorem + lorem + lorem" game-time="40:00"></LiveRow>
            </sui-table-body>
        </sui-table>
    </div>
</template>

<script>
    import LiveRow from "./LiveRow";
    export default {
        name: "LiveReport",
        components: {LiveRow},
        data() {
            return {
                lorem: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam consectetur explicabo facere facilis in inventore nihil quod temporibus velit? A accusamus ad consequuntur deserunt dolores harum reprehenderit! Eos, nostrum.\n',
            }
        }
    }
</script>

<style scoped>

</style>
