<template>
    <div style="min-width: 200px; max-width: 200px; margin-right: 20px;">
    <sui-card>
        <!--<sui-reveal animated="move">-->
            <!--<sui-reveal-content visible>-->
                <sui-image :src="imgSrc" />
            <!--</sui-reveal-content>-->
            <!--<sui-reveal-content hidden>-->
                <!--<sui-image src="https://picsum.photos/200/200/?random6" />-->

            <!--</sui-reveal-content>-->
        <!--</sui-reveal>-->
        <sui-card-content>
            <sui-card-header>{{playerName}}</sui-card-header>
            <sui-card-meta>{{post}}</sui-card-meta>
        </sui-card-content>
        <!--<sui-card-content extra>-->
            <!--<sui-icon name="users"/>-->
            <!--2 Members-->
        <!--</sui-card-content>-->
    </sui-card>
    </div>
</template>

<script>
    export default {
        name: "TeamPl",
        props: {
            playerName: String,
            imgSrc: String,
            filter: {
                type: String,
                default: 'All'
            },
            post: String,
            link: String
        }
    }
</script>

<style scoped>

</style>
