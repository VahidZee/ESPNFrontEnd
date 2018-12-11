<template>
        <div class="newsList">

            <NewsCard v-for="i in 100"  :key="i" :news-id="i " :news-title="'Title ' + i " news-is-subscribed="true" :news-has-image="(i%6 == 1 || i %6 == 3 || i % 6 == 0 )" news-publish-date="2d" :news-description="lorem"> </NewsCard>
        </div>

</template>

<script>
    import NewsCard from "@/Components/News/NewsCard";
    export default {
        name: "NewsList",
        components: { NewsCard},

        data() {
            return {
                lorem: '        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam consectetur explicabo facere facilis in inventore nihil quod temporibus velit? A accusamus ad consequuntur deserunt dolores harum reprehenderit! Eos, nostrum.\n'
            }
        }
    }
</script>

<style scoped>
    .newsList{
        background-color: #00000011;
        width:100vw;
        min-height: 500px;
        max-height:  80vh;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;


        overflow-y: hidden;
        overflow-x: auto;
    }
    .newsList::-webkit-scrollbar {
        width: 0px;  /* remove scrollbar space */
        background: transparent;  /* optional: just make scrollbar invisible */
    }
    .newsList>*{
        margin:5px
    }

</style>