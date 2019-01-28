<template>
    <div>
        <sui-button
                size="huge"
                color="black"
                :icon="profileModalButtonIcon"
                @click="handleProfileModalButtonClick"/>
        <sui-modal
                v-model="openSignIn"
                :basic="false"
                :closeIcon="true"
                size="fullscreen"
        >
            <sui-modal-header>Select a Photo</sui-modal-header>
            <sui-modal-content >
                <sui-modal-description>
                    <sui-header>Default Profile Image</sui-header>
                    <p>We've found the following gravatar image associated with your e-mail address.</p>
                    <p>Is it okay to use this photo?</p>
                </sui-modal-description>
            </sui-modal-content>
            <!--<sui-modal-actions>-->
                <!--<sui-button positive @click.native="handleProfileModalButtonClick">-->
                    <!--OK-->
                <!--</sui-button>-->
            <!--</sui-modal-actions>-->
        </sui-modal>
    </div>
</template>

<script>
    export default {
        name: "ProfileModal",
        data() {
            return {
                openSignIn:false,
            }
        },
        components:{

        },
        methods: {
            handleProfileModalButtonClick(){
                this.openSignIn = !this.openSignIn;
            }
        },
        computed:{
            profileModalButtonIcon() {
                return !this.$store.state['token']? 'user secret' : 'user circle';
            }
        },
        beforeMount() {
        },
        mounted(){

        }

    }
</script>

<style scoped>

</style>