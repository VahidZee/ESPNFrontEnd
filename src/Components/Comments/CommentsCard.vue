<template>
    <sui-comment-group class="commentStyle">
        <sui-comment >
            <sui-comment-avatar :src="commentData.userPicture"  />
            <sui-comment-content>
                <a is="sui-comment-author">{{commentData.userName}}</a>
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
                            <sui-icon name="heart" /> {{commentData.likesCount}}
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
            'comment-data' : {
                type : Object,
                default: () => {
                    return {
                        id: null,
                        userName : null,
                        userPicture : null,
                        publishDate : null,
                        text: null,
                        likesCount : -1,
                        liked : false,
                        replies : []
                    }
                }
            },

        } ,
        methods : {

        },
        filters : {
            formatDate( date ) {
                let diff_date = new Date() - date ;
                let seconds = Math.floor( diff_date / 1000 );
                if( seconds ===0 )
                    return 'now';
                if( seconds < 60  )
                    return seconds +'s';
                let minutes = Math.floor( seconds / 60 );
                if( minutes < 60  )
                    return minutes + 'm';
                let hours = Math.floor( minutes / 60 );
                if( hours < 24  )
                    return hours + 'h';
                let days = Math.floor( hours / 24 );
                if( days < 356  )
                    return hours + 'd';
                let years = Math.floor( days / 356 );
                if( years < 356  )
                    return years + 'y';
            }
        }
    }
</script>

<style scoped>
    .commentStyle{
        border-left-width: 1px;
        border-left-color: lightgray;
        border-left-style: solid;
        padding-left: 5px;
        margin:0;
    }
</style>