mood = "happy"
age = 33

alert(mood);
alert(age);

var mood = 'don\'t ask'  // 添加转义字符来对应引号的情况
var height = "about 5'\" tall"

var bool = true
var char = "true" // 两者含义不同

var beatles = Array(5)  // 使用关键字Array来定义数组
var beatles1 = Array()  // 可以使用不限定长度的数组

// 填充数组可以逐个填充或者定义时填充
var a1 = Array(2)
a(0) = "java"
a(1) = "script";

var a2 = Array("java", "scrpt");

var a3 = ["java", "scrpt"];

//对象 关键字Object
var lennon1 = Object()
lennon.name = "John"
lennon.year = 1940
lennon.living = false;

var lennon2 = {name:"john", year:1904, living:false};

var beatles1 = {}
beatles1.vocalist = lennon1;

alert(lennon1)
alert(beatles1.vocalist.name);