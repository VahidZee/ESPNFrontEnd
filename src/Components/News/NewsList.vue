<template>
    <div class="newsList" :style="listStyle" :class="{ 'related' : this.type === 'related' }">
        <sui-menu class="controlBar" inverted vertical floated :class="{ 'related-menu' : related.length }">
            <!-- Menu Title -->
            <sui-menu-item class="controlBarHeader" header>
                {{ title }}
            </sui-menu-item>

            <!-- Related Tags -->
            <sui-menu-item v-show="type === 'related'" class="controlBarHeader" header>
                Tags
                <sui-icon name="long arrow alternate down"></sui-icon>
            </sui-menu-item>
            <sui-menu-item
                    v-for="(item, itemKey) in relatedDictList"
                    :key="'tag' +itemKey"
                    :active="item.active"
                    @click="toggleTag(item)"
            >
                {{item.tag.title}}
            </sui-menu-item>

            <!-- Control Options -->
            <sui-menu-item
                    v-show="processControlsOptions.length && !(type === 'related')"
                    v-for="(item, itemKey) in processControlsOptions"
                    :key="'controlItem' +itemKey"
                    @click="selectControl(item)"
                    :active="isActive(item)"

            >
                {{item}}
            </sui-menu-item>

            <!-- Filter Options -->
            <sui-dropdown
                    v-show="filterOptions && !(type === 'related')"
                    text="Filter"
                    item
                    labeled
                    v-model="activeFilter"
                    :options="filterOptions"
            >
            </sui-dropdown>

        </sui-menu>

        <!-- View Port -->
        <div class="viewPort" :class="{ 'related' : !(type === 'related') }">
            <!-- News Cards-->
            <NewsCard
                    v-for="post in shownPosts"
                    :key="post.id"
                    :news-data="post"
                    v-show="filtered(post)"
            ></NewsCard>

            <!-- Load More Button -->
            <sui-button @click="fetchData()"
                        style="margin: 50px"
                        v-if="has_more"
                        color="black"
                        size="huge"
            >
                Load More
            </sui-button>

            <!-- No More Items Found Message -->
            <sui-message
                    v-if="!has_more"
                    style="margin: 50px"
                    size="huge"
                    color="black"
            >
                No more items were found!
            </sui-message>
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
                    return [{name: 'Recent', needsAuth: false}, {name: 'Subscribed', needsAuth: true}];
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
            'type':{
                type: String,
                default: 'Recent'
            }


        },
        data() {
            return {
                activeControl: this.defaultActive,
                activeFilter: null,
                posts: {},
                shownPosts: [],
                controlsData: {},

                relatedDictList: [],
                // Fetch Data Fields
                has_more: false,
                pageNumber: 1,
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
                for (let i = 0; i < this.controlOptionsDict.length; i++) {
                    if (!this.controlOptionsDict[i].needsAuth)
                        controlOptions.push(this.controlOptionsDict[i].name);
                    else if (this.$store.state.logged_in)
                        controlOptions.push(this.controlOptionsDict[i].name);
                }
                return controlOptions
            },
            activeTags() {
                let activeTags = [];
                for (let i = 0; i < this.relatedDictList.length; i++) {
                    if (this.relatedDictList[i].active)
                        activeTags.push(this.relatedDictList[i].tag)
                }
                return activeTags;
            }
        },

        //Methods
        methods: {
            //Data Filtering
            filtered(post) {
                if (this.type === 'related')
                    return true;
                if (this.activeFilter === null)
                    return true;
                if (!(this.activeFilter === null))
                    return this.activeFilter === post.sportType;
            },

            //Data Fetching
            fetchData(tab) {
                let data = {};
                if (this.$store.state.logged_in)
                    data['token'] = this.$store.state.token;

                if (this.type !== 'related') {
                    if (!tab)
                        tab = this.activeControl;
                    axios
                        .post(
                            this.$store.getters.NewsBackEndURL + '?type=' + tab.toLowerCase() + '&page=' + this.controlsData[tab].pageNumber
                            , data
                        )
                        .then(
                            response => {
                                this.controlsData[tab].pageNumber++;
                                this.controlsData[tab].has_more = response.data.has_more;
                                this.has_more = response.data.has_more;
                                for (let i = 0; i < response.data.list.length; i++) {
                                    let temp = response.data.list[i];
                                    temp.publishDate = new Date(temp.publishDate);
                                    temp.sportType = (temp.sportType === 'F') ? 'Football' : 'Basketball';
                                    this.posts[tab].push(temp)
                                }
                            }
                        )
                } else {
                    data['tags'] = this.activeTags;
                    axios
                        .post(
                            this.$store.getters.NewsBackEndURL + '?type=related&page=' + this.pageNumber,
                            data
                        )
                        .then(
                            response => {
                                this.pageNumber++;
                                this.has_more = response.data.has_more;
                                for (let i = 0; i < response.data.list.length; i++) {
                                    let temp = response.data.list[i];
                                    temp.publishDate = new Date(temp.publishDate);
                                    temp.sportType = (temp.sportType === 'F') ? 'Football' : 'Basketball';
                                    this.shownPosts.push(temp)
                                }
                            }
                        )
                }

            },

            //ControlBar Methods
            selectControl(item) {
                this.activeControl = item;
                this.shownPosts = this.posts[this.activeControl];
                this.has_more = this.controlsData[item].has_more;
            },
            isActive(name) {
                return this.activeControl === name;
            },

            toggleTag(tag) {
                tag.active = !tag.active;
                this.pageNumber = 1;
                this.shownPosts = [];
                this.fetchData()
            }
        },

        // Watch list
        watch: {
            processControlsOptions() {
            },
        },

        //Events
        beforeMount() {
        },
        created() {
            if (this.type !== 'related') {
                this.activeControl = this.defaultActive;

                this.posts = {};
                for (let i = 0; i < this.controlOptionsDict.length; i++) {
                    this.posts[this.controlOptionsDict[i].name] = [];
                    this.controlsData[this.controlOptionsDict[i].name] = {
                        pageNumber: 1,
                        has_more: true
                    }
                }


                this.fetchData();
                this.selectControl(this.defaultActive);
            } else {
                for (let i = 0; i < this.related.length; i++)
                    this.relatedDictList.push({
                        tag: this.related[i],
                        active: true
                    });
                this.fetchData();
            }

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