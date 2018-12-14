<template>
    <div :style="teamBack" class="team">
        <TeamPl player-name="Name!!!" post="post" img-src= "https://picsum.photos/200/200/?random6"></TeamPl>
        <TeamPl player-name="Name!!!" post="post" img-src= "https://picsum.photos/200/200/?random7"></TeamPl>
        <TeamPl player-name="Name!!!" post="post" img-src= "https://picsum.photos/200/200/?random1"></TeamPl>
        <TeamPl player-name="Name!!!" post="post" img-src= "https://picsum.photos/200/200/?random2"></TeamPl>
        <TeamPl player-name="Name!!!" post="post" img-src= "https://picsum.photos/200/200/?random3"></TeamPl>
        <TeamPl player-name="Name!!!" post="post" img-src= "https://picsum.photos/200/200/?random4"></TeamPl>
        <TeamPl player-name="Name!!!" post="post" img-src= "https://picsum.photos/200/200/?random5"></TeamPl>
        <TeamPl player-name="Name!!!" post="post" img-src= "https://picsum.photos/200/200/?random8"></TeamPl>
    </div>
</template>

<script>
    import TeamPl from "./TeamPl";
    export default {
        name: "TeamPlayers",
        components: {TeamPl},
        data() {
            return {
                backgroundImage: "url('Images/bg36.jpeg')"
            }
        },
        computed: {
            teamBack: function () {
                return {
                    backgroundImage : this.backgroundImage,
                    backgroundAttachment : 'fixed',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }
            }
        },
    }
</script>

<style scoped>
.team {
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    flex-grow: 0;
    padding: 6rem;
    justify-content: center;
    align-content: flex-start;
    align-items: center;
    overflow-x: auto
}
</style>
