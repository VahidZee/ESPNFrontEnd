<template>
    <div class="whole cnt" :style="backgroundHandle">
        <div class="item">
            <div class="item-parent">
                <TourCell team-f="Team1" team-s="Team2" score-f="3" score-s="4"></TourCell>
            </div>
            <div class="item-childrens">
                <div class="item-child">
                    <div class="item">
                        <div class="item-parent">
                            <TourCell team-f="Team1" team-s="Team2" score-f="3" score-s="4"></TourCell>
                        </div>
                        <div class="item-childrens">
                            <div class="item-child">
                                <div class="item">
                                    <div class="item-parent">
                                        <TourCell team-f="Team1" team-s="Team2" score-f="3" score-s="4"></TourCell>
                                    </div>
                                    <div class="item-childrens">
                                        <div class="item-child">
                                            <TourCell team-f="Brazil" team-s="Mexico" score-f="5" score-s="9"></TourCell>
                                        </div>
                                        <div class="item-child">
                                            <TourCell team-f="Brazil" team-s="Mexico" score-f="5" score-s="9"></TourCell>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item-child">
                                <TourCell team-f="Brazil" team-s="Mexico" score-f="5" score-s="9"></TourCell>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item-child">
                    <div class="item">
                        <div class="item-parent">
                            <TourCell team-f="Brazil" team-s="Mexico" score-f="5" score-s="9"></TourCell>
                        </div>
                        <div class="item-matched">
                            <div class="item-child">
                                <div class="item">
                                    <div class="item-parent">
                                        <TourCell team-f="woah" team-s="rrrrrr" score-f="5" score-s="9"></TourCell>
                                    </div>
                                    <div class="item-childrens">
                                        <div class="item-child">
                                            <TourCell team-f="Spain" team-s="France" score-f="1" score-s="2"></TourCell>
                                        </div>

                                        <div class="item-child">
                                            <TourCell team-f="Brazil" team-s="Mexico" score-f="5" score-s="9"></TourCell>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item-child">
                                <TourCell team-f="Brazil" team-s="Mexico" score-f="5" score-s="9"></TourCell>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    import TourCell from "./TourCell";
    export default {
        name: "Tournament",
        components: {TourCell},
        props: {
            'background-image': String
        },
        computed: {
            backgroundHandle : function () {
                return {
                    backgroundImage : this.backgroundImage,
                    backgroundAttachment : 'fixed',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }
            }
        }
    }
</script>

<style scoped>

    .whole {
        display: flex;
        height: 600px;
        justify-content: center;
    }

    .item {
        display: flex;
        flex-direction: row-reverse;
    }
    .item p {
        padding: 20px;
        margin: 0;
        /*background-color: #ff6700;*/
        background-color: rgba(59, 147, 255, 0.7);
        border-radius: 2rem;
    }
    .item-parent {
        position: relative;
        margin-left: 50px;
        display: flex;
        align-items: center;
    }
    .item-parent:after {
        position: absolute;
        content: "";
        width: 25px;
        height: 2px;
        left: 0;
        top: 50%;
        background-color: #fff;
        transform: translateX(-100%);
    }
    .item-matched {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .item-child {
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
        margin-top: 10px;
        margin-bottom: 10px;
        position: relative;
    }
    .item-child:before {
        content: "";
        position: absolute;
        background-color: #fff;
        right: 0;
        top: 50%;
        transform: translateX(100%);
        width: 25px;
        height: 2px;
    }
    .item-child:after {
        content: "";
        position: absolute;
        background-color: #fff;
        right: -25px;
        height: calc(50% + 22px);
        width: 2px;
        top: 50%;
    }
    .item-child:last-child:after {
        transform: translateY(-100%);
    }
    .item-child:only-child:after {
        display: none;
    }

</style>
