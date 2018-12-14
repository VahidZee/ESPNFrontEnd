<template>
    <div class="gamesList" :style="listStyle">
        <sui-menu class="controlBar" inverted vertical >
            <sui-menu-item class="controlBarHeader" header>
                {{title}}
            </sui-menu-item>
            <sui-menu-item
                    v-for="(item, itemKey) in controlOptions"
                    :key="'controlItem' +itemKey"
                    @click="selectControl(item)"
                    :active="isActive(item)"

            >
                {{item}}
            </sui-menu-item>
            <sui-dropdown

                    v-show="filterOptions"
                    text="Filter"
                    item
                    labeled
                    v-model="activeFilter"
                    :options="filterOptions"
            >
            </sui-dropdown>
        </sui-menu>
        <div class="viewPort">
            <GameCard
                    v-for="post in posts"
                    :key="post.id"
                    :game-data="post"
                    v-show="filtered(post)"
            ></GameCard>
        </div>
    </div>
</template>

<script>

    import GameCard from "@/Components/Games/GameCard";
    export default {
        name: "GamesList",
        components: {GameCard},
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
                    return ['Today' , 'Upcomming' , 'Live' ,'Subscribed' ];
                }
            } ,
            'default-active' : {
                type: String,
                default : 'Today'
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
            }
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
            }
        },

        //Methods
        methods : {
            //TODO remove Lorem ipsum
            generateData(value) {
                let teamNames = [
                    'ABC' ,
                    'EFG' ,
                    'MCU' ,
                    'FAN' ,
                    'ASA' ,
                    'MIM' ,
                    'BFC' ,
                    'BIW' ,
                    'ESS' ,
                    'RMD'
                ]

                return {
                    id: value,
                    date: new Date(),
                    type: 'Eu Cup' ,
                    isSubscribed: (value % 6 === 0 || value % 6 === 2 || value % 7 === 6 ),
                    sportType: (!((value % 7 === 0 || value % 7 === 2 || value % 7 === 6 ))) ? 'Basketball' : 'Football',
                    state: ( value%3 === 0 ) ? 'Finished' : ( value%3 === 1 ) ? 'Upcomming' : 'Live' ,
                    team1: {
                        logo:  'https://picsum.photos/150/150/?random' + (value * 20),
                        name: teamNames[value % 10],
                        score : (value * 313  + value % 4 ) % 7
                    },
                    team2: {
                        logo:  'https://picsum.photos/150/150/?random' + (value * 10),
                        name: teamNames[(value + 1 ) % 10],
                        score : (value * 313  + value % 2 ) % 7
                    }
                }
            },

            //Data Filtering
            filtered(post) {
                if( this.activeFilter )
                   switch ( this.activeControl ) {
                       case 'Today' :
                           return this.activeFilter === post.sportType;
                       case 'Subscribed' :
                           return post.isSubscribed && this.activeFilter === post.sportType;
                       case 'Upcomming' :
                           return post.state === 'Upcomming' && this.activeFilter === post.sportType;
                       case 'Live' :
                           return post.state === 'Live' && this.activeFilter === post.sportType;
                   }
                else
                    switch ( this.activeControl ) {
                        case 'Today' :
                            return true;
                        case 'Subscribed' :
                            return post.isSubscribed;
                        case 'Upcomming' :
                            return post.state === 'Upcomming';
                        case 'Live' :
                            return post.state === 'Live';
                    }

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
    .gamesList {
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