<template>
    <div id="main-nav-bar">
        <div class="back"  :style="backgroundStyle">
            <div class="fore">
                <div style="width:100vw">
                    <h1  class="page-title" >
                        E S P N - R E B O R N
                    </h1>
                </div>
                <div class="buttons" style="width:100vw" >
                    <sui-button-group>
                            <sui-button @click="toggleSideBar" size="huge" color="black" icon="bars"/>
                        <router-link to="/home">
                            <sui-button size="huge" color="black" icon="home"/>
                        </router-link>
                        <sui-button size="huge" color="black" icon="search"/>
                        <sui-button size="huge" color="black" icon="rss"/>


                    </sui-button-group>
                </div>

            </div>
        </div>
        <sui-sidebar  class="inverted" animation="push"   direction="left" :visible="sideBarActive" >
            <div class="sidebar-back">
                <div class="sidebar-header">
                    ESPN REBORN
                    <sui-button @click="sideBarActive = false" size="tiny"  icon="close"/>
                </div>

                    <sui-button v-for="(item , i) in sidebarLinks" :key="'sidebar-item' + i" color="black">
                        <router-link :to="item.link" tag="span">
                            {{item.title}}
                        </router-link>
                    </sui-button>
                <sui-button color="black" >
                    <sui-menu-item right>
                        <sui-input transparent inverted  icon="search" placeholder="Search..." />
                    </sui-menu-item>
                </sui-button>
            </div>
        </sui-sidebar>
    </div>
</template>

<script>
    // import LoginSgnUp from '../SignInSignUp/SignInSignUp'
    // import LoginSignUp from "@/Components/SignInSignUp/SignInSignUp";

    export default {

        name: "NavBar",
        props: {
            'sidebar-links' : {
                type:Array ,
                default : function () {
                    return [
                        {
                            title : 'Home',
                            link : '/home'
                        },
                        {
                            title : 'News',
                            link : '/news'
                        },
                        {
                            title : 'Leagues',
                            link : '/league'
                        },
                        {
                            title : 'Teams',
                            link : '/team'
                        },
                        {
                            title : 'Games',
                            link : '/game'
                        },
                        {
                            title : 'Players',
                            link : '/player'
                        },
                    ]
                }
            },
            'background-image' : {
                type: String,
            }
        },
        components: {},
        data() {
            return {
                sideBarActive : false
            }
        },

        methods : {
            toggleSideBar(){
                this.sideBarActive = !this.sideBarActive
            }
        },
        computed: {
            backgroundStyle : function() {
                return {
                    backgroundImage: this.backgroundImage
                }
            }
        }

    }
</script>

<style scoped>
    .fore{
        background-image: linear-gradient(   #000000ff , #00000033 );
        width: 100vw;
        height:40vh;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        justify-items: center;
    }
    .back {
        background-attachment : fixed;
        background-size: cover;
        background-repeat:  no-repeat;
        background-position: center


    }
    .buttons {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        background-color: #00000099;
    }
    .page-title {
        font-size: 3rem;
        color:lightgray;
        text-align: center;
        background-color: #00000055;
        padding: 5px;
        margin: 0;
        font-style: oblique;
    }
    .sidebar-back{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .sidebar-header{
        text-align: center;
        font-size: 2rem;
        padding: 10px;
        color:lightgray;
        font-style: oblique;
    }
</style>