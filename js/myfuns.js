//ֱ�ӽ���������ճ��
function compute(num1,num2,operator){//���������ؼ���var
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

//�ڶ�����������֤�ڶ��ֺ������÷�ʽ����������=������
function test(num1){
	alert("num1: "+num1);
}

//�ݹ���ã�abcΪһ����������������ֵ�������еݹ�
function abc(num1){
	if(num1>3){
		abc(--num1);//�ݹ�
	}
	document.writeln(num1+"<br>");
}

//����arguments���󣬺������Խ����������������������ǵĺ�
function abc2(){
	//window.alert("length: "+arguments.length);
	//��js����һ��arguments�����Է������д���ֵ
	//�������в���
	for (var i=0;i<arguments.length ;i++ )
	{
		alert("arguments[i]: "+arguments[i]);
	}
}

//��ӡ�žų˷���&nbsp
function multiTable(num){
	//��
	for (var i=1;i<=num ;i++ )
	{
		//��
		for (var j=1;j<=i ;j++ )
		{
			document.write(i+"*"+j+"="+(i*j)+"&nbsp");
		}
		document.writeln("<br>");
	}
}