<template>
    <div style="margin: 1rem;">
            <sui-card>
                <sui-card-content>
                    <sui-card-header>{{leagueName}}</sui-card-header>
                    <sui-card-meta>{{message}}</sui-card-meta>
                    <sui-card-description>
                        Champion
                    </sui-card-description>
                </sui-card-content>
                <sui-button attached="bottom">
                    <sui-icon name="asterisk" loading/> Go to page
                </sui-button>
            </sui-card>
    </div>
</template>

<script>
    export default {
        name: "LeagueCard",
        props: ['leagueName', 'message']
    }
</script>

<style scoped>

</style>
