/*
1、通过增加“占位符”图片的方法在主页上为图片留一个预览区域
2、点击某个链接时，拦截网页的默认行为（打开新标签显示图片）
3、点击链接时，把占位符替换为与链接对应的图片
*/
function showPic(whichpic) {
    var source = whichpic.getAttribute("href"); // 取出图片的文件路径
    var placeholder = document.getElementById("placeholder"); // 取出占位符的文件路径
    placeholder.setAttribute("src",source);
}