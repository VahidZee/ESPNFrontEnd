<template>
        <router-link tag="div" :to="'/news/' + newsData.id" class="newsCard" >
            <sui-card class="raised link black" @mouseenter="mouseEnter" @mouseleave="mouseleave" >
                <sui-image v-if="newsData.image" :src="newsData.image" style="width: 300px; height:200px"></sui-image>
                <sui-card-content class="cardContent" :style="contentStyle">
                    <sui-card-header>
                        {{newsData.title}}
                        <sui-label v-if="newsData.isSubscribed" class="right floated" size="tiny" color="black" >
                            Subscribed
                        </sui-label>
                    </sui-card-header>
                    <sui-card-description >
                        <p>{{newsData.description | crop(descriptionLength ,cropActive ) }}</p>
                    </sui-card-description>
                </sui-card-content>
                <sui-card-content extra >
                   {{newsData.sportType}}
                    <span slot="right" >
                        <sui-icon  name="calendar alternate outline icon" ></sui-icon>
                        {{newsData.publishDate | formatDate }}
                    </span>
                </sui-card-content>
            </sui-card>
        </router-link>
</template>

<script>
    export default {

        name: "NewsCard",
        data() {
            return {
                descriptionLength : (this.newsData.image) ? 130 : 560 ,
                cropActive : true
            }
        },
        props: [ 'news-data' ],
        filters: {
            crop : function( value ,  len , active = true) {
                    return (value.length >len && active ) ? value.substr(0 , len) + ' . . .' : value;
            },
            formatDate( date ) {

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
        computed: {
            contentStyle() {

                return (!this.newsData.image) ? { 'height' : 350 + 'px' } : null;
            }
        },
        methods: {
            mouseEnter( ) {
                this.cropActive = false;
            },
            mouseleave( ) {
                this.cropActive = true;
            },
        }
    }
</script>

<style scoped>
    .newsCard{
        max-height: 700px;
        background-color: transparent;

    }

    .card , .card:hover{
        border:none;
        background-color:transparent;
        transition:0.3s ease-in-out;
    }

    .content.extra{
        background-color: #11111155;
        color: #ffffff66

    }
    .cardContent.content{
        background-color: #ffffffaa;
        height: 150px;

        overflow-y: scroll;
    }
    .card:hover .content.extra{
        background-color: #111111ee;
        color: #ffffff55;
    }
    ::-webkit-scrollbar {
        width: 0px;  /* remove scrollbar space */
        background: transparent;  /* optional: just make scrollbar invisible */
    }

</style>