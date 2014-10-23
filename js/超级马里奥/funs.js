//设计Mario类
	function Mario(){
		//坐标
		this.x = 0;
		this.y = 0;

		//移动 0->向上 1->向右 2->向下 3->向左
		this.move = function(direct){
			//判断
			//为了改变left和top值，需要获得img元素，需要利用DOM
			//mymario就是获取图片对象
			var mymario = document.getElementById("mymario");
			//查看top和left值
			//stringObject.substr(start,length)
			var mleft = parseInt(mymario.offsetLeft);
			var mtop = parseInt(mymario.offsetTop);
			//alert("mymario.style.left: "+mymario.currentStyle.left);	//IE
			//alert("mymario.style.left: "+mymario.getComputedStyle.left);	//非IE
			
			//alert("mymario.style.left: "+mymario.style.left);
			
			//以10px为单位移动
			switch (direct)
			{
				case 0:
					//alert("上移");
					mtop -= 10;
					mymario.style.top = mtop+"px";
					break;
				case 1:
					//alert("右移");
					mleft += 10;
					mymario.style.left = mleft+"px";
					//alert(mleft);
					break;
				case 2:
					//alert("下移");
					mtop += 10;
					mymario.style.top = mtop+"px";
					break;
				case 3:
					//alert("左移");
					mleft -= 10;
					mymario.style.left = mleft+"px";
					break;
			}
		}
	}

	//创建Mario对象
	var mario = new Mario();
	
	//全局函数
	function marioMove(direct){
		//alert("marioMove(): "+direct);
		//判断
		mario.move(direct);
	}