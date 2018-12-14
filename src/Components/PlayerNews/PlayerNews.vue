<template>
    <div class="NewsBox cnt">
        <div :style="newsImageHandle">
            <div class="NewsBoxTitle">
                <h1>{{name}}</h1>
                <h2>News</h2>
            </div>
        </div>
        <table>
           <PlayerNewsCard news-image='url("/Photos/newspic.jpg")'
                           news-text="LeBron James says it will be bittersweet to possibly be
                                playing on the same floor as Dwyane Wade for the last time."
                           news-title="LeBron: Possible last game on court with Wade 'bittersweet'"
                           news-time="1 days ago"
           ></PlayerNewsCard>
            <PlayerNewsCard news-image='url("/Photos/newspic.jpg")'
                            news-text="LeBron James says it will be bittersweet to possibly be
                                playing on the same floor as Dwyane Wade for the last time."
                            news-title="LeBron: Possible last game on court with Wade 'bittersweet'"
                            news-time="1 days ago"
            ></PlayerNewsCard>
            <PlayerNewsCard news-image='url("/Photos/newspic.jpg")'
                            news-text="LeBron James says it will be bittersweet to possibly be
                                playing on the same floor as Dwyane Wade for the last time."
                            news-title="LeBron: Possible last game on court with Wade 'bittersweet'"
                            news-time="1 days ago"
            ></PlayerNewsCard>

        </table>
    </div>
</template>

<script>
    import PlayerNewsCard from "./PlayerNewsCard";
    export default {
        name: "PlayerNews",
        components: {PlayerNewsCard},
        props: {
            newsImage: String,
            name: String
        },
        computed: {
            newsImageHandle : function() {
                return {
                    backgroundPosition: 'right',
                    width: '100%',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    paddingBottom: '100px',
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),' + this.newsImage
                }
            }
        }
    }
</script>

<style scoped>
    .NewsBox {
        background-color: black;
        padding: 5%;
        width: 90%;
        display: block;
        margin: 0 auto;
    }

    .NewsBoxTitle {
        color: white;
    }





</style>
