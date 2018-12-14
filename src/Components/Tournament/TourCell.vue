<template>
    <p>
        {{teamF}} <span style="border-style: dashed; border-radius: 50%; font-size: large; padding:1rem;">{{scoreF}}-{{scoreS}}</span> {{teamS}}
    </p>
</template>

<script>
    export default {
        name: "TourCell",
        props: ['team-f', 'team-s', 'score-f', 'score-s']
    }
</script>

<style scoped>

</style>
