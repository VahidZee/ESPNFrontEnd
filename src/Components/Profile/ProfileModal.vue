<template>
    <div>
        <sui-label
                size="huge"
                color="black"
                :image="profileHasImage"
                @click="handleProfileModalButtonClick">
            <sui-icon v-if="profileModalButtonIcon" :name="profileModalButtonIcon"></sui-icon>
            <img
                    v-if="profileHasImage"
                    src="https://semantic-ui.com/images/avatar/small/nan.jpg" />
        </sui-label>
        <sui-modal
                v-model="modalOpen"
                :basic="false"
                :closeIcon="true"
                size="fullscreen"
        >
                <sui-modal-header v-if="!this.$store.state.logged_in">Sign-in</sui-modal-header>
                <sui-modal-content v-if="!this.$store.state.logged_in" >
                    <sui-modal-description>
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
                    </sui-modal-description>
                </sui-modal-content>

        </sui-modal>
    </div>
</template>

<script>
    export default {
        name: "ProfileModal",
        data() {
            return {
                modalOpen:false,
                username:'',
                password:'',
            }
        },
        components:{

        },
        methods: {
            handleProfileModalButtonClick(){
                this.modalOpen = !this.modalOpen;


            },
            SignInButtonClick() {
                let cred = {
                    username: this.username,
                    password: this.password
                };
                this.$store.dispatch('login',cred)
            },
            signUpButtonClick() {

            }
        },
        computed:{
            profileModalButtonIcon() {
                return this.$store.state['logged_in']? (this.profileHasImage) ? false :'user circle'  :  'sign-in';
            },
            profileHasImage() {
            // && this.$store.state['user'].profile_picture
                return  this.$store.state.logged_in && this.$store.state.user_has_info ;
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