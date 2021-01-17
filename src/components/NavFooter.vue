<template>
    <footer class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link"> 
            <a href="https://github.com/Elgar17" target="_banck">github</a> |
            <a href="https://blog.harahozi.cn/docs/" target="_banck">技术笔记</a>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.footer{
    height: 234px;
    border-top: 4px solid #f60;
    background-color: #333;
    color: #999;
    font-size: 16px;
    text-align: center;
    .footer-logo {
        margin-top: 46px;

        img{
            margin-top: 13px;
            width: 53px;
        }
    }
    .footer-link{
        a{
            display: inline-block; 
            color: #999;
        }
    }
}
</style>