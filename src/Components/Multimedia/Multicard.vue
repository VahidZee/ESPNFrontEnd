<template>
    <div class="cnt multi">
        <sui-reveal v-if="content" animated="move">
            <sui-reveal-content visible>
                <sui-image :src="imgLink" />
            </sui-reveal-content>
            <sui-reveal-content hidden>
                <div class="scr">
                    <p> {{dataImg}} </p>
                </div>
            </sui-reveal-content>
        </sui-reveal>
        <img :src="imgLink" v-else>
    </div>
</template>

<script>
    export default {
        name: "Multicard",

        props: {
            imgLink: String,
            dataImg: String,
            content: Boolean
        }
    }
</script>

<style scoped>
    .multi {
        height: 90%;
        min-width: 200px;
    }

    img {
        width:96%;
    }

    .scr {
        overflow-x: hidden;
        overflow-y: scroll;
    }

</style>
