//定义一个Hero类，x横坐标，y纵坐标，direct方向
//方向1（←）2（↑）3（→）4（↓）

//tank父类
function Tank (x,y,direct) {
	// body...
	this.x = x;
	this.y = y;
	this.direct = direct;
	//速度
	this.speed = 1;

	//移动
	this.moveUp = function () {
		this.y -= this.speed;
		this.direct = 2;
	}
	this.moveDown = function () {
		this.y += this.speed;
		this.direct = 4;
	}
	this.moveLeft = function () {
		this.direct = 1;
		this.x -= this.speed;
	}
	this.moveRight = function () {
		this.x += this.speed;
		this.direct = 3;
	}
}

//子弹对象
function Bullet (x,y,direct) {
	// body...
	this.x = x;
	this.y = y;
	this.direct = direct;
	this.speed = 5;
	this.timer = null;
	this.isLive = true;

	//子弹移动
	this.run = function () {
		//更改坐标前先判断是否到边缘
		if (this.x<=0 || this.x>=400 || this.y <=0 || this.y>=300) {
			//需要停止
			this.isLive = false;
			window.clearInterval(this.timer);
		}else{
			switch(this.direct){
				case 1:
					this.x -= this.speed;
					break;
				case 2:
					this.y -= this.speed;
					break;
				case 3:
					this.x += this.speed;
					break;
				case 4:
					this.y += this.speed;
					break;
			}
			document.getElementById('heroBulletX').innerText = this.x;
			document.getElementById('heroBulletY').innerText = this.y;
		}
	}
}

//定义一颗空子弹
//var heroBullet = null;
//定义一组子弹
var heroBullets = new Array();

//继承通过对象冒充
function Hero (x,y,direct) {
	//通过对象冒充达到继承
	this.mytank = Tank;
	this.mytank(x,y,direct);

	//颜色
	this.color1 = "#ded284";
	//this.color1 = "red";
	this.color2 = "#ffd972"

	this.shot = function () {

		//创建子弹，与hero有关（方向，坐标）
		//方向
		switch(this.direct){
			case 1:
				heroBullet = new Bullet(this.x,this.y+9,this.direct);
				break;
			case 2:
				heroBullet = new Bullet(this.x+9,this.y,this.direct);
				break;
			case 3:
				heroBullet = new Bullet(this.x+30,this.y+9,this.direct);
				break;
			case 4:
				heroBullet = new Bullet(this.x+9,this.y+30,this.direct);
				break;
		}
		//将子弹放入到数组中（push）
		heroBullets.push(heroBullet);

		//创建时，即定时调用子弹移动run var timer =
		//window.setInterval("heroBullet.run()",50); 
		//以下代码难度较大
		//以下启动方式，定时器是独立的
		var timer = window.setInterval("heroBullets["+(heroBullets.length-1)+"].run()",50);
		//将timer赋给子弹（js为引用传递）
		//heroBullet.timer = timer;
		heroBullets[heroBullets.length-1].timer = timer;
	}

}
function EnemyTank (x,y,direct) {
	//通过对象冒充达到继承
	this.etank = Tank;
	this.etank(x,y,direct);

	//颜色
	this.color1 = "#00a2b5";
	this.color2 = "#00ffee"
}

//将绘制坦克封装成一个函数，将来可作为对象成员函数使用
function drawTank (tank) {
	// body...
	//需考虑方向，上与下类似，左与右类似
	switch(tank.direct){
		case 1:
		case 3:
			/*使用绘图技术绘制出坦克*/
			//cxt.fillStyle=tank.color1;
			cxt.fillStyle=tank.color1;
			/*选取参照点*/
			/*轮子*/ 
			cxt.fillRect(tank.x,tank.y,30,5);
			cxt.fillRect(tank.x,tank.y+15,30,5);
			/*坦克主体*/
			cxt.fillRect(tank.x+5,tank.y+6,20,8);
			/*顶盖*/
			cxt.fillStyle=tank.color2; 
			//cxt.beginPath();
			cxt.arc(tank.x+15,tank.y+10,4,0,360,false); 
			//cxt.closePath();
			cxt.fill();
			/*炮筒*/
			cxt.strokeStyle=tank.color2;
			cxt.lineWidth=1.5;
			cxt.beginPath();  
			cxt.moveTo(tank.x+15,tank.y+10);
			if (tank.direct == 3) {
				cxt.lineTo(tank.x+30,tank.y+10);
			}else if (tank.direct == 1) {
				cxt.lineTo(tank.x,tank.y+10);
			}		
			cxt.closePath();
			cxt.stroke();
			break;
		case 2:
		case 4:
		/*使用绘图技术绘制出坦克*/
			cxt.fillStyle=tank.color1;
			/*选取参照点*/
			/*轮子*/ 
			cxt.fillRect(tank.x,tank.y,5,30);
			cxt.fillRect(tank.x+15,tank.y,5,30);
			/*坦克主体*/
			cxt.fillRect(tank.x+6,tank.y+5,8,20);
			/*顶盖*/
			cxt.fillStyle=tank.color2; 
			//cxt.beginPath();
			cxt.arc(tank.x+10,tank.y+15,4,0,360,false); 
			//cxt.closePath();
			cxt.fill();
			/*炮筒*/
			cxt.strokeStyle=tank.color2;
			cxt.lineWidth=1.5;
			cxt.beginPath();
			cxt.moveTo(tank.x+10,tank.y+15);
			//区别在这
			if (tank.direct == 2) {
				cxt.lineTo(tank.x+10,tank.y);
			}else if (tank.direct == 4) {
				cxt.lineTo(tank.x+10,tank.y+30);
			}					
			cxt.closePath();
			cxt.stroke();
			break;
	}
}

//绘制子弹
function drawBullet(){
	//画出所有子弹
	for (var i = 0; i < heroBullets.length; i++ ){
		if (heroBullets[i] !== null && heroBullets[i].isLive) {
			//alert("bbb");
			cxt.fillStyle = "yellow";

			cxt.fillRect(heroBullets[i].x,heroBullets[i].y,2,2);
		} 
	}
}