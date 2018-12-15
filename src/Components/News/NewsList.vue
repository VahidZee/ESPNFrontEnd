<template>
        <div class="newsList" :style="listStyle" :class="{ 'related' : related.length }">
            <sui-menu class="controlBar" inverted vertical floated :class="{ 'related-menu' : related.length }">
                <sui-menu-item class="controlBarHeader" header>
                    {{ title }}
                </sui-menu-item>
                <sui-menu-item v-show="related.length"  class="controlBarHeader" header >
                    Tags
                    <sui-icon name="long arrow alternate down"></sui-icon>
                </sui-menu-item>
                <sui-menu-item
                        v-for="(item, itemKey) in related"
                        :key="'tag' +itemKey"
                >
                    {{item.title}}
                </sui-menu-item>
                <sui-menu-item
                        v-show="controlOptions.length && !related.length"
                        v-for="(item, itemKey) in controlOptions"
                        :key="'controlItem' +itemKey"
                        @click="selectControl(item)"
                        :active="isActive(item)"

                >
                    {{item}}
                </sui-menu-item>
                <sui-dropdown
                        v-show="filterOptions && !related.length"
                        text="Filter"
                        item
                        labeled
                        v-model="activeFilter"
                        :options="filterOptions"
                >
                </sui-dropdown>
            </sui-menu>
            <div class="viewPort" :class="{ 'related' : !related.length }">
                <NewsCard
                        v-for="post in posts"
                        :key="post.id"
                        :news-data="post"
                        v-show="filtered(post)"
                ></NewsCard>
            </div>
        </div>

</template>

<script>
    import NewsCard from "@/Components/News/NewsCard";

    export default {
        name: "NewsList",
        components: { NewsCard},
        props : {
                'background-image' : {
                    type : String,
                    default : 'radial-gradient(#00002299 , #222222cc)'
                } ,
                'title' : {
                    type : String,
                    required : true
                } ,
                'control-options' : {
                    type : Array,
                    default : () => {
                        return ['Recent' ,'Subscribed' ];
                    }
                } ,
                'default-active' : {
                    type: String,
                    default : 'Recent'
                } ,
                'filter-options' : {
                    type : Array,
                    default: () => {
                        return [
                            {
                                key : "All",
                                text : "All",
                                value: null
                            },
                            {
                                key : "Basketball",
                                text : "Basketball",
                                icon : "basketball ball",
                                value: "Basketball"
                            },
                            {
                                key : "Football",
                                text : "Football",
                                icon : "futbol",
                                value: "Football"
                            }
                        ]
                    }

                } ,
                'auth' : {
                    type: Boolean,
                    default: false
                },
                'related' : {
                    type : Array,
                    default : function() {
                        return []
                    }

                },

            } ,
        data() {
            return {
                activeControl : this.defaultActive,
                activeFilter: null,
                posts: []
            }
        },

        //Computed Methods
        computed: {
            listStyle : function () {
                return {
                    backgroundImage : this.backgroundImage,
                    backgroundAttachment : 'fixed',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }
            },

        },

        //Methods
        methods : {
            //TODO remove Lorem ipsum
            generateData(value) {
                let lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam consectetur explicabo facere facilis in inventore nihil quod temporibus velit? A accusamus ad consequuntur deserunt dolores harum reprehenderit! Eos, nostrum.\n';
                    return {
                    id: value,
                    publishDate: new Date(),
                    description : lorem + lorem + lorem + lorem + lorem + lorem,
                    title : ('Title ' + value),
                    isSubscribed: (value % 6 === 0 || value % 6 === 2 || value % 7 === 6 ) && !this.related.length,
                    sportType: (!((value % 7 === 0 || value % 7 === 2 || value % 7 === 6 ))) ? 'Basketball' : 'Football',
                    image: (value % 7 === 1 || value % 7 === 4)? 'https://picsum.photos/300/200/?random' + value : ''
                }
            },

            //Data Filtering
            filtered(post) {
                if( this.activeFilter === null &&  (this.activeControl === 'Recent') )
                    return true;
                if( this.activeFilter === null && !(this.activeControl === 'Recent') )
                    return post.isSubscribed;
                if( !(this.activeFilter === null) && (this.activeControl === 'Recent') )
                    return this.activeFilter === post.sportType;
                return this.activeFilter === post.sportType && post.isSubscribed;

            },
            //Data Fetching
            getNews() {
                for( let i = 1 ; i < 100  ; i++ )
                    this.posts.push( this.generateData(i));
            },

            //ControlBar Methods
            selectControl(item){
                if( item === 'Subscribed' )
                    this.activeControl = ( this.auth ) ? item : this.activeControl;
                else
                    this.activeControl = item;
            },
            isActive(name) {
                return this.activeControl === name;
            },
        },

        //Events
        created() {
            this.getNews()
        }
    }
</script>

<style scoped>
    .newsList {
        min-height: 850px;
        max-height: 80vh;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        background-position: center;
    }
    .related {
        min-height: 300px;
        max-height: 50vh;
    }
    .viewPort{
        background-color: #00000011;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-content: flex-start;
        align-items: center;
        overflow-y: hidden;
        overflow-x: auto;

        width: calc( 100vw - 100px);

        min-height: inherit;
        max-height: inherit;

    }
    ::-webkit-scrollbar {
        width: 0px;  /* remove scrollbar space */
        background: transparent;  /* optional: just make scrollbar invisible */
    }
    .viewPort>*{
        margin:5px
    }
    .controlBar{
        width: 130px;
        max-width: 150px;
        min-height: 400px;
        max-height: 40vh;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
    }
    .related-menu{
        overflow-y: scroll
    }


</style>