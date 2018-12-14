<template>
    <tr>
        <td>
            <a href="" class="News">
                <table>
                    <tr>
                        <td style="width: 35%">
                            <div class="NewsPhoto" :style="newsImageHandle"></div>
                        </td>
                        <td>
                            <h3 class="NewsTitle">{{newsTitle}}</h3>
                            <h4 class="NewsText">{{newsText}}</h4>
                            <h5 class="NewsTime">{{newsTime}}</h5>
                        </td>
                    </tr>
                </table>
            </a>
        </td>
    </tr>
</template>

<script>
    export default {
        name: "PlayerNewsCard",
        props: {
            newsImage: String,
            newsTime: String,
            newsTitle: String,
            newsText: String
        },
        computed: {
            newsImageHandle : function() {
                return {
                    backgroundPosition: 'center',
                    width: '80%',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    paddingBottom: '80%',
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),' + this.newsImage,
                    border: 'thin white solid'
                }
            }
        }
    }
</script>

<style scoped>


    .NewsTitle {
        font-weight: bold;
        color: #b2b2b2;
    }

    .NewsText {
        color: white;
    }

    .News:hover .NewsTitle {
        color: #b70011;
    }

    .NewsTime {
        color: #989898;
    }

</style>
