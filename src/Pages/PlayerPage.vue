<template>
    <div :style="backgroundHandle">
            <ProfilePlayer photo-n="url('/Photos/BG2.jpg')" v-bind:photo-p="url(image)" v-bind:player="response"></ProfilePlayer>
            <!--<ProfilePlayer photo-n="url('/Photos/BG.jpg')" photo-p="url('Photos/profile.png')" name="LeBron James"></ProfilePlayer>-->
            <Stats v-bind:stats=stats></Stats>
            <!--<PlayerNews news-image="url('Photos/news2.jpg')" name="Lionel Messi"></PlayerNews>-->
            <div style="margin: 5rem"></div>
            <NewsList title="Player News"></NewsList>
            <!--<PlayerNews news-image="url('Photos/news.jpg')" name="Lebron James"></PlayerNews>-->
    </div>
</template>

<script>

    import ProfilePlayer from "../Components/ProfilePlayer/ProfilePlayer";
    import Stats from "../Components/Stats/Stats";
    import PlayerNews from "../Components/PlayerNews/PlayerNews";
    import NewsList from "../Components/News/NewsList";
    import Divider from "../Components/PageDivider/Divider";
    export default {
        name: "PlayerPage",
        components: {NewsList, PlayerNews, Stats, ProfilePlayer},
        data() {
            return {
                id : 1,
                backgroundImage: "url('/Images/bg36.jpeg')",
                response: "",
                image: "",
                stats: "",
            }
        },

        computed: {
            backgroundHandle: function () {
                return {
                    marginTop: '-30px',
                    backgroundImage: this.backgroundImage,
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }
            }
        },

        methods: {
            getPlayerData() {
                axios.post(this.$store.getters.NewsBackEndURL + this.$route.params.id)
                    .then(response => {
                        this.response = response.data;
                        this.stats = this.response.stats
                        this.image = '/Photos/' + this.response.image
                    })
                    .catch(error => {
                        //TODO 404
                        console.log(error)
                        // this.errored = true
                    })
            },
        },
        beforeMount() {
            this.getPlayerData()
        },
    }
</script>

<style scoped>

</style>
