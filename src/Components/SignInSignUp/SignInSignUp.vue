<template>
    <div>
        <div is="sui-button-group" @click.native="toggle" >
            <sui-button positive >Sign In</sui-button>
            <sui-button-or  />
            <sui-button>Sign Up</sui-button>
        </div>
        <sui-modal v-model="openSignIn">
            <sui-modal-header>Select a Photo</sui-modal-header>
            <sui-modal-content image>
                <sui-image wrapped size="medium" src="" />
                <sui-modal-description>
                    <sui-header>Default Profile Image</sui-header>
                    <p>We've found the following gravatar image associated with your e-mail address.</p>
                    <p>Is it okay to use this photo?</p>
                </sui-modal-description>
            </sui-modal-content>
            <sui-modal-actions>
                <sui-button positive @click.native="toggle">
                    OK
                </sui-button>
            </sui-modal-actions>
        </sui-modal>
    </div>
</template>

<script>
    export default {
        name: "LoginSignUp"
    }
</script>

<style scoped>

</style>