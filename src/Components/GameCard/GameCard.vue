<template>
    <div class="card-container" style="width: 50rem; height: 30rem;">
        <img v-bind:src="game.img1" style="width:50%; float:right;">
        <img v-bind:src="game.img2" style="width: 50%;">
        <div class="content">
            <h1>{{this.game.score1}} - {{this.game.score2}}</h1>
            <p>{{this.game.date}}</p>
            <button type="button" class="btn btn-dark">Subscribe</button>
            <div style="min-height: 1rem;"></div>
        </div>
    </div>
</template>

<script>
    // game: new Game("barca.jpg", "real.jpeg", 1, 2, "97/2/1")

    export default {
        name: "GameCard",

        props: {
            game: Object
        },

        methods: {

        }
    }
</script>

<style scoped>

</style>
