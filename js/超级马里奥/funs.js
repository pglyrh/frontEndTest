//���Mario��
	function Mario(){
		//����
		this.x = 0;
		this.y = 0;

		//�ƶ� 0->���� 1->���� 2->���� 3->����
		this.move = function(direct){
			//�ж�
			//Ϊ�˸ı�left��topֵ����Ҫ���imgԪ�أ���Ҫ����DOM
			//mymario���ǻ�ȡͼƬ����
			var mymario = document.getElementById("mymario");
			//�鿴top��leftֵ
			//stringObject.substr(start,length)
			var mleft = parseInt(mymario.offsetLeft);
			var mtop = parseInt(mymario.offsetTop);
			//alert("mymario.style.left: "+mymario.currentStyle.left);	//IE
			//alert("mymario.style.left: "+mymario.getComputedStyle.left);	//��IE
			
			//alert("mymario.style.left: "+mymario.style.left);
			
			//��10pxΪ��λ�ƶ�
			switch (direct)
			{
				case 0:
					//alert("����");
					mtop -= 10;
					mymario.style.top = mtop+"px";
					break;
				case 1:
					//alert("����");
					mleft += 10;
					mymario.style.left = mleft+"px";
					//alert(mleft);
					break;
				case 2:
					//alert("����");
					mtop += 10;
					mymario.style.top = mtop+"px";
					break;
				case 3:
					//alert("����");
					mleft -= 10;
					mymario.style.left = mleft+"px";
					break;
			}
		}
	}

	//����Mario����
	var mario = new Mario();
	
	//ȫ�ֺ���
	function marioMove(direct){
		//alert("marioMove(): "+direct);
		//�ж�
		mario.move(direct);
	}