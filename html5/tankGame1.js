//定义一个Hero类，x横坐标，y纵坐标，direct方向
//方向1（←）2（↑）3（→）4（↓）
function Hero (x,y,direct) {
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

//将绘制坦克封装成一个函数，将来可作为对象成员函数使用
function drawTank (tank) {
	// body...
	//需考虑方向，上与下类似，左与右类似
	switch(tank.direct){
		case 1:
		case 3:
			/*使用绘图技术绘制出坦克*/
			cxt.fillStyle="#ded284";
			/*选取参照点*/
			/*轮子*/ 
			cxt.fillRect(tank.x,tank.y,30,5);
			cxt.fillRect(tank.x,tank.y+15,30,5);
			/*坦克主体*/
			cxt.fillRect(tank.x+5,tank.y+6,20,8);
			/*顶盖*/
			cxt.fillStyle="#ffd972"; 
			//cxt.beginPath();
			cxt.arc(tank.x+15,tank.y+10,4,0,360,false); 
			//cxt.closePath();
			cxt.fill();
			/*炮筒*/
			cxt.strokeStyle="#ffd972";
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
			cxt.fillStyle="#ded284";
			/*选取参照点*/
			/*轮子*/ 
			cxt.fillRect(tank.x,tank.y,5,30);
			cxt.fillRect(tank.x+15,tank.y,5,30);
			/*坦克主体*/
			cxt.fillRect(tank.x+6,tank.y+5,8,20);
			/*顶盖*/
			cxt.fillStyle="#ffd972"; 
			//cxt.beginPath();
			cxt.arc(tank.x+10,tank.y+15,4,0,360,false); 
			//cxt.closePath();
			cxt.fill();
			/*炮筒*/
			cxt.strokeStyle="#ffd972";
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