<template>
        <router-link tag="div" :to="'/news/' + newsId" class="newsCard" >
            <sui-card class="raised link black" @mouseenter="mouseEnter" @mouseleave="mouseleave" >
                <sui-image v-if="newsHasImage" :src="'https://picsum.photos/200/300?image=' + newsId"></sui-image>
                <sui-card-content class="shit">
                    <sui-card-header>
                        {{newsTitle}}
                        <sui-label v-if="newsIsSubscribed" class="right floated" size="tiny" color="black" >
                            Subscribed
                        </sui-label>
                    </sui-card-header>
                    <sui-card-description>
                        <p>{{newsDescription | crop(descriptionLength ,cropActive ) }}</p>
                    </sui-card-description>
                </sui-card-content>
                <sui-card-content extra >
                    Basketball
                    <span slot="right" >
                        <sui-icon  name="calendar alternate outline icon" ></sui-icon>
                        {{newsPublishDate  }}
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
                descriptionLength : 100,
                cropActive : true
            }
        },
        props: [ 'news-id', 'news-title' , 'news-is-subscribed' , 'news-publish-date' , 'news-has-image' , 'news-description' ],
        filters: {
            crop : function( value ,  len , active = true) {
                    return (value.length >len && active ) ? value.substr(0 , len) + ' . . .' : value;
            }
        },
        methods: {
            mouseEnter( ) {
                this.cropActive = false;
            },
            mouseleave( ) {
                this.cropActive = true;
            }

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
    .shit.content{
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