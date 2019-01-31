<template>
    <div class="newsPage">
        <div v-if="newsData">

            <!-- Title -->
            <div  class="content-container " style="position: sticky;top:5px">
                <sui-container text>
                    <div >
                        <h2 class="content-header" >
                            {{newsData.title}}
                        </h2>
                        <span class="content-header-info">

                        <sui-icon shape="circular" name="calendar alternate outline icon" ></sui-icon>
                        {{ newsData.publishDate | formatDate}}
                        <sui-label v-show="newsData.isSubscribed" size="tiny" color="black" >
                            Subscribed
                        </sui-label>
                    </span>
                    </div>
                </sui-container>
            </div>

            <!-- Tags -->
            <div  class="content-container content-header">
                <sui-container text v-show="newsData.tags.length">
                <span  >
                    Tags :
                </span>

                    <router-link
                            v-for="(tag , i ) in newsData.tags"
                            :key="'tag' + i"
                            :to="'/' + tag.type + '/' + tag.id"
                    >
                        <sui-button size="tiny" :content="tag.title" :color="tagColor(tag.type)" style="margin: 2px" />
                    </router-link>
                </sui-container>
            </div>

            <!-- Images -->
            <divider
                    v-show="newsData.images.length"
                    height="2vh"
                    :background-image="'url(\'' + this.newsData.backgroundImage + '\')'"
            />
            <b-carousel
                    v-show="newsData.images.length"
                    :id="'news-carousel' + newsData.id "
                    style="text-shadow: 1px 1px 2px #333;min-height: 100px"
                    controls
                    indicators
                    background="#ababab"
                    :interval="2000"
                    img-width="1024"
                    img-height="480"
                    v-model="slide"

            >

                <b-carousel-slide
                        v-for="(image , i) in newsData.images"
                        :key="'image' + i"
                        :caption="image.caption"
                        :text="image.text"
                        :img-src="image.image"
                />
            </b-carousel>
            <divider
                    height="4vh"
                    :background-image="'url(\'' + this.newsData.backgroundImage + '\')'"
            />

            <!-- Content -->
            <div class="content-container" >
                <sui-container text>
                    <p
                            v-for="(text, i ) in newsData.paragraphs"
                            :key="'paragraph'+ i"
                    >
                        {{text}}
                    </p>
                </sui-container>
            </div>

            <!-- Resources -->
            <divider height="2vh"
                     :background-image="'url(\'' + this.newsData.backgroundImage + '\')'"
            />
            <div  class="content-container content-header">
                <sui-container text v-show="newsData.tags.length">
                <span  >
                    Resources :
                </span>

                    <a
                            v-for="(rec , i ) in newsData.resources"
                            :key="'rec' + i"
                            :href="rec.link"
                    >
                        <sui-button size="tiny" :content="rec.title" style="margin: 2px;"  />
                    </a>
                </sui-container>
            </div>
            <divider  height="2vh"
                      :background-image="'url(\'' + this.newsData.backgroundImage + '\')'"

            />

            <!-- Comments -->
            <comments-list></comments-list>
            <divider type="top" height="2vh"
                     :background-image="'url(\'' + this.newsData.backgroundImage + '\')'"
            />

            <!-- Related News -->
            <news-list  title="Related News"
                        :background-image="'url(\'' + this.newsData.backgroundImage + '\')'"
                        :related="newsData.tags"
            ></news-list>

            <divider
                    type="down"
                    height="2vh"
                    :background-image="'url(\'' + this.newsData.backgroundImage + '\')'"
            />
        </div>

        <sui-message
            v-if="error_message"
            color="red"
        >
            {{ error_message }}
        </sui-message>
    </div>
</template>

<script>
    import Divider from "@/Components/PageDivider/Divider";
    import NewsList from "@/Components/News/NewsList";
    import CommentsList from "@/Components/Comments/CommentsList";
    import axios from 'axios'

    export default {
        name: "NewsPage",
        components: {CommentsList, NewsList, Divider},
        data () {
            return {
                newsData : null,
                slide: 0,
                error_message:'',
            }
        },
        props: {
            'background-image' : {
                type : String ,
                default : "url('./Images/'"
            }
        },
        methods: {
            //Fetching Data
            fetchData() {
                // this.newsData = this.generateData()
                axios
                    .get(this.$store.getters.NewsBackEndURL + this.$route.params.id)
                    .then(response => {
                        let temp = response.data;
                        temp.publishDate = new Date( temp.publishDate );
                        this.newsData = temp;
                    })
                    .catch(error => {
                        this.error_message = 'News Was Not Found'
                    })
            },
            //Styling
            tagColor( tagType ) {
                if( tagType === 'P')
                    return 'blue';
                if( tagType === 'T')
                    return 'green';
                if( tagType === 'G')
                    return 'red';
                return 'black'
            },
            tagNames() {
                let arr = [];
                for(  let shit in this.newsData.tags )
                    arr.push[ shit.title ];
                return arr;
            },
        },
        filters: {
            formatDate( date ) {
                let monthNames = [
                    "Jan", "Feb", "Mar",
                    "Apr", "May", "Jun", "Jul",
                    "Aug", "Sep", "Oct",
                    "Nov", "Dec"
                ];
                let day = date.getDate();
                let monthIndex = date.getMonth();
                let year = date.getFullYear();
                return day + ' ' + monthNames[monthIndex] + ' ' + year;
            }
        },
        beforeMount() {

            this.fetchData()
        },
        watch: {
            $route( ) {
                this.fetchData();
            }
        }
    }
</script>

<style>
    .newsPage{
        position: static;
        top: 5px;
    }
    .content-container{
        width: 100vw;
        text-align: justify;
        padding: 10px;
    }
    .content-header{
        font-style: italic;
        font-weight: bolder;
        display: inline-block;
    }
    .content-header-info{
        float: right;
    }
</style>