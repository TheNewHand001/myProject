<template>
    <div id="app">
        <input type="text" v-model="searchQuery" placeholder="Search">
        <button @click="search">Search</button>
    </div>
</template>

<script>
export default{
    name:'App',
    data(){
        return{
            searchQuery:''
        }
    },
    methods:{
        search(){
            console.log('Searching for:',this.searchQuery)
        }
    }
}
</script>