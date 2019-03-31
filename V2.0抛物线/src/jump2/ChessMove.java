package jump2;

import java.awt.Point;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.util.Arrays;
import java.util.Random;
import java.util.Timer;
import java.util.TimerTask;

import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;

//chess坐标 随 平台变化
public class ChessMove {
	int initialX = 30;
	int initialY = 270;
	int min,max; //判断坐标
	//int passX, passY;  //棋子再次起跳时坐标x，
	
	static int[] chessUL = new int[2];  //UL upper left 棋子所在图片左上坐标
	int[] minus = new int[2];
	static int A , B , C;//目标平台左下的直线方程Lab
	static double disCTar;//棋子落地的底面中心坐标到目标平台一直线的距离
	static double disCCur;//棋子底面中心坐标到起跳平台一直线的距离
	int Y;//判断棋子是否没跳到平台
	double angle;//棋子起跳点与目标平台中心的连线 与 水平直线的 夹角
	int CP2X,CP2Y;//棋子在P2平台的坐标
	int P3X,P3Y;//P3平台中心坐标
	int SP2CX,SP2CY;//第二种情况，棋子在P2平台的坐标
	int Lp0,Lp1;//存储 第三种情况的平台二的坐标
	int P2X,P2Y;//存储 两个平台的第二个平台
	
	JFrame frame = new JFrame();
	ImageIcon p0 = new ImageIcon("images/pf0.png");
	ImageIcon p1 = new ImageIcon("images/pf1.png");
	ImageIcon p2 = new ImageIcon("images/pf2.png");
	ImageIcon p3 = new ImageIcon("images/pf3.png");
	
	JPanel panel = new JPanel();
	JLabel[] lable = new JLabel[3];
	JLabel chess = new JLabel();
	JLabel lable11 = new JLabel();	//lable11和lable22 用于存储（替换）
	JLabel lable22 = new JLabel();
	JLabel lable33 = new JLabel();
	
	double[] position = new double[2];
	
	static Random rand = new Random();
	int[] tnum = new int[3];	//存放3个随机数
	int count = 0;	//记录有效的随机数个数，平台编号
	int click = 0;	//点击次数
	int compareX = 0;	//记录平台坐标x
	int m,n;	//存储平台的x原来的值
	static int b = 0;  //站立平台
	static int c = 0 ;	//目标平台
	
	DisAngle dis = new DisAngle();
	double pTime;
	double distance;
	BigDecimal2 bigD2 = new BigDecimal2();
	AngleTwoPoint  interA = new AngleTwoPoint();// intersection angle�н�
	
	public void SetView(){
		while(count < tnum.length){
            boolean flag = true;	//用来标志的变量
            int r = rand.nextInt(4);
            for(int i=0;i<tnum.length;i++){
                if(r == tnum[i]){
                    flag = false;
                    break;
                }
            }
            if(flag){
            	tnum[count] = r;
                System.out.println(r);
                count++;
            }
        }
		
        frame.setSize(300, 500);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
         
        panel.setLayout(null);
        frame.add(panel);
        frame.setVisible(true);
        frame.setResizable(false);
        
        ImageIcon imgchess = new ImageIcon("images/ChessState/chess0.png");
        chess.setIcon(imgchess);
        panel.add(chess);
        chess.setBounds(62,221,43,84);
				
        ImageIcon [] image = new ImageIcon[4];
	    image[0] = p0;
	    image[1] = p1;
	    image[2] = p2;
	    image[3] = p3;
        for(int i = 0; i < lable.length; i++){
        	lable[i]= new JLabel();
        	panel.add(lable[i]);
        	lable[i].setIcon(image[tnum[i]]);
        }

	    panel.add(lable11);
	    panel.add(lable22);
	    panel.add(lable33);
	    
	    if(click == 0){
	    	lable[0].setBounds(initialX, initialY, 107, 71);
	    	dis.DisP(30.0);
		    lable[1].setBounds(initialX + (int)dis.positionP[0],initialY - (int)dis.positionP[1],107,71);
	    }
	    Lab(initialX + (int)dis.positionP[0], initialY - (int)dis.positionP[1],0);
	    Lab(initialX, initialY, 0);
	    disCCur = Math.abs((A * (62 + 28)) + (B * (221 + 71)) + C) / Math.sqrt(A * A + B * B);
	    System.out.println(disCCur+"nnn");
	    MouseEvent();
	}
	
	public void MouseEvent(){
		frame.addMouseListener(new MouseListener() {
			long MouseStart ;
    		long MouseEnd ;
    		@SuppressWarnings("static-access")
			@Override
			public void mousePressed(MouseEvent e) {
				// TODO Auto-generated method stub
				if(e.getButton() == e.BUTTON1){	
					MouseStart = System.currentTimeMillis();
					click++;
				}
			}
    		
			@Override
			public void mouseReleased(MouseEvent e) {
					// TODO Auto-generated method stub
					MouseEnd = System.currentTimeMillis();
					long pressT = MouseEnd - MouseStart;
					if(pressT > 1290)
					{
						//最远的曲线
						chess.setLocation(600,115);
						JTextField t1 =new JTextField();
						t1.setText("over");
						t1.setBounds(15, 120, 35, 25);
						frame.add(t1);
						System.out.println("按压鼠标时间过长"+(MouseEnd-MouseStart)+"飞到最远");
					}else{
						pTime = (double)(MouseEnd-MouseStart)/1000;	 //pTime鼠标按压时间
						distance = 302.93*pTime - 22.225;  //棋子跳跃直线方程
						if(click == 1){
							double hdis = distance * Math.sin(60*Math.PI/180);
							double vdis = distance * Math.sin(30*Math.PI/180);	
							Arrays.toString(SetPosition(hdis,vdis));
							chess.setLocation((int)position[0],(int)position[1]);
							chessUL[0] = (int)position[0];
							chessUL[1] = (int)position[1];
							Timer timerF = new Timer();
							timerF.schedule(new TimerTask() {

								@Override
								public void run() {
									// TODO Auto-generated method stub
									RelativeXY(initialX + (int)dis.positionP[0], initialY - (int)dis.positionP[1],chessUL[0],chessUL[1]);
									disCTar = Math.abs((A * (chessUL[0] + 28)) + (B * (chessUL[1] + 71)) + C) / Math.sqrt(A * A + B * B);
									//此处应该判断是否掉落平台
									
									JiaoDian(initialX + (int)dis.positionP[0], initialY - (int)dis.positionP[1], 62,223,chessUL[0],chessUL[1],1);
									System.out.println(Y+"坐标1");
									if(((chessUL[1] + 71) > Y) ||(disCTar > 22*Math.sqrt(3)))
										System.out.println("fail");
									
									PlatformMove();
									if(c == 1){
										chess.setLocation(initialX + minus[0],initialY - minus[1]);
									}else{
										chess.setLocation((int)position[0],(int)position[1] + 150);
										SP2CX = (int)position[0];   //第二种情况 棋子起跳坐标
										SP2CY = (int)position[1] + 150;
									}
								}
							},1000);
						}else if(c == 1){
							RightMove();
						}else if(c == 2){
							angle = interA.Angle(SP2CX + 28, SP2CY + 71, P3X + 54, P3Y + 22);
							dis.DisP(angle);
							JumpLeft(SP2CX, SP2CY ,angle);
							Timer timerT = new Timer();
							timerT.schedule(new TimerTask() {

								@Override
								public void run() {
									// TODO Auto-generated method stub
									Lab(P3X,P3Y, 1);
									disCTar = Math.abs((A * (chessUL[0] + 28)) + (B * (chessUL[1] + 71)) + C) / Math.sqrt(A * A + B * B);
									//此处应该判断是否掉落平台
									JiaoDian(P3X,P3Y,SP2CX,SP2CY,chessUL[0],chessUL[1],2);
									if(((chessUL[1] + 71) > Y) ||(disCTar > 22*Math.sqrt(3)))
										System.out.println("fail");
									RelativeXY(P3X, P3Y,chessUL[0], chessUL[1]);
									chess.setLocation(150 + minus[0],initialY - minus[1]);
									PlatformMove();
								}
							},1000);
						}else if(c == 3){
							LeftMove();
						}else{
							angle = Math.abs(interA.Angle(SP2CX + 28, SP2CY + 71, P3X + 54, P3Y + 22));
							dis.DisP(angle);
							JumpRight(SP2CX, SP2CY ,angle);
							Timer timerT = new Timer();
							timerT.schedule(new TimerTask() {

								@Override
								public void run() {
									// TODO Auto-generated method stub
									Lab(P2X,P2Y, 0);
									disCTar = Math.abs((A * (chessUL[0] + 28)) + (B * (chessUL[1] + 71)) + C) / Math.sqrt(A * A + B * B);
									//此处应该判断是否掉落平台
									JiaoDian(P2X,P2Y,150 + minus[0],initialY - minus[1],SP2CX,SP2CY,4);
									if(((chessUL[1] + 71) > Y) ||(disCTar > 22*Math.sqrt(3)))
										System.out.println("fail");
									RelativeXY(P3X, P3Y,chessUL[0], chessUL[1]);
									chess.setLocation(initialX + minus[0],initialY - minus[1]);
									PlatformMove();
								}
							},1000);
						}
					}
			}
			
			@Override
			public void mouseExited(MouseEvent e) {
				// TODO Auto-generated method stub
				
			}
			
			@Override
			public void mouseEntered(MouseEvent e) {
				// TODO Auto-generated method stub
				
			}
			
			@Override
			public void mouseClicked(MouseEvent e) {
				
				}
			}	
				);
	}
	
	public double[] SetPosition(double xDistance, double yDistance){
		if(click == 1){
		position[0] = xDistance + 62.00;
		position[1] = 223.00 - yDistance;
		}else{
			if(c == 1 || c == 4){
				position[0] = initialX + (int)xDistance;
				position[1] = initialY - (int)yDistance;
			}else{
				position[0] = initialX  + (int)xDistance;
				position[1] = initialY  - (int)yDistance;
			}
		}
		return position;
	}
	public void RightMove(){
		angle = Math.abs(interA.Angle(initialX + minus[0] + 28,initialY - minus[1] + 71, P2X + 54, P2Y + 22));
		dis.DisP(angle);
		JumpRight(initialX + minus[0],initialY - minus[1],angle);
		Timer timerF = new Timer();
		timerF.schedule(new TimerTask() {

			@Override
			public void run() {
				// TODO Auto-generated method stub
				RelativeXY(initialX + (int)dis.positionP[0], initialY - (int)dis.positionP[1],chessUL[0],chessUL[1]);
				disCTar = Math.abs((A * (chessUL[0] + 28)) + (B * (chessUL[1] + 71)) + C) / Math.sqrt(A * A + B * B);
				//此处应该判断是否掉落平台
				if(((chessUL[1] + 71) > Y) ||(disCTar > 22*Math.sqrt(3)))
					System.out.println("fail");
				PlatformMove();
				if(c == 1){
					chess.setLocation(initialX + minus[0],initialY - minus[1]);
				}else if(c == 2){
					chess.setLocation((int)position[0],(int)position[1] + 150);
					SP2CX = (int)position[0];   //第二种情况 棋子起跳坐标
					SP2CY = (int)position[1] + 150;
				}
			}
		},1000);
	}
	
	public void LeftMove(){
		angle = interA.Angle(150 + minus[0] + 28, initialY - minus[1] + 71, P2X + 54, P2Y + 22);
		dis.DisP(angle);
		JumpLeft(150 + minus[0], initialY - minus[1],angle);
		Timer timerTT = new Timer();
		timerTT.schedule(new TimerTask() {

			@Override
			public void run() {
				// TODO Auto-generated method stub
				Lab(P2X,P2Y, 1);
				disCTar = Math.abs((A * (chessUL[0] + 28)) + (B * (chessUL[1] + 71)) + C) / Math.sqrt(A * A + B * B);
				//此处应该判断是否掉落平台
				JiaoDian(P2X,P2Y,150 + minus[0],initialY - minus[1],chessUL[0],chessUL[1],2);
				if(((chessUL[1] + 71) > Y) ||(disCTar > 22*Math.sqrt(3)))
					System.out.println("fail");
				RelativeXY(P2X,P2Y, chessUL[0], chessUL[1]);
				PlatformMove();
				if(c == 3){
					chess.setLocation(150 + minus[0], initialY - minus[1]);
				}else{
					chess.setLocation(chessUL[0],chessUL[1] + 150);
					SP2CX = chessUL[0];   //第四种情况 棋子起跳坐标
					SP2CY = chessUL[1] + 150;
				}
			}
		},1000);
	}
	public void FirS(){
		for(int j = 0; j < lable.length; j++){
			max = lable[j].getX();
			compareX = lable[j].getX();
			if(compareX > initialX){
				lable11 = lable[j];
				lable11.setLocation(initialX, initialY);
			}else if(compareX == initialX){
				lable[j].setLocation(-200, initialY);
			}else{
				lable22 = lable[j];
				dis.DisP(30.0);
				lable22.setBounds(initialX + (int)dis.positionP[0],initialY - (int)dis.positionP[1],107,71);
			}
		}
		P2X = initialX + (int)dis.positionP[0];
		P2Y = initialY - (int)dis.positionP[1];
		Lab(P2X, P2Y,0);
	}
	
	public void SecS() {
		m = (int)dis.positionP[0];
		n = (int)dis.positionP[1];
		for(int k = 0; k < lable.length; k++){
			compareX = lable[k].getX();
			if(compareX == initialX){
				lable11 = lable[k];
				lable11.setLocation(initialX, initialY + 150);
			}else if(compareX > initialX){
				lable22 = lable[k];
				lable22.setLocation(initialX + m,initialY - n + 150);
			}else{
				lable33 = lable[k];
				dis.DisP(30.0);
				lable33.setBounds(initialX + m - (int)dis.positionP[0] ,initialY - n + 150 - (int)dis.positionP[1],107,71);
			}
		}
		P3X = initialX + m - (int)dis.positionP[0] ;
		P3Y = initialY - n + 150 - (int)dis.positionP[1] ;
	}

	public void Sec_tS(){
		for(int h = 0; h < lable.length; h++){
			int compareY = lable[h].getY();
			if(compareY == initialY + 150){
				lable22 = lable[h];
				dis.DisP(30.0);
				lable22.setLocation(150 - (int)dis.positionP[0],initialY - (int)dis.positionP[1]);
			}else if(compareY < initialY - n + 150){
				lable11 = lable[h];
				lable11.setLocation(150, initialY);
			}else{
				lable[h].setLocation(2000, initialY);
			}
		}
		P2X = 150 - (int)dis.positionP[0];
		P2Y = initialY - (int)dis.positionP[1];
	}
	public void Thr_tS(){//third_thirs State
		for(int x = 0; x < lable.length; x++){
			compareX = lable[x].getX();
			if(compareX == 150){
				lable[x].setLocation(2000, initialY);
			}else if(compareX < 150){
				lable11 = lable[x];
				lable11.setLocation(150, initialY);
			}else{
				lable22 = lable[x];
				dis.DisP(30.0);
				lable22.setLocation(150 - (int)dis.positionP[0],initialY - (int)dis.positionP[1]);
			}
		}
		P2X = 150 - (int)dis.positionP[0];
		P2Y = initialY - (int)dis.positionP[1];
	}
	
	public void Thr_f(){
		m = (int)dis.positionP[0];
		n = (int)dis.positionP[1];
		for(int z = 0; z < lable.length; z++){
			compareX = lable[z].getX();
			if(compareX == 150){
				lable[z].setLocation(150, initialY+150);
			}else if(compareX < 150){
				lable11 = lable[z];
				lable11.setLocation(150 - m, initialY - n+150);
			}else{
				lable22 = lable[z];
				dis.DisP(30.0);
				lable22.setLocation(150 - m +(int)dis.positionP[0],initialY - n +150- (int)dis.positionP[1]);
			}
		}
		P3X = 150 - m+(int)dis.positionP[0];
		P3Y = initialY -n+150- (int)dis.positionP[1];
	}
	public void Fou_fS(){
		int j1 = 0;
		min = lable[0].getY();
		for(; j1 < lable.length; j1++){
			if(min > lable[j1].getY())
			min = lable[j1].getY();
		}
		for(int j = 0;j < lable.length; j++){
			compareX = lable[j].getX();
			if(min == lable[j].getY()){
				lable11 = lable[j];
				lable11.setLocation(initialX, initialY);
			}else if(compareX == 150){
				lable22 = lable[j];
				dis.DisP(30.0);
				lable22.setLocation(initialX + (int)dis.positionP[0],initialY - (int)dis.positionP[1]);
			}else{
				lable[j].setLocation(-200, initialY);
			}
		}
		P2X = initialX + (int)dis.positionP[0];
		P2Y = initialY - (int)dis.positionP[1];
	}
	
	public void JumpRight(int Cx, int Cy,double angle){
		//水平距离  horizontal distance  hdis
		double hdis = distance * Math.cos(angle*Math.PI/180);
		
		//竖直距离  vertical distance  vdis
		double vdis = distance * Math.sin(angle*Math.PI/180);
		
		double ndis = bigD2.dis(distance);
		double nhdis = bigD2.dis(hdis);
		double nvdis = bigD2.dis(vdis);
		System.out.println("按压鼠标时间："+pTime+"\n"+"距离："+ndis+"\n"+"ˮ水平距离："+nhdis+"\n"+"竖直距离："+nvdis);
		
		//Arrays.toString(SetPosition(hdis,vdis));
		chess.setLocation((int)(Cx + nhdis) ,(int)(Cy - nvdis));
		chessUL[0] = (int)(Cx + nhdis);
		chessUL[1] = (int)(Cy - nvdis);
	}
	
	public void JumpLeft(int Cx, int Cy,double angle){ //��������������x y����ͽǶ�
		double hdis = distance * Math.cos(angle*Math.PI/180);	
		double vdis = distance * Math.sin(angle*Math.PI/180);
		double ndis = bigD2.dis(distance);
		double nhdis = bigD2.dis(hdis);
		double nvdis = bigD2.dis(vdis);
		System.out.println("按压鼠标时间："+pTime+"\n"+"距离："+ndis+"\n"+"水平距离："+nhdis+"\n"+"竖直距离："+nvdis);
		
		chess.setLocation((int)(Cx - nhdis) ,(int)(Cy - nvdis));
		chessUL[0] = (int)(Cx - nhdis);
		chessUL[1] = (int)(Cy - nvdis);
	}
	
	public int[] RelativeXY(int platX, int platY,int chessX,int chessY){ //�������ƽ̨�����꣬�������Ŀ��ƽ̨������  �� ���ӵ�ǰ����
		minus[0] = chessX - platX;
		minus[1] = platY - chessY;
		return minus;
	}
	
	public void PlatformMove(){
		if(click == 1){  //第一种情况  1,1
			c = rand.nextInt(2) + 1;
			System.out.println("第一次,1or2产生1或2："+c);
			switch(c){
			case 1:{
				FirS();
			}break;
			case 2:{  //第二种情况  1,2
				SecS();
			}break;
			default:
				System.out.println("error");
			}
		}else{
			if((c == 1) || (c == 4)){
				if(c == 1){
					b = c;
					c = rand.nextInt(2) + 1;
					System.out.println(b+",1or4产生1或2："+c);
					switch(c){
					case 1:{
						System.out.println("1,1");
						FirS();
					}break;
					case 2:{  //第二种情况 1,2
						System.out.println("1,2");
						SecS();
					}break;
					default:
						System.out.println("error");
					}
				}else{  //第一种情况  4,1
					System.out.println("4,1");
					c = 1;
					Fou_fS();
				}
			}else if((c == 2)||(c == 3)){
				if(c == 3){
					b = c;
					c = rand.nextInt(2) + 3;
					System.out.println(b+",2or3产生3或4:"+c);
					switch(c){
					case 3:{  //第三种情况 3,3
						Thr_tS();
					}break;
					case 4:{  //第四种情况 3,4
						System.out.println("3,4");
						Thr_f();
					}break;
					default:
						System.out.println("error");
					}
				}else{//2,3
					System.out.println("2,3");
					c = 3;
					Sec_tS();
				}
			}
		}
	}
	
	public void Lab(int xc,int yc,int judge){  //得到ABCD四点坐标，用judge判断 平台边沿的方向，0左，1右
		Point pa , pb, pc, pd;//目标平台四个点的坐标
		pa = new Point(xc + 16,yc + 22);
		pb = new Point(xc + 54,yc + 44);
		pc = new Point(xc + 92,yc + 22);
		if(judge == 0){
			A = (int) pa.getY() - (int)pb.getY();
			B = (int) pb.getX() - (int)pa.getX();
			C = (int)((pa.getX() * pb.getY()) - (pb.getX() * pa.getY()));
		}else if(judge == 1){
			A = (int)pb.getY() - (int) pc.getY();
			B = (int)pc.getX() - (int) pb.getX();
			C = (int)((pb.getX() * pc.getY()) - (pc.getX() * pb.getY()));
		}
	}
	
	public int JiaoDian(int x12, int y12,int x3,int y3,int x4,int y4,int judge){
		if((judge == 1)||(judge == 4)){
			int x1 = x12 + 54;
			int x2 = x12 + 16;
			int y1 = y12 + 44;
			int y2 = y12 + 22;
			x3 = x3 + 28;
			x4 = x4 + 28;
			y3 = y3 + 71;
			y4 = y4 + 71;
			Y =((y1 - y2) * (x3 * y4 - x4 * y3) - (x1 * y2 - x2 * y1) * (y3 - y4))  
			        / ((y1 - y2) * (x3 - x4) - (x1 - x2) * (y3 - y4)) ;
		}else if((judge == 2)||(judge == 3)){
			int x1 = x12 + 54;
			int x2 = x12 + 92;
			int y1 = y12 + 44;
			int y2 = y12 + 22;
			x3 = x3 + 28;
			x4 = x4 + 28;
			y3 = y3 + 71;
			y4 = y4 + 71;
			Y =((y1 - y2) * (x3 * y4 - x4 * y3) - (x1 * y2 - x2 * y1) * (y3 - y4))  
			        / ((y1 - y2) * (x3 - x4) - (x1 - x2) * (y3 - y4)) ;
		}
		return Y;
	}

	public static void main(String[] args) {
		ChessMove tr = new ChessMove();
		tr.SetView();
	}
}
