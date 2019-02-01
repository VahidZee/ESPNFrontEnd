<template>
    <div class="cnt" :style="imgN">
        <table style="width: 100%">
            <tr>
                <td style="width: 40%">
                    <div :style="imgP"></div>
                </td>
                <td style="width: 70%">
                    <table class="ProfileInfo">
                        <tr>
                            <th class="ProfileName" colspan="3">{{response.name}}</th>
                        </tr>
                       <div></div>
                        <tr style="font-size: 18px">
                            <!--<td style="border-right: thin #b2b2b2 solid; padding: 0 2%">10 Forward</td>-->
                            <!--<td style="border-right: thin #b2b2b2 solid; padding: 0 2%">5'6", 148 lbs</td>-->
                            <td style="color: white; padding: 0 2%">
                                <a href="">
                                    {{ response.team_name }}
                                </a>
                            </td>
                        </tr>
                        <tr v-if="response.born">
                            <td style="color: #b2b2b2">Born</td>
                            <td colspan="2">{{ response.born }}</td>
                        </tr>
                        <tr>
                            <td style="color: #b2b2b2">Experience</td>
                            <td colspan="2">{{ response.expe}} years</td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "FootProfile",
        props: {photoN: String , photoP: String, name: String},
        computed: {
            imgN: function () {
                return {
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.4)),' + this.photoN,
                    backgroundSize: 'cover',
                    padding: '1rem'
                }
            },

            imgP: function () {
                return {
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.8)) , ' + this.photoP,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    width: '75%',
                    paddingBottom: '55%'
                }
            },
        }
    }
</script>

<style scoped>
    a:hover {
        color: #b70011;
    }

    .ProfileName {
        color: white;
        font-size: 52px;
        font-weight: bold;
        padding: 1rem;
        border-bottom: thin white solid;
    }

    .ProfileInfo {
        color: white;
        font-size: 20px;
        width: 100%;
        text-align: left;
        vertical-align: middle;
        table-layout: fixed;
        display: inline-block;
        margin-left: -15%;
    }
</style>
