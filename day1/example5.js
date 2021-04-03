alert(typeof document.getElementById("purchases"));  // 返回purchases的类型

alert(document.getElementsByTagName("li"))

alert(document.getElementsByTagName("li").length) // 返回对象数组

for(var i = 0; i < document.getElementsByTagName("li").length; i++) {
    alert(typeof document.getElementsByTagName("li")[i]);
}

// 套个娃   通过documents调用所有元素，查找名字为purchases的元素，查找其中所有元素（通配符*）的长度。
alert(document.getElementById("purchases").getElementsByTagName("*").length);