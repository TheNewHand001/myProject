<template>
    <!-- <div id="app">
        <input type="text" v-model="searchQuery" placeholder="Search">
        <button @click="search">Search</button>
    </div> -->
    <!-- <div>
        <h1>
            hello world
        </h1>

    </div> -->
    <div class="wrapper_new">
        
        <div id="top">
            <div id="left-top" class="left-top">
                <a href="http://news.baidu.com" target="_blank" >新闻</a>
                <a href="https://www.hao123.com?src=from_pc" target="_blank" >hao123</a>
                <a href="http://map.baidu.com" target="_blank" >地图</a>
                <a href="http://tieba.baidu.com/" target="_blank" >贴吧</a>
                <a href="https://haokan.baidu.com/?sfrom=baidu-top" target="_blank" >视频</a>
                <a href="http://image.baidu.com/" target="_blank" >图片</a>
                <a href="https://pan.baidu.com?from=1026962h" target="_blank" >网盘</a>
                <div id="left-top-more">
                    <a href="http://www.baidu.com/more/" name="tj_briicon"  target="_blank">更多</a>
                    <div id="hidden-div">
                        <img src="../assets/more.png" alt="">
                    </div>
	            </div>
            </div>
    
            <div class="right-top">
                <div>
                    <span id="right-top-s">
                        设置
                    </span>
                    <a href="https://passport.baidu.com/v2/?login&tpl=mn&u=http%3A%2F%2Fwww.baidu.com%2F&sms=5" id="right-top-a">登录</a>
                    <div id="set-hidden">
                        <a href=""></a>
                    </div>
                </div>
            </div>
        </div >
        <div id="body" >
        <!-- <div id="body" class="baidu"> -->
            <img src="//www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" 
            alt="">
            <form  action="">
                <div id="search" >
                    <div id="search-input">
                        <input type="text">
                    </div>
                    <span id="search-photo" @mouseover="isShow = true"
                    @mouseout="isShow = false"
                    >

                    </span>
                    <span class="soutu-hover-tip" style="display: none;" v-show="isShow">按图片搜索</span>
                    <div id="search-btn">
                        <input type="submit" value="百度一下">
                    </div>
                </div>
            </form>
            <div id="hot">
                <div id="hot-left">
                    <a href="">百度热搜&gt;</a>
                </div>
                <div id="hot-right">
                    <a href=""> <i class="iconfont icon-shuaxin"></i>换一换</a>
                </div>
            </div>
            <ul id="hot-ul">
                    <li class="left-li">
                        <span class="nu" style="color:#f63051;">1</span>
                        <span class="font">为推进强国建设民族复兴添砖加瓦</span>
                    </li>
                    <li class="right-li">
                        <span class="nu">4</span>
                        <span class="font">花美果丰乡村美</span>
                    </li>
                    <li class="left-li">
                        <span class="nu" style="color:#fe2d46;">2</span>
                        <span class="font">3元一根土烟换包装变2千元一盒雪茄</span>
                    </li>
                    <li class="right-li">
                        <span class="nu">5</span>
                        <span class="font">980一盒“壮阳药”检出伟哥</span>
                    </li>
                    <li class="left-li">
                        <span class="nu" style="color:#f60;">3</span>
                        <span class="font">十二年义务教育，是时候了？</span>
                    </li>
                    <li class="right-li">
                        <span class="nu">6</span>
                        <span class="font">央视曝光儿童手表风险</span>
                    </li>
                    
                </ul>
        </div>
        <div id="bottom" class="p-bottom">
            <div id="foot-div">
                <p class="lh">
	                <a class="text-color" href="//home.baidu.com" target="_blank">关于百度</a>
                </p>
                <p class="lh">
                    <a class="text-color" href="http://ir.baidu.com" target="_blank">About Baidu</a>
                </p>
                <p class="lh">
                    <a class="text-color" href="//www.baidu.com/duty" target="_blank">使用百度前必读</a>
                </p>
                <p class="lh">
                    <a class="text-color" href="//help.baidu.com" target="_blank">帮助中心</a>
                </p>
                <p class="lh">
                    <a class="text-color" href="https://e.baidu.com/?refer=1271" target="_blank">企业推广</a>
                </p>
                <p class="lh">
                    <a class="text-color" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000001" target="_blank">京公网安备11000002000001号</a>
                </p>
                <p class="lh">
                    <a class="text-color" href="https://beian.miit.gov.cn" target="_blank">京ICP证030173号</a>
                </p>
                <p class="lh">
                <a class="text-color" href="//www.baidu.com/licence/" target="_blank">信息网络传播视听节目许可证 0110516</a>
                </p>
                <p class="lh">
                    <span class="text-color">互联网宗教信息服务许可证编号：京（2022）0000043</span>
                </p>
                <p class="lh" style="display: none;">
                    <span class="text-color">药品医疗器械网络信息服务备案（京）网药械信息备字（2021）第00159号</span>
                </p>
                <p class="lh" style="display: none;">
                    <span class="text-color">医疗器械网络交易服务第三方平台备案凭证（京）网械平台备字（2020）第00002号</span>
                </p>
                <p class="lh" style="display: none;">
                    <span class="text-color">©2023&nbsp;Baidu&nbsp;</span>
                </p>
            </div >
            
        </div>
    </div>

    
</template>

    <style>@import url(baidu.less);</style>
<script>
export default{
    name:'App',
    data(){
        return{
            searchQuery:'',
            isShow:false
        }
    },
    methods:{
        search(){
            console.log('Searching for:',this.searchQuery)
        }
    }
}
</script>

