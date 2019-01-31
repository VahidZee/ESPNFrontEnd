<template>
    <div class="newsList" :style="listStyle" :class="{ 'related' : related.length }">
        <sui-menu class="controlBar" inverted vertical floated :class="{ 'related-menu' : related.length }">
            <!-- Menu Title -->
            <sui-menu-item class="controlBarHeader" header>
                {{ title }}
            </sui-menu-item>

            <!-- Related Tags -->
            <sui-menu-item v-show="related.length" class="controlBarHeader" header>
                Tags
                <sui-icon name="long arrow alternate down"></sui-icon>
            </sui-menu-item>
                <sui-menu-item
                        v-for="(item, itemKey) in related"
                        :key="'tag' +itemKey"
                >
                    {{item.title}}
                </sui-menu-item>

            <!-- Control Options -->
            <sui-menu-item
                    v-show="processControlsOptions.length && !related.length"
                    v-for="(item, itemKey) in processControlsOptions"
                    :key="'controlItem' +itemKey"
                    @click="selectControl(item)"
                    :active="isActive(item)"

            >
                {{item}}
            </sui-menu-item>

            <!-- Filter Options -->
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

        <!-- View Port -->
        <div class="viewPort" :class="{ 'related' : !related.length }">
            <!-- News Cards-->
            <NewsCard
                    v-for="post in shownPosts"
                    :key="post.id"
                    :news-data="post"
                    v-show="filtered(post)"
            ></NewsCard>

            <!-- Load More Button -->
            <sui-button @click="fetchData()"
                        style="margin: 20px"
                        v-if="controlsData[activeControl].has_more"
            >
                Load More
            </sui-button>
        </div>
    </div>

</template>

<script>
    import NewsCard from "@/Components/News/NewsCard";
    import axios from 'axios'

    export default {
        name: "NewsList",
        components: {NewsCard},
        props: {
            'background-image': {
                type: String,
                default: 'radial-gradient(#00002299 , #222222cc)'
            },
            'title': {
                type: String,
                required: true
            },
            'control-options-dict': {
                type: Array,
                default: () => {
                    return [{name: 'Recent', needsAuth:false}, {name:'Subscribed' , needsAuth:true}];
                }
            },
            'default-active': {
                type: String,
                default: 'Recent'
            },
            'filter-options': {
                type: Array,
                default: () => {
                    return [
                        {
                            key: "All",
                            text: "All",
                            value: null
                        },
                        {
                            key: "Basketball",
                            text: "Basketball",
                            icon: "basketball ball",
                            value: "Basketball"
                        },
                        {
                            key: "Football",
                            text: "Football",
                            icon: "futbol",
                            value: "Football"
                        }
                    ]
                }

            },
            'related': {
                type: Array,
                default: function () {
                    return []
                }

            },

        },
        data() {
            return {
                activeControl: this.defaultActive,
                activeFilter: null,
                posts: {},
                shownPosts : [],
                controlsData: {},
                has_more:false,
            }
        },

        //Computed Methods
        computed: {
            listStyle: function () {
                return {
                    backgroundImage: this.backgroundImage,
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }
            },
            processControlsOptions() {
                let controlOptions = []
                for( let i = 0; i < this.controlOptionsDict.length; i++ ) {
                    if( !this.controlOptionsDict[i].needsAuth )
                        controlOptions.push(this.controlOptionsDict[i].name);
                    else
                    if(this.$store.state.logged_in)
                        controlOptions.push(this.controlOptionsDict[i].name);
                }
                return controlOptions
            },
        },

        //Methods
        methods: {
            //Data Filtering
            filtered(post) {
                if (this.activeFilter === null && (this.activeControl === 'Recent'))
                    return true;
                if (this.activeFilter === null && !(this.activeControl === 'Recent'))
                    return post.isSubscribed;
                if (!(this.activeFilter === null) && (this.activeControl === 'Recent'))
                    return this.activeFilter === post.sportType;
                return this.activeFilter === post.sportType && post.isSubscribed;
            },

            //Data Fetching
            fetchData(tab) {
                if( !tab )
                    tab = this.activeControl;
                axios
                    .get(
                        this.$store.getters.NewsBackEndURL + '?type=' + tab.toLowerCase() +'&page=' + this.controlsData[tab].pageNumber
                    )
                    .then(
                        response => {
                            this.controlsData[tab].pageNumber++;
                            this.controlsData[tab].has_more = response.data.has_more;
                            for (let i = 0; i < response.data.list.length; i++) {
                                let temp = response.data.list[i];
                                temp.publishDate = new Date(temp.publishDate);
                                temp.sportType = (temp.sportType == 'F') ? 'Football' : 'Basketball';
                                this.posts[tab].push(temp)
                            }
                        }
                    )
            },
            //ControlBar Methods
            selectControl(item) {
                this.activeControl = item;
                this.shownPosts = this.posts[this.activeControl];

            },
            isActive(name) {
                return this.activeControl === name;
            },
        },

        // Watch list
        watch: {
            processControlsOptions() {},
        },

        //Events
        beforeMount() {
            this.activeControl = this.defaultActive;
        },
        created() {
            this.posts = {};
            for(let i = 0; i < this.controlOptionsDict.length; i++ ){
                this.posts[this.controlOptionsDict[i].name] = [];
                this.controlsData[this.controlOptionsDict[i].name] = {
                    pageNumber : 1,
                    has_more: true
                }
            }


            this.fetchData(this.activeControl);
            this.selectControl(this.defaultActive);
        },
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
        min-height: 500px;
        max-height: 50vh;
    }

    .viewPort {
        background-color: #00000011;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-content: flex-start;
        align-items: center;
        overflow-y: hidden;
        overflow-x: auto;

        width: calc(100vw - 100px);

        min-height: inherit;
        max-height: inherit;

    }

    ::-webkit-scrollbar {
        width: 0px; /* remove scrollbar space */
        background: transparent; /* optional: just make scrollbar invisible */
    }

    .viewPort > * {
        margin: 5px
    }

    .controlBar {
        width: 130px;
        max-width: 150px;
        min-height: 500px;
        max-height: 40vh;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
    }

    .related-menu {
        overflow-y: scroll
    }


</style>