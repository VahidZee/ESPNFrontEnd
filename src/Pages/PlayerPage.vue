<template>
    <div :style="backgroundHandle">
            <ProfilePlayer photo-n="url('/Photos/BG2.jpg')" photo-p="url('/Photos/profile2.png')" name="Lionel Messi"></ProfilePlayer>
            <!--<ProfilePlayer photo-n="url('/Photos/BG.jpg')" photo-p="url('Photos/profile.png')" name="LeBron James"></ProfilePlayer>-->
            <Stats></Stats>
            <PlayerNews news-image="url('Photos/news2.jpg')" name="Lionel Messi"></PlayerNews>
            <!--<PlayerNews news-image="url('Photos/news.jpg')" name="Lebron James"></PlayerNews>-->
    </div>
</template>

<script>

    import ProfilePlayer from "../Components/ProfilePlayer/ProfilePlayer";
    import Stats from "../Components/Stats/Stats";
    import PlayerNews from "../Components/PlayerNews/PlayerNews";
    export default {
        name: "PlayerPage",
        components: { PlayerNews, Stats, ProfilePlayer},
        data() {
            return {
                backgroundImage: "url('/Images/bg36.jpeg')"
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
        }
    }
</script>

<style scoped>

</style>
