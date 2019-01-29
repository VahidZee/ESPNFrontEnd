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
                    :src="this.$store.state.user.profile_picture" />
        </sui-label>
        <sui-modal
                v-model="modalOpen"
                :basic="false"
                :closeIcon="true"
                size="fullscreen"

        >
                <sui-modal-header v-if="!this.$store.state.logged_in && showSignInPage">Sign-in</sui-modal-header>
                <sui-modal-content v-if="!this.$store.state.logged_in && showSignInPage" >
                    <sui-modal-description
                            class="view-port"
                    >
                        <sui-header>Username</sui-header>
                        <sui-input placeholder="Username" v-model="username" />
                        <sui-header>Password</sui-header>
                        <sui-input placeholder="Password" type="password" v-model="password"/>
                        <sui-modal-actions>
                        <sui-button positive @click.native="signInButtonClick">
                            Sign in
                        </sui-button>
                        <sui-button secondary @click.native="toggleSignPage">
                            Sign Up
                        </sui-button>
                        </sui-modal-actions>
                    </sui-modal-description>
                </sui-modal-content>
            <sui-modal-header v-if="!this.$store.state.logged_in && !showSignInPage">Sign-in</sui-modal-header>
            <sui-modal-content v-if="!this.$store.state.logged_in && !showSignInPage" >
                <sui-modal-description
                        class="view-port"
                        scrolling
                >
                    <sui-message v-if="error_message">
                        {{error_message}}
                    </sui-message>
                    <sui-header>Username</sui-header>
                    <sui-input placeholder="Username" v-model="username" />
                    <sui-header>Password</sui-header>
                    <sui-input placeholder="Password" type="password" v-model="password"/>
                    <sui-header>First Name</sui-header>
                    <sui-input placeholder="First Name" v-model="first_name" />
                    <sui-header>Last Name</sui-header>
                    <sui-input placeholder="Last Name" v-model="last_name" />
                    <sui-header>Email</sui-header>
                    <sui-input placeholder="Email" v-model="email" type="email" />
                    <sui-modal-actions>
                        <sui-button positive @click.native="signUpButtonClick">
                            Sign Up
                        </sui-button>
                        <sui-button secondary @click.native="toggleSignPage">
                            Sign in
                        </sui-button>

                    </sui-modal-actions>
                </sui-modal-description>
            </sui-modal-content>
        </sui-modal>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "ProfileModal",
        data() {
            return {
                error_message:'',
                modalOpen:false,
                showSignInPage:true,
                username:'',
                password:'',
                first_name:'',
                last_name:'',
                email:'',
            }
        },
        components:{
        },
        methods: {
            handleProfileModalButtonClick(){
                this.modalOpen = !this.modalOpen;


            },
            signInButtonClick() {
                let cred = {
                    username: this.username,
                    password: this.password
                };
                this.$store.dispatch('login',cred)
            },
            signUpButtonClick() {
                let cred = {
                    username: this.username,
                    password: this.password,
                    first_name:this.first_name,
                    last_name:this.last_name,
                    email:this.email
                };
                axios.post(
                    this.$store.state.backEndUrl + 'users/logon' , cred
                ).then(
                    response => {
                        if( !response.data.ok ) {
                            this.error_message = response.data.description;
                        }
                    }
                )
            },
            toggleSignPage() {
                this.showSignInPage = !this.showSignInPage;
            }
        },
        computed:{
            profileModalButtonIcon() {
                return this.$store.state['logged_in']? (this.profileHasImage) ? false :'user circle'  :  'sign-in';
            },
            profileHasImage() {
                return  this.$store.state.logged_in && this.$store.state.user_has_info && (this.$store.state.user.profile_picture.length != 0 );
            }
        },
        beforeMount() {
        },
        mounted(){

        }

    }
</script>

<style scoped>
    .view-port{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .view-port>*{
        display: flex;
        margin: 10px 0px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
</style>