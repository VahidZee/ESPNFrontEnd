<template>
    <sui-comment-group>


        <sui-comment>
            <sui-comment-avatar src="#" />
            <sui-comment-content>
                <a is="sui-comment-author">{{ commentUserName }}</a>
                <sui-comment-metadata>
                    <div>{{ commentsDate }}</div>
                </sui-comment-metadata>
                <sui-comment-text>{{ commentsDescription }}</sui-comment-text>
                <sui-comment-actions>
                    <sui-comment-action>Reply</sui-comment-action>
                </sui-comment-actions>
            </sui-comment-content>
        </sui-comment>
    </sui-comment-group>
</template>

<script>
    export default {
        name: "CommentsCard",
        props: [ 'commentUserName', 'commentsDate', 'commentsDescription']
    }
</script>

<style scoped>

</style>