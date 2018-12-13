<template>
    <div class="col-md-61 offset-md-3 cnt">
        <h4>Match Timeline:</h4>
        <ul class="timeline">
            <li v-for="eve in events" :key="eve.id">
                <h5 style=" margin-right:1rem;">{{eve.title}}</h5>
                <h5>{{eve.time}}</h5>
                <hr/>
                <p style="clear: both;">{{eve.description}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Timeline",

        props: {
            events: Array
        },

    }
</script>

<style scoped>
    ul.timeline {
        list-style-type: none;
        position: relative;
    }

    ul.timeline:before {
        content: ' ';
        background: #d4d9df;
        display: inline-block;
        position: absolute;
        left: 29px;
        width: 2px;
        height: 100%;
        z-index: 400;
    }

    ul.timeline > li {
        margin: 20px 0;
        padding-left: 20px;
    }

    ul.timeline > li:before {
        content: ' ';
        background: white;
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 3px solid cadetblue;
        left: 20px;
        width: 20px;
        height: 20px;
        z-index: 400;
    }

</style>

