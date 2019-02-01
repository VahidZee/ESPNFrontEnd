<template>
    <div>
        <sui-container text style="margin: 10px;">
            <h3 is="sui-header" style="padding: 10px 0px" dividing> {{'Comments ' + comments.length}}</h3>
            <sui-comment-group :style="commentListSizing" class="comment-list">
                <div></div>
                <comments-card v-for="(com , i) in comments"
                               :key="'comment-' + i "
                               :comment-data="com"
                ></comments-card>
            </sui-comment-group>
                <sui-input placeholder="Add Comment" icon="send" style="width: 100%" />

        </sui-container>
    </div>
</template>

<script>
    import CommentsCard from "./CommentsCard";
    export default {
        name: "CommentsList",
        components: {CommentsCard},
        props : {
            width: {
                type : String,
                default : '100vw'
            },
            'background-image' : {
                type: String,
            },
            height : {
                type : String,
                default: '30vh'
            },
        },
        data() {
            return {
                comments : []
            }
        },
        methods: {
            generateData(i = 1, level = 1) {
                let lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam consectetur explicabo facere facilis in inventore nihil quod temporibus velit? A accusamus ad consequuntur deserunt dolores harum reprehenderit! Eos, nostrum.\n';
                let randNumber = Math.floor((Math.random() * 313) + 1) % 3;
                if( level === 4 )
                    return null;
                let obj = {
                    id: i,
                    userName : 'User-' + Math.floor((Math.random() * 313) + 1) % 45,
                    userPicture : '../Images/bg'+ Math.floor((Math.random() * 313) + 1) % 45 + '.jpeg',
                    publishDate : new Date(),
                    text: ( i % 3 === 1 ) ? lorem + lorem : ( i % 3 ) ? lorem + lorem + lorem : lorem,
                    likesCount : Math.floor((Math.random() * 313) + 1),
                    liked : false,
                    replies : []
                };
                for( let x = 1 ; x <= randNumber ; x++ ) {
                    let temp= this.generateData(i , level + 1)
                    if(temp )
                        obj.replies.push( temp );

                }
                return obj;
            },
            //Fetching Data
            fetchData() {
                let randNumber = Math.floor((Math.random() * 313) + 1) % 10 + 1;
                for( let x = 1 ; x <= randNumber ; x++ ){
                    let temp= this.generateData(x , 1)
                    if(temp )
                        this.comments.push( temp );
                }
            },
        },
        computed: {
            commentListSizing() {
                return {
                    maxHeight : this.height
                }
            }
        },
        beforeMount() {
            this.fetchData();
        }
    }
</script>

<style scoped>
    .comment-list {
        overflow-y: scroll;
    }
    ::-webkit-scrollbar {
        width: 0px;  /* remove scrollbar space */
        background: transparent;  /* optional: just make scrollbar invisible */
    }
</style>