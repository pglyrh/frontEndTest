//直接将函数代码粘人
function compute(num1,num2,operator){//参数不带关键字var
		var res = 0;
		num1 = parseFloat(num1);
		num2 = parseFloat(num2);
		if(operator=="+"){
			res = num1+num2;
		}else if(operator=="-"){
			res = num1-num2;
		}else if(operator=="*"){
			res = num1*num2;
		}else if(operator=="/"){
			res = num1/num2;
		}
		alert("res = "+res);
		return res;		
}

//第二个函数，验证第二种函数调用方式，即变量名=函数名
function test(num1){
	alert("num1: "+num1);
}

//递归调用，abc为一个函数，它接受数值，里面有递归
function abc(num1){
	if(num1>3){
		abc(--num1);//递归
	}
	document.writeln(num1+"<br>");
}

//测试arguments对象，函数可以接受任意多个数，并计算它们的和
function abc2(){
	//window.alert("length: "+arguments.length);
	//在js中有一个arguments，可以访问所有传入值
	//遍历所有参数
	for (var i=0;i<arguments.length ;i++ )
	{
		alert("arguments[i]: "+arguments[i]);
	}
}

//打印九九乘法表&nbsp
function multiTable(num){
	//行
	for (var i=1;i<=num ;i++ )
	{
		//列
		for (var j=1;j<=i ;j++ )
		{
			document.write(i+"*"+j+"="+(i*j)+"&nbsp");
		}
		document.writeln("<br>");
	}
}