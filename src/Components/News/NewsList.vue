<template>
        <div class="newsList" :style="listStyle">
            <sui-menu class="controlBar" inverted vertical >
                <sui-menu-item class="controlBarHeader" header>
                    {{(title ) ? title : 'News'}}
                </sui-menu-item>
                <sui-menu-item
                        v-for="(item, itemKey) in controllers"
                        :key="'controlItem' +itemKey"
                        @click="selectControl(item)"
                        :active="isActive(item)"

                >
                    {{item}}
                </sui-menu-item>
                <sui-dropdown
                              text="Filter"
                              item
                              labeled
                              v-model="activeFilter"
                              :options="filterControls"
                >
                </sui-dropdown>
            </sui-menu>
            <div class="viewPort">
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
        props : ['background-image' , 'title' , 'control-items' , 'default-active' , 'filterItems' , 'auth'],
        x : 1,
        data() {
            return {
                lorem: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam consectetur explicabo facere facilis in inventore nihil quod temporibus velit? A accusamus ad consequuntur deserunt dolores harum reprehenderit! Eos, nostrum.\n',
                defaultControllers: ['Recent' ,'Subscribed' ],
                activeControl : (this.defaultActive) ? this.defaultActive : 'Recent',
                defaultFilterItems : [
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

                ],
                activeFilter: null,
                posts: []
            }
        },

        //Computed Methods
        computed: {
            //Filterings
            filterControls: function () {
                return this.filterItems ? this.filterItems : this.defaultFilterItems ;
            },
            //Contollings
            controllers : function() {
                return ( this.controlItesm ) ? this.controlItems : this.defaultControllers;
            },
            listStyle : function () {
                return {
                    backgroundImage : (this.backgroundImage)? 'url(' + this.backgroundImage + ')' : 'radial-gradient(#00002299 , #222222bb)',
                    backgroundAttachment : 'fixed',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }
            }
        },

        //Methods
        methods : {
            //TODO remove Lorem ipsum
            generateData(value) {
                return {
                    id: value,
                    publishDate: new Date(),
                    description : this.lorem + this.lorem + this.lorem + this.lorem + this.lorem + this.lorem,
                    title : ('Title ' + value),
                    isSubscribed: (value % 6 === 0 || value % 6 === 2 || value % 7 === 6 ),
                    sportType: (!((value % 7 === 0 || value % 7 === 2 || value % 7 === 6 ))) ? 'Basketball' : 'Football',
                    image: (value % 7 === 1 || value % 7 === 4)? 'https://picsum.photos/200/200/?random' + value : ''
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
                for( let i = 1 ; i < 10 ; i++ )
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
        min-height: 400px;
        max-height: 80vh;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        background-position: center;
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
        max-height: 80vh;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;

    }


</style>