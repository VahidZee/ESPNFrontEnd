<template>
    <div class="cnt">
        <table class="StatsTable">
            <tr>
                <th colspan="10">Appearances</th>
            </tr>
            <tr>
                <td style="font-weight: bold; color: #5f5f5f">SEASON</td>
                <td>GP</td>
                <td>MPG</td>
                <td>FG%</td>
                <td>APG</td>
                <td>RPG</td>
                <td>BLKPG</td>
                <td>STPG</td>
                <td>PFPG</td>
                <td>PPG</td>
            </tr>
            <tr>
                <td style="font-weight: bold; color: #5f5f5f">1</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <td style="font-weight: bold; color: #5f5f5f">2</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr><tr>
            <td style="font-weight: bold; color: #5f5f5f">3</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
        </tr>
            <tr>
                <td style="font-weight: bold; color: #5f5f5f">4</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <td style="font-weight: bold; color: #5f5f5f">5</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <td style="font-weight: bold; color: #5f5f5f">6</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <td style="font-weight: bold; color: #5f5f5f">7</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <td style="font-weight: bold; color: #5f5f5f">8</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "Stats"
    }
</script>

<style scoped>

    .StatsTable {
        width: 100%;
        font-size: 18px;
        border: thin #b2b2b2 solid;
        text-align: left;
        vertical-align: middle;
        padding: 15px;
        background-color: white;
    }
    .StatsTable th {
        background-color: #232323;
        color: white;
        font-weight: bold;
        font-size: 20px;
        padding: 10px;
        text-align: center;
    }
    .StatsTable td {
        padding: 10px;
    }
    .StatsTable tr:nth-child(even) {
        background-color: #f2f2f2;
    }
</style>
