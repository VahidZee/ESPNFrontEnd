<template>
    <sui-comment-group class="commentStyle">
        <sui-comment>
            <sui-comment-avatar
                    v-if="commentData.userInfo.profile_picture"
                    :src="this.$store.getters.BackEndURL + commentData.userInfo.profile_picture"
            />

            <sui-comment-content>
                <a is="sui-comment-author">{{commentData.userInfo.username}}</a>
                <sui-comment-metadata>
                    <div>{{commentData.publishDate | formatDate}}</div>
                </sui-comment-metadata>
                <sui-comment-text>{{commentData.text}}</sui-comment-text>
                <sui-comment-actions>
                    <sui-comment-action>
                        <sui-button is="sui-label">
                            Reply
                        </sui-button>
                    </sui-comment-action>
                    <sui-comment-action>
                        <sui-button is="sui-label">
                            <sui-icon name="heart"/>
                            {{commentData.likesCount}}
                        </sui-button>
                    </sui-comment-action>
                </sui-comment-actions>
            </sui-comment-content>
            <sui-comment-group>
                <comments-card
                        v-for="( com , i ) in commentData.replies"
                        :key="'reply-' + commentData.id + '-' + i"
                        :comment-data="com"
                ></comments-card>
            </sui-comment-group>
        </sui-comment>
    </sui-comment-group>

</template>

<script>
    export default {
        name: "CommentsCard",
        components: {},
        props: {
            'comment-data': {
                type: Object,
                required: true
            },

        },
        methods: {},
        filters: {
            formatDate(date) {

                let seconds = Math.floor((new Date() - date) / 1000);

                let interval = Math.floor(seconds / 31536000);

                if (interval > 1) {
                    return interval + " years ago";
                }
                interval = Math.floor(seconds / 2592000);
                if (interval > 1) {
                    return interval + " months ago";
                }
                interval = Math.floor(seconds / 86400);
                if (interval > 1) {
                    return interval + " days ago";
                }
                interval = Math.floor(seconds / 3600);
                if (interval > 1) {
                    return interval + " hours ago";
                }
                interval = Math.floor(seconds / 60);
                if (interval > 1) {
                    return interval + " minutes ago";
                }
                return Math.floor(seconds) + " seconds ago";
            }
        },
        created() {
            this.commentData.publishDate = new Date(this.commentData.publishDate);
            console.log(this.commentData.replys)
        }
    }
</script>

<style scoped>
    .commentStyle {
        border-left-width: 1px;
        border-left-color: lightgray;
        border-left-style: solid;
        padding-left: 5px;
        margin: 0;
    }
</style>