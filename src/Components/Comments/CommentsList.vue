<template>
    <div>
        <sui-container text style="margin: 10px;">
            <h3 is="sui-header" style="padding: 10px 0px" dividing> {{'Comments ' + comments.length}}</h3>
            <!-- Comments -->
            <sui-comment-group
                    :style="commentListSizing"
                    class="comment-list"

            >
                <!-- Comment Cards -->
                <comments-card v-for="(com , i) in comments"
                               :key="'comment-' + i "
                               :comment-data="com"
                               @selectReply="commentSelectedToReply"
                ></comments-card>
                <!-- Load More Button -->
                <sui-button @click="fetchData()"
                            style="margin:30px 0;"
                            v-if="has_more"
                            color="black"
                            size="small"
                            fluid
                >
                    Load More
                </sui-button>

                <!-- No More Items Found Message -->
                <sui-message
                        v-if="!has_more"
                        style="margin: 50px;text-align: center"
                        size="small"
                        color="black"

                        fluid
                >
                    No more items were found!
                </sui-message>
            </sui-comment-group>

            <sui-form
                    @submit.prevent="submitComment"
                    v-if="this.logged_in"

            >
                <sui-input
                        :placeholder="place_holder"
                        icon="send"
                        style="width: 100%"
                        v-model="comment_text"
                />
            </sui-form>


        </sui-container>
    </div>
</template>

<script>
    import CommentsCard from "./CommentsCard";
    import axios from 'axios'

    export default {
        name: "CommentsList",
        components: {CommentsCard},
        props: {

            //Styling
            width: {
                type: String,
                default: '100vw'
            },

            height: {
                type: String,
                default: '30vh'
            },
            'background-image': {
                type: String,
            },

            //Field unification
            'field-type': {
                type: String,
                default: 'N',
            },
            'field-id': {
                type: String,
                required: true,
            }

        },
        data() {
            return {
                //Comments
                comments: [],
                has_more: true,
                page_number: 1,

                //New Comment Fields
                comment_text: '',
                place_holder: 'Add a new comment',
                selectedComment: null,
            }
        },
        methods: {
            //Fetching Data
            fetchData() {
                let data = {};
                if (this.logged_in)
                    data['token'] = this.$store.state.token;

                axios
                    .post(
                        this.$store.getters.CommentBackEndURL + this.fieldId + '?type=' + this.fieldType + '&page=' + this.page_number
                        , data
                    )
                    .then(
                        response => {
                            if (response.data.ok) {
                                this.has_more = response.data.has_more;
                                this.comments = this.comments.concat(response.data.list);
                                this.page_number++;
                            }

                        }
                    )

            },
            submitComment() {
                let data = {
                    text: this.comment_text,
                };
                if (this.logged_in)
                    data['token'] = this.$store.state.token;
                else
                    return;
                if (this.selectedComment)
                    data['replyToID'] = this.selectedComment.id;

                axios
                    .post(
                        this.$store.getters.CommentBackEndURL + 'submit/' + this.fieldId + '?type=' + this.fieldType
                        , data
                    )
                    .then(
                        response => {
                            if (response.data.ok) {
                                this.page_number = 1;
                                this.comments = [];
                                this.fetchData();
                                this.place_holder = 'Add a new comment';
                                this.comment_text = '';
                            } else {
                                console.log('Error While Submitting your Comment : ' +response.data.description);
                            }
                        }
                    )
            },
            commentSelectedToReply(value) {
                if (this.selectedComment)
                    if (this.selectedComment.id === value.id) {
                        this.selectedComment = null;
                        this.place_holder = 'Add a new comment'
                    } else {
                        this.selectedComment = value;
                        this.place_holder = 'Reply to ' + this.selectedComment.userInfo.username;
                    }
                else {
                    this.selectedComment = value;
                    this.place_holder = 'Reply to @' + this.selectedComment.userInfo.username;
                }
            },
            commentUnselectedToReply() {
                this.selectedComment = null;
            }
        },
        computed: {
            commentListSizing() {
                return {
                    maxHeight: this.height
                }
            },
            logged_in() {
                return this.$store.getters.is_logged_in
            },
        },
        watch: {
            $route() {
                this.page_number = 1;
                this.comments = [];
                this.fetchData();
            },
            logged_in() {
                this.page_number = 1;
                this.comments = [];
                this.fetchData();
            },
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
        width: 0px; /* remove scrollbar space */
        background: transparent; /* optional: just make scrollbar invisible */
    }
</style>