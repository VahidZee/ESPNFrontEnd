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