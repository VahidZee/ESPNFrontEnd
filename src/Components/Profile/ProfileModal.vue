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
            <!-- Sign-in Form -->
            <sui-modal-header v-if="!this.$store.state.logged_in && showSignInPage && !showForgetPassword">Sing-In</sui-modal-header>
            <sui-modal-content v-if="!this.$store.state.logged_in && showSignInPage && !showForgetPassword" >
                <sui-modal-description
                        class="view-port"
                >
                    <sui-message
                            v-if="error_message"
                            color="red"
                    >
                        {{error_message}}
                    </sui-message>
                    <sui-message
                            v-if="success_message"
                            color="green"
                    >
                        {{success_message}}
                    </sui-message>
                    <sui-message
                            color="grey"
                    >
                        Fill in your data to sign-in, or hit sign-up to become one of us.
                    </sui-message>
                    <sui-header>Username</sui-header>
                    <sui-input placeholder="Username" v-model="username" />
                    <sui-header>Password</sui-header>
                    <sui-input placeholder="Password" type="password" v-model="password"/>
                    <sui-button fluid @click="forgotPasswordButtonClick"> Forgot Password </sui-button>
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

            <!-- Forget Password Form -->
            <sui-modal-header v-if="!this.$store.state.logged_in && showSignInPage && showForgetPassword">Forgot Password</sui-modal-header>
            <sui-modal-content v-if="!this.$store.state.logged_in && showSignInPage && showForgetPassword" >
                <!-- Email Form -->
                <sui-modal-description
                        class="view-port"
                        v-if="!resetPasswordPage"

                >
                    <sui-message
                            v-if="error_message"
                            color="red"
                    >
                        {{error_message}}
                    </sui-message>
                    <sui-message
                            v-if="success_message"
                            color="green"
                    >
                        {{success_message}}
                    </sui-message>
                    <sui-message
                            color="grey"
                    >
                        Fill in your email address and if there was a profile with that email we will send you  an access token to reset your password.
                    </sui-message>
                    <sui-header>Email</sui-header>
                    <sui-input placeholder="Email" v-model="email" />
                    <sui-button fluid @click="iHaveAnForgotAccessTokenButtonClick"> I Have an access token </sui-button>

                    <sui-modal-actions>
                        <sui-button positive @click.native="sendForgotPasswordEmailButtonClick">
                            Send
                        </sui-button>
                        <sui-button negative @click.native="forgotPasswordButtonClick">
                            Cancel
                        </sui-button>
                    </sui-modal-actions>
                </sui-modal-description>

                <!-- Reset Password Form -->
                <sui-modal-description
                        class="view-port"
                        v-if="resetPasswordPage"

                >
                    <sui-message
                            v-if="error_message"
                            color="red"
                    >
                        {{error_message}}
                    </sui-message>
                    <sui-message
                            v-if="success_message"
                            color="green"
                    >
                        {{success_message}}
                    </sui-message>

                    <sui-message
                            color="grey"
                    >
                        Enter The access token sent to your email and choose your new password.
                    </sui-message>

                    <sui-header>Access Token</sui-header>
                    <sui-input placeholder="Token" v-model="access_token" />

                    <sui-header>Password</sui-header>
                    <sui-input placeholder="Password" type="password" v-model="password"/>

                    <sui-header>Re-Enter Password</sui-header>
                    <sui-input placeholder="Re-Enter Password" type="password" v-model="reenter_password"/>
                    <sui-button fluid @click="iHaveAnForgotAccessTokenButtonClick"> I Have an access token </sui-button>

                    <sui-modal-actions>
                        <sui-button positive @click.native="sendResetPassword">
                            Send
                        </sui-button>
                        <sui-button negative @click.native="forgotPasswordButtonClick">
                            Cancel
                        </sui-button>
                    </sui-modal-actions>
                </sui-modal-description>
            </sui-modal-content>

            <!-- Sign-Up Form -->
            <sui-modal-header v-if="!this.$store.state.logged_in && !showSignInPage">Sign-Up</sui-modal-header>
            <sui-modal-content v-if="!this.$store.state.logged_in && !showSignInPage" >
                <!-- Sign Up Form -->
                <sui-modal-description
                        class="view-port"
                        v-if="!activationKeyForm"
                        scrolling
                >
                    <sui-message
                            v-if="error_message"
                            color="red"
                    >
                        {{error_message}}
                    </sui-message>
                    <sui-message
                            v-if="success_message"
                            color="green"
                    >
                        {{success_message}}
                    </sui-message>
                    <sui-message
                            color="grey"
                    >
                        Fill in your data and become one of us! ( note that all the fields are required )
                        <br>
                        For further security an email with an activation key will be sent to you after submiting this form.
                    </sui-message>
                    <sui-header>Username</sui-header>
                    <sui-input placeholder="Username" v-model="username" />

                    <sui-header>Password</sui-header>
                    <sui-input placeholder="Password" type="password" v-model="password"/>

                    <sui-header>Re-Enter Password</sui-header>
                    <sui-input placeholder="Re-Enter Password" type="password" v-model="reenter_password"/>

                    <sui-header>First Name</sui-header>
                    <sui-input placeholder="First Name" v-model="first_name" />

                    <sui-header>Last Name</sui-header>
                    <sui-input placeholder="Last Name" v-model="last_name" />

                    <sui-header>Email</sui-header>
                    <sui-input placeholder="Email" v-model="email" type="email" />
                    <sui-button fluid @click="iHaveActivationKeyButtonClick"> I Have an activation key </sui-button>

                    <sui-modal-actions>
                        <sui-button positive @click.native="signUpButtonClick">
                            Sign Up
                        </sui-button>
                        <sui-button secondary @click.native="toggleSignPage">
                            Sign in
                        </sui-button>
                    </sui-modal-actions>
                </sui-modal-description>

                <!-- Account Activation -->
                <sui-modal-description
                        class="view-port"
                        v-if="activationKeyForm"

                >
                    <sui-message
                            v-if="error_message"
                            color="red"
                    >
                        {{error_message}}
                    </sui-message>
                    <sui-message
                            v-if="success_message"
                            color="green"
                    >
                        {{success_message}}
                    </sui-message>

                    <sui-message
                            color="grey"
                    >
                        Enter The activation token sent to your email to activate your account.
                    </sui-message>

                    <sui-header>Activation Token</sui-header>
                    <sui-input placeholder="Token" v-model="access_token" />

                    <sui-modal-actions>
                        <sui-button positive @click.native="sendActivationKey">
                            Activate Account
                        </sui-button>
                        <sui-button negative @click.native="iHaveActivationKeyButtonClick">
                            Cancel
                        </sui-button>
                    </sui-modal-actions>
                </sui-modal-description>
            </sui-modal-content>

            <!-- Profile Info -->
            <sui-modal-header v-if="this.$store.state.logged_in && this.$store.state.user_has_info">Profile Info</sui-modal-header>
            <sui-modal-content :image="profileHasImage"
                               v-if="this.$store.state.logged_in && this.$store.state.user_has_info"
            >
                <sui-image wrapped
                           size="medium"
                           v-if="profileHasImage"
                           :src="this.$store.state.user.profile_picture"
                />
                <sui-modal-description
                        class="view-port"
                        scrolling
                >
                    <sui-message
                            v-if="error_message"
                            color="red"
                    >
                        {{error_message}}
                    </sui-message>
                    <sui-message
                            v-if="success_message"
                            color="green"
                    >
                        {{success_message}}
                    </sui-message>
                    <sui-header>Username</sui-header>
                    <sui-input placeholder="Username" :value="this.$store.state.user.username" />
                    <!--<sui-header>Password</sui-header>-->
                    <!--<sui-input placeholder="Password" type="password" v-model="password"/>-->
                    <sui-header>First Name</sui-header>
                    <sui-input placeholder="First Name" :value="this.$store.state.user.first_name" />
                    <sui-header>Last Name</sui-header>
                    <sui-input placeholder="Last Name" :value="this.$store.state.user.last_name" />
                    <sui-header>Email</sui-header>
                    <sui-input placeholder="Email" :value="this.$store.state.user.email" type="email" />

                </sui-modal-description>
            </sui-modal-content>
            <sui-modal-actions v-if="this.$store.state.logged_in && this.$store.state.user_has_info" >
                <sui-button positive @click.native="toggleSignPage">
                    Save Profile
                </sui-button>
                <sui-button negative @click.native="signOutButtonClick">
                    Sign Out
                </sui-button>
            </sui-modal-actions>

        </sui-modal>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "ProfileModal",
        data() {
            return {
                //models
                error_message:'',
                success_message:'',

                //handles
                modalOpen:false,
                showSignInPage:true,
                showForgetPassword:false,
                resetPasswordPage:false,
                activationKeyForm:false,
                //Data
                username:'',
                password:'',
                reenter_password:'',
                first_name:'',
                last_name:'',
                email:'',
                access_token:''
            }
        },
        components:{
        },
        methods: {
            // Buttons
            handleProfileModalButtonClick(){
                this.success_message = '';
                this.error_message = '';
                this.modalOpen = !this.modalOpen;
            },

            // Sign out
            signOutButtonClick() {
                let cred = {
                    'token': this.$store.state.token
                };
                axios.post(
                    this.$store.state.backEndUrl + 'users/logout' , cred
                ).then(
                    response => {
                        if( !response.data.ok )
                            this.error_message = response.data.description;
                        else {
                            this.$store.commit('LOGGED_OUT',response.data.token);
                            this.success_message = response.data.description;

                        }
                    }
                )
            },

            // Sign Up
            signUpButtonClick() {
                if(this.password != this.reenter_password ) {
                    this.error_message = 'Password didn\'t match its re-entered value';
                    return
                }
                let cred = {
                    username: this.username,
                    password: this.password,
                    first_name:this.first_name,
                    last_name:this.last_name,
                    email:this.email
                };
                this.success_message = '';
                this.error_message = '';
                axios.post(
                    this.$store.state.backEndUrl + 'users/logon' , cred
                ).then(
                    response => {
                        if( !response.data.ok )
                            this.error_message = response.data.description;
                        else {
                            this.success_message = response.data.description;
                            this.activationKeyForm = true;
                        }
                    }
                )
            },
            iHaveActivationKeyButtonClick() {
                this.access_token = '';
                this.activationKeyForm = !this.activationKeyForm;
                this.error_message = '';
                this.success_message = '';
            },
            sendActivationKey() {
                let cred = {
                    'token': this.access_token
                };
                axios.post(
                    this.$store.state.backEndUrl + 'users/activate_account' , cred
                ).then(
                    response => {
                        if( !response.data.ok )
                            this.error_message = response.data.description;
                        else {
                            this.success_message = response.data.description;
                            this.activationKeyForm = false;
                            this.access_token = '';
                            this.error_message = '';
                            this.showSignInPage = true;
                        }
                    }
                )
            },

            //Sign In functions
            toggleSignPage() {
                this.showSignInPage = !this.showSignInPage;
                this.success_message = '';
                this.error_message = '';
            },
            signInButtonClick() {
                let cred = {
                    username: this.username,
                    password: this.password
                };
                axios.post(
                    this.$store.state.backEndUrl + 'users/login' , cred
                ).then(
                    response => {
                        if( response.data.ok ) {
                            this.success_message = 'Logged in Successfully';
                            this.error_message = '';

                            this.$store.commit('LOGGED_IN',response.data.token);
                        }
                        else{
                            this.error_message = response.data.description;
                            this.success_message = '';
                        }
                    }
                );
            },

            forgotPasswordButtonClick() {
                this.success_message = '';
                this.error_message = '';
                this.showForgetPassword = !this.showForgetPassword;
                this.resetPasswordPage = false;
                this.email = '';
                this.error_message = '';
                this.success_message = '';
                this.password = '';
                this.reenter_password = '';
            },
            iHaveAnForgotAccessTokenButtonClick(){
                this.access_token = '';
                this.success_message = '';
                this.error_message = '';
                this.resetPasswordPage = !this.resetPasswordPage;
                this.email = '';
                this.password = '';
                this.reenter_password = '';
            },
            sendForgotPasswordEmailButtonClick() {
                this.success_message = '';
                this.error_message = '';
                let data = {
                    'email': this.email
                };
                axios.post(
                    this.$store.state.backEndUrl + 'users/forgot_password' , data
                ).then(
                    response => {
                        if( !response.data.ok )
                            this.error_message = response.data.description;
                        else {
                            this.success_message = response.data.description;
                            this.resetPasswordPage = true;
                        }
                    }
                )
            },
            sendResetPassword() {
                if(this.password != this.reenter_password ) {
                    this.error_message = 'Password didn\'t match its re-entered value';
                    return
                }

                if(this.access_token == '') {
                    this.error_message = 'No valid access Token was provided';
                    return
                }

                let cred = {
                    forgot_access_token:this.access_token,
                    password: this.password,
                };

                this.success_message = '';
                this.error_message = '';

                axios.post(
                    this.$store.state.backEndUrl + 'users/reset_password' , cred
                ).then(
                    response => {
                        if( !response.data.ok )
                            this.error_message = response.data.description;
                        else{
                            this.success_message = response.data.description;
                            this.showSignInPage = true;
                            this.email = '';
                            this.password = '';
                            this.reenter_password ='';
                            this.showForgetPassword = false;
                        }
                    }
                )
            },


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