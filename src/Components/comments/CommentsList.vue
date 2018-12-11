<template>
    <div>
        <comments-card v-for="i in 10" :key="i" :commentUserName="'person' + i" commentsDate="2h" :commentsDescription="lorem"></comments-card>
    </div>
</template>

<script>
    import CommentsCard from "./CommentsCard";
    export default {
        name: "CommentsList",
        components: {CommentsCard},
        data() {
            return {
                lorem: 'one thing that it doesn’t handle that can drive developers (especially those experienced with SEO) mad. That is the process of updating the page title and metadata on route change. Now it makes sense that vue-router doesn’t mess with this. Vue tries to stay out of the head and body elements as much as possible, as they can be rather volatile. But often times you’ll want the title of the browser to change when the pixel'
            }
        }
    }
</script>

<style scoped>

</style>