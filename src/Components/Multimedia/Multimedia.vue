<template>
    <div class="cnt hor">
        <multicard img-link="https://picsum.photos/200/200/?random1" :data-img="dataImg" :content="true"></multicard>
        <multicard img-link="https://picsum.photos/200/200/?random2" :data-img="dataImg" :content="true"></multicard>
        <multicard img-link="https://picsum.photos/200/200/?random3" :content="false"></multicard>
        <multicard img-link="https://picsum.photos/200/200/?random4" :data-img="dataImg" :content="true"></multicard>
        <multicard img-link="https://picsum.photos/200/200/?random5" :content="false"></multicard>
        <multicard img-link="https://picsum.photos/200/200/?random6" :content="false"></multicard>
        <!--<MultiVideo></MultiVideo>-->
    </div>
</template>

<script>
    import Multicard from "./Multicard";
    import MultiVideo from "./MultiVideo";

    export default {
        name: "Multimedia",
        components: {MultiVideo, Multicard},
        methods: {
            makeImage: function (n) {
                return "https://picsum.photos/200/200/?random" + n
            }
        },
        data() {
            return {
                link: 'https://picsum.photos/200/200/?random',
                dataImg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam consectetur explicabo facere facilis in inventore nihil quod temporibus velit? A accusamus ad consequuntur deserunt dolores harum reprehenderit! Eos, nostrum.'
            }
        }
    }
</script>

<style scoped>
    .hor {
        display: flex;
        flex-direction: row;
        /*flex-wrap: wrap;*/
        justify-content: center;
        align-content: flex-start;
        align-items: center;
        /*overflow-y: hidden;*/
        overflow-x: scroll;
    }
</style>
