<template>
        <router-link tag="div" to="/player/" class="link">
            <sui-card  >
                <sui-card-content class="dark">
                    <sui-card-header class="red">
                        {{newsTitle}}
                        <sui-label v-if="newsIsSubscribed" class="right floated" size="tiny" color="black" >
                            Subscribed
                        </sui-label>
                    </sui-card-header>
                    <sui-card-description>
                        {{newsDescription | crop}}
                    </sui-card-description>
                </sui-card-content>
                <sui-card-content extra >

                    <span slot="right" >
                        <sui-icon  name="calendar alternate outline icon" ></sui-icon>
                        {{newsPublishDate | crop }}
                    </span>

                </sui-card-content>
            </sui-card>
        </router-link>
</template>

<script>
    import SuiCardDescription from "semantic-ui-vue/dist/commonjs/views/Card/CardDescription";
    export default {
        name: "NewsCard",
        components: {SuiCardDescription},
        data() {
            return {
                descriptionLength : 100
            }
        },
        props: [ 'news-id', 'news-title' , 'news-is-subscribed' , 'news-publish-date' , 'news-has-image' , 'news-description' ],
        filters: {
            crop : function( value ) {
               return (value.length >100  ) ? value.substr(0 , 100) + ' . . .' : value;
            }
        }
    }
</script>

<style scoped>
    .link{}
</style>