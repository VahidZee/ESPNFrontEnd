<template lang="html">
    <div class="cnt">
        <sui-table basic="very" celled collapsing>
            <sui-table-header>
                <sui-table-row>
                    <sui-table-header-cell>Player</sui-table-header-cell>
                    <sui-table-header-cell>Substitution Time</sui-table-header-cell>
                </sui-table-row>
            </sui-table-header>

            <sui-table-body>
                <sui-table-row>
                    <sui-table-cell>
                        <h4 is="sui-header" image>
                            <sui-image src="mess.jpeg" shape="rounded" size="mini"/>
                            <sui-header-content>
                                {{bestPlayer.name}}
                                <sui-header-subheader>Best Player</sui-header-subheader>
                            </sui-header-content>
                        </h4>
                    </sui-table-cell>
                    <sui-table-cell>
                        {{bestPlayer.subTime}}
                    </sui-table-cell>
                </sui-table-row>
                <sui-table-row v-for="player in inPlayers" :key="player.id">
                    <sui-table-cell>
                        <h4 is="sui-header" image>
                            <sui-image src="mess.jpeg" shape="rounded" size="mini"/>
                            <sui-header-content>
                                {{player.name}}
                            </sui-header-content>
                        </h4>
                    </sui-table-cell>
                    <sui-table-cell>
                        {{player.subTime}}
                    </sui-table-cell>
                </sui-table-row>
                <sui-table-row v-for="player in savePlayers" :key="player.id">
                    <sui-table-cell>
                        <h4 is="sui-header" image>
                            <sui-image src="mess.jpeg" shape="rounded" size="mini"/>
                            <sui-header-content>
                                {{player.name}}
                                <sui-header-subheader>On Bench Player</sui-header-subheader>
                            </sui-header-content>
                        </h4>
                    </sui-table-cell>
                    <sui-table-cell>
                        {{player.subTime}}
                    </sui-table-cell>
                </sui-table-row>
            </sui-table-body>
        </sui-table>
    </div>
</template>

<script>
    export default {
        name: 'PlayersTable',

        props: {
            bestPlayer: Object,
            inPlayers: Array,
            savePlayers: Array
        },

    };
</script>

<style>
    .cnt {
        background-color: white;
        border-style: solid;
        border-color: rgba(0, 0, 0, 0.25);
        padding: 1rem;
        margin: 2rem;
        border-radius: 1rem;
    }

</style>
