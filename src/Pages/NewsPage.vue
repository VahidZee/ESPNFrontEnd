<template>
    <div>
        <div v-if="newsData">
            <div  class="content-container ">
                <sui-container text>
                    <div >
                        <h2 class="content-header" >
                            {{newsData.title}}
                        </h2>
                        <span class="content-header-info">

                        <sui-icon shape="circular" name="calendar alternate outline icon" ></sui-icon>
                        {{newsData.publishDate | formatDate}}
                        <sui-label v-show="newsData.isSubscribed" size="tiny" color="black" >
                            Subscribed
                        </sui-label>
                    </span>
                    </div>
                </sui-container>
            </div>
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
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
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

            <comments-list></comments-list>
            <divider type="top" height="2vh"
                     :background-image="'url(\'' + this.newsData.backgroundImage + '\')'"
            />

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
                sliding: null
            }
        },
        props: {
            'background-image' : {
                type : String ,
                default : "url('./Images/'"
            }
        },
        methods: {
            //TODO remove
            generateData() {
                let lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam consectetur explicabo facere facilis in inventore nihil quod temporibus velit? A accusamus ad consequuntur deserunt dolores harum reprehenderit! Eos, nostrum.\n';
                let tempID =  ( this.$route.params.id !=undefined ) ? this.$route.params.id :  Math.floor((Math.random() * 1000) + 1);
                let obj = {
                    id : tempID,
                    title : 'News Title - ' + tempID,
                    isSubscribed : (tempID % 6 === 0 || tempID % 6 === 2 || tempID % 7 === 6 ),
                    paragraphs : [
                    ],
                    images : [
                    ] ,
                    tags : [
                    ],
                    resources : [
                    ],
                    publishDate : new Date( Math.floor((Math.random() * 1000) + 1) )
                };
                let tagTypes = ['P' , 'L' , 'G' , 'T'];
                for( let i = 1 ; i <= tempID % 10 + 1 ; i++ )
                    obj.resources.push({
                        'title' : 'Resource-' + i,
                        'link' : 'https://www.google.com/?q=' + i
                    });
                for( let i = 1 ; i <= tempID % 10 + 1 ; i++ )
                    obj.tags.push(
                        {
                            type : tagTypes[ i % 4 ],
                            id : Math.floor((Math.random() * 1000) + 1),
                            title : tagTypes[ i % 4 ].toUpperCase() +' : ' + i,
                        }
                    );
                for( let i = 1 ; i <= (tempID*113 ) % 20 ; i++ )
                    obj.paragraphs.push(  (i % 5 === 3 ) ? lorem + lorem : (i % 5 === 1 ) ? lorem + lorem + lorem : lorem  );
                for( let i = 1 ; i <= tempID % 20 ; i++ )
                    obj.images.push(
                        {
                            image : 'https://picsum.photos/1024/480/?random=' + Math.floor((Math.random() * 313) + 1) ,
                            caption : ( i % 3 === 1 ) ?  'Picture' + i : null,
                            text : ( i % 5 === 1 || i % 3 === 2 ) ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum' : null
                        }
                    )
                return obj;
            },
            //Fetching Data
            fetchData() {
                // this.newsData = this.generateData()
                axios
                    .get('http://127.0.0.1:8000/news/' + this.$route.params.id)
                    .then(response => {
                        let temp = response.data;
                        temp.publishDate = new Date( temp.publishDate );
                        this.newsData = temp;
                    })
                    .catch(error => {
                        console.log(error)
                        // this.errored = true
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
            onSlideStart (slide) {
                this.sliding = true
            },
            onSlideEnd (slide) {
                this.sliding = false
            }
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