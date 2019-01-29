<template>
    <div>
        <sui-label
                size="huge"
                color="black"
                :image="profileHasImage"
                @click="handleProfileModalButtonClick">
            <sui-icon v-if="profileModalButtonIcon" name="sign-in"></sui-icon>
            <img
                    v-if="profileHasImage"
                    src="https://semantic-ui.com/images/avatar/small/nan.jpg" />
        </sui-label>
        <sui-modal
                v-model="openSignIn"
                :basic="false"
                :closeIcon="true"
                size="fullscreen"
        >

                <sui-modal-header>Sign-in</sui-modal-header>
                <sui-modal-content >
                    <!--<sui-modal-description>-->
                        <sui-header>Username</sui-header>
                        <sui-input placeholder="Username" v-model="username" />
                        <sui-header>Password</sui-header>
                        <sui-input placeholder="Password" type="password" v-model="password"/>
                        <sui-modal-actions>
                        <sui-button positive @click.native="SignInButtonClick">
                            Sign in
                        </sui-button>
                        <sui-button secondary @click.native="handleProfileModalButtonClick">
                            Sign Up
                        </sui-button>
                        </sui-modal-actions>
                    <!--</sui-modal-description>-->
                </sui-modal-content>

        </sui-modal>
    </div>
</template>

<script>
    export default {
        name: "ProfileModal",
        data() {
            return {
                openSignIn:false,
                username:'',
                password:'',
            }
        },
        components:{

        },
        methods: {
            handleProfileModalButtonClick(){
                this.openSignIn = !this.openSignIn;


            },
            SignInButtonClick() {
                let cred = {
                    username: this.username,
                    password: this.password
                }
                this.$store.dispatch('login',cred)
            }
        },
        computed:{
            profileModalButtonIcon() {
                return this.$store.state['token']? false : 'user circle';
            },
            profileHasImage() {
                return this.$store.state['token']? true : true;
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