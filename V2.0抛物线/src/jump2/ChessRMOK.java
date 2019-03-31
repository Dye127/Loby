package jump2;

import java.awt.Point;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Random;
import java.util.Timer;
import java.util.TimerTask;

import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;

//chess坐标 随 平台变化
public class ChessRMOK {
	int initialX = 30;
	int initialY = 270;
	int min,max; //判断坐标
	
	int chessX,chessY;	//棋子再次起跳时坐标x
	int[] minus = new int[2];	//相对坐标

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
	
	double distance;
	BigDecimal2 bigD2 = new BigDecimal2();
	AngleTwoPoint  interA = new AngleTwoPoint();// intersection angle�н�
	
	JLabel label7[] = new JLabel[7];//棋子的7种状态
	
	int T = 0;
	int[][] b1 = new int[4][2];
	int[][] b2 = new int[4][2];
	int[][] bb = new int[b1.length-1+b2.length][2];
	int tt = 0;
	
	//改上面度全局变量 尽量改到局部
	public void View(){
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
        
        ImageIcon img1 = new ImageIcon("images/ChessState/chess0.png");
        chess.setIcon(img1);
        panel.add(chess);
        chess.setBounds(62,221,img1.getIconWidth(), img1.getIconHeight());
        
        List<String> image7 = new ArrayList<>();	//label7和image7
        image7.add("images/ChessState/chess30.png");
        image7.add("images/ChessState/chess90.png");
        image7.add("images/ChessState/chess180.png");
        image7.add("images/ChessState/chess210.png");
        image7.add("images/ChessState/chess270.png");
        image7.add("images/ChessState/chess300.png");
        image7.add("images/ChessState/chess0.png");
        
        ImageIcon imgCh[] = new ImageIcon[7];
        for(int i = 0;i < label7.length;i++){
        	label7[i] = new JLabel();
        	imgCh[i] = new ImageIcon(image7.get(i));
        	label7[i].setIcon(imgCh[i]);
        	panel.add(label7[i]);
        }
				
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
	    	//平台2的坐标（initialX + (int)dis.position[0],initialY - (int)dis.position[1]）
		    lable[1].setBounds(initialX + (int)dis.positionP[0],initialY - (int)dis.positionP[1],107,71);
	    }
	    MouseEvent();
	}
	
	public void MouseEvent(){
		frame.addMouseListener(new MouseListener() {
			long MouseStart ;
    		long MouseEnd ;
    		double pressT;
    		
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
					System.out.println(pressT);
					pressT = (MouseEnd-MouseStart)/1000.0;	 //pressT鼠标按压时间
					if(click == 1){
						Distance(pressT,62,221);
					}else{
						Distance(pressT,chessX,chessY);
					}
					RightMove();
					//distance = 302.93*pTime - 22.225;  //棋子跳跃直线方程
					
					
					
					
					/*if(click == 1){
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
								RelativeXY(initialX + (int)dis.position[0], initialY - (int)dis.position[1],chessUL[0],chessUL[1]);
								disCTar = Math.abs((A * (chessUL[0] + 28)) + (B * (chessUL[1] + 71)) + C) / Math.sqrt(A * A + B * B);
								//此处应该判断是否掉落平台
								
								JiaoDian(initialX + (int)dis.position[0], initialY - (int)dis.position[1], 62,223,chessUL[0],chessUL[1],1);
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
						dis.Dis(angle);
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
						dis.Dis(angle);
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
					}*/
					
			}
			
			private void Distance(double pressT,int CQX, int CQY) {		//棋子起跳坐标（CQX,CQY）
				// TODO Auto-generated method stub
				//棋子跳跃轨迹依赖于鼠标按压时间
				if(pressT <= 0.19)
				{
					QuXian(2,CQX,CQY);
				}
				else if(pressT > 0.19 && pressT <= 0.29)
				{
						QuXian(4,CQX,CQY);
				}
				else if(pressT > 0.29 && pressT <= 0.40)
				{
						QuXian(6,CQX,CQY);					
				}
				else if(pressT > 0.40 && pressT <= 0.51)
				{
						QuXian(8,CQX,CQY);
				}
				else if(pressT > 0.51 && pressT <= 0.61)
				{
						QuXian(10,CQX,CQY);
				}
				else if(pressT > 0.61 && pressT <= 0.72)
				{
						QuXian(12,CQX,CQY);
				}
				else if(pressT > 0.72 && pressT <= 0.83)
				{
						QuXian(14,CQX,CQY);
				}
				else if(pressT > 0.83 && pressT <= 0.94)
				{
						QuXian(16,CQX,CQY);
				}
				else if(pressT > 0.94)
				{
						QuXian(18,CQX,CQY);
				}
				Timer();
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

	public void RightMove(){
		Timer timerF = new Timer();
		timerF.schedule(new TimerTask() {

			@Override
			public void run() {
				// TODO Auto-generated method stub
				RelativeXY(initialX + (int)dis.positionP[0], initialY - (int)dis.positionP[1],bb[6][0],bb[6][1]);
				//此处应该判断是否掉落平台

				PlatformMove();
				if(c == 1){
					//最后一张图，与平台平移
					label7[6].setLocation(initialX + minus[0],initialY - minus[1]);
					chessX = initialX + minus[0];
					chessY = initialY - minus[1];
				}/*else if(c == 2){
					chess.setLocation((int)position[0],(int)position[1] + 150);
					SP2CX = (int)position[0];   //第二种情况 棋子起跳坐标
					SP2CY = (int)position[1] + 150;
				}*/
			}
		},1500);
	}
	
	/*public void LeftMove(){
		Timer timerTT = new Timer();
		timerTT.schedule(new TimerTask() {

			@Override
			public void run() {
				// TODO Auto-generated method stub
				
				RelativeXY(P2X,P2Y, bb[6][0], bb[6][1]);
				PlatformMove();
				if(c == 3){
					chess.setLocation(150 + minus[0], initialY - minus[1]);
				}else{
					chess.setLocation(bb[6][0],bb[6][1] + 150);
					SP2CX = bb[6][0];   //第四种情况 棋子起跳坐标
					SP2CY = bb[6][1] + 150;
				}
			}
		},1000);
	}*/
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
	}
	
	/*public void SecS() {
		m = (int)dis.position[0];
		n = (int)dis.position[1];
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
				dis.Dis(30.0);
				lable33.setBounds(initialX + m - (int)dis.position[0] ,initialY - n + 150 - (int)dis.position[1],107,71);
			}
		}
		P3X = initialX + m - (int)dis.position[0] ;
		P3Y = initialY - n + 150 - (int)dis.position[1] ;
	}

	public void Sec_tS(){
		for(int h = 0; h < lable.length; h++){
			int compareY = lable[h].getY();
			if(compareY == initialY + 150){
				lable22 = lable[h];
				dis.Dis(30.0);
				lable22.setLocation(150 - (int)dis.position[0],initialY - (int)dis.position[1]);
			}else if(compareY < initialY - n + 150){
				lable11 = lable[h];
				lable11.setLocation(150, initialY);
			}else{
				lable[h].setLocation(2000, initialY);
			}
		}
		P2X = 150 - (int)dis.position[0];
		P2Y = initialY - (int)dis.position[1];
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
				dis.Dis(30.0);
				lable22.setLocation(150 - (int)dis.position[0],initialY - (int)dis.position[1]);
			}
		}
		P2X = 150 - (int)dis.position[0];
		P2Y = initialY - (int)dis.position[1];
	}
	
	public void Thr_f(){
		m = (int)dis.position[0];
		n = (int)dis.position[1];
		for(int z = 0; z < lable.length; z++){
			compareX = lable[z].getX();
			if(compareX == 150){
				lable[z].setLocation(150, initialY+150);
			}else if(compareX < 150){
				lable11 = lable[z];
				lable11.setLocation(150 - m, initialY - n+150);
			}else{
				lable22 = lable[z];
				dis.Dis(30.0);
				lable22.setLocation(150 - m +(int)dis.position[0],initialY - n +150- (int)dis.position[1]);
			}
		}
		P3X = 150 - m+(int)dis.position[0];
		P3Y = initialY -n+150- (int)dis.position[1];
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
				dis.Dis(30.0);
				lable22.setLocation(initialX + (int)dis.position[0],initialY - (int)dis.position[1]);
			}else{
				lable[j].setLocation(-200, initialY);
			}
		}
		P2X = initialX + (int)dis.position[0];
		P2Y = initialY - (int)dis.position[1];
	}*/
	
	/*public void JumpLeft(int Cx, int Cy,double angle){ //��������������x y����ͽǶ�
		double hdis = distance * Math.cos(angle*Math.PI/180);	
		double vdis = distance * Math.sin(angle*Math.PI/180);
		double ndis = bigD2.dis(distance);
		double nhdis = bigD2.dis(hdis);
		double nvdis = bigD2.dis(vdis);
		
		chess.setLocation((int)(Cx - nhdis) ,(int)(Cy - nvdis));
		bb[6][0] = (int)(Cx - nhdis);
		bb[6][1] = (int)(Cy - nvdis);
	}*/
	
	public int[] RelativeXY(int platX, int platY,int chessX,int chessY){ 
		//relative displacement right 棋子与右面平台的相对位移 (Lx,Ly)落地坐标，是label7[7]坐标
		minus[0] = chessX - platX;
		minus[1] = platY - chessY;
		return minus;
	}
	
	public void PlatformMove(){
		if(click == 1){  //第一种情况  1,1
			//c = rand.nextInt(2) + 1;   
			c = 1;
			System.out.println("第一次,1or2产生1或2："+c);
			switch(c){
			case 1:{
				FirS();
			}break;
			case 2:{  //第二种情况  1,2
				//SecS();
			}break;
			default:
				System.out.println("error");
			}
		}else{
			if((c == 1) || (c == 4)){
				if(c == 1){
					b = c;
					//c = rand.nextInt(2) + 1;
					c = 1;
					System.out.println(b+",1or4产生1或2："+c);
					switch(c){
					case 1:{
						System.out.println("1,1");
						FirS();
					}break;
					case 2:{  //第二种情况 1,2
						System.out.println("1,2");
						//SecS();
					}break;
					default:
						System.out.println("error");
					}
				}else{  //第一种情况  4,1
					System.out.println("4,1");
					c = 1;
					//Fou_fS();
				}
			}else if((c == 2)||(c == 3)){
				if(c == 3){
					b = c;
					c = rand.nextInt(2) + 3;
					System.out.println(b+",2or3产生3或4:"+c);
					switch(c){
					case 3:{  //第三种情况 3,3
						//Thr_tS();
					}break;
					case 4:{  //第四种情况 3,4
						System.out.println("3,4");
						//Thr_f();
					}break;
					default:
						System.out.println("error");
					}
				}else{//2,3
					System.out.println("2,3");
					c = 3;
					//Sec_tS();
				}
			}
		}
	}

	public void QuXian(int xishu,int Qx,int Qy){ //参数t 起跳坐标Qx，Qy 平移量Px Py
		int length = 20*xishu+1;
		int min = 500;
		int[][] a = new int[length][2];

		for(int t = a.length-1; t >= 0;t--){
			a[t][0] = (int)(0.7071*t-14.142*xishu);
			a[t][1] = (int)((-0.4082*t + 0.8165*(100 - (t/xishu-10)*(t/xishu-10))/2)+8.164*xishu);
			System.out.println((Qx-a[t][0])+" "+(Qy-a[t][1]));
			if(min >= (Qy-a[t][1]))
				min = (Qy-a[t][1]);
		}
		for(int n = length-1; n >= 0; n--){		//取参数t，得到最高点
			if(min == (Qy-a[n][1])){
				T = n;
			}
		}
		int count1 = 0;
		int k1;
		for(int p = (a.length-1)-(a.length-1-T)/4; p > T; p = p - (a.length-1-T)/4){	//以最大值为分界线，前取四个点。有时候是3个 有时候4个 取前三
			k1 = count1++;
			b1[(k1)][0] = (int)(0.7071*p-14.142*xishu);
			b1[(k1)][1] = (int)((-0.4082*p + 0.8165*(100 - (p/xishu-10)*(p/xishu-10))/2)+8.164*xishu);
		}
		int count2 = 0;
		int k2;
		for(int m = T; m >= 0; m = m - T/3){	//以最大值为分界线，后取四个点
			k2 = count2++;	
			b2[k2][0] = (int)(0.7071*m-14.142*xishu);
			b2[k2][1] = (int)((-0.4082*m + 0.8165*(100 - (m/xishu-10)*(m/xishu-10))/2)+8.164*xishu);
		}
		for(int c = 0; c < b1.length-1; c++){	//两个数组合并
			bb[c][0] = Qx - b1[c][0];
			bb[c][1] = Qy - b1[c][1];
		}
		for(int c = 0; c < b2.length; c++){
			bb[b1.length-1+c][0] = Qx - b2[c][0];
			bb[b1.length-1+c][1] = Qy - b2[c][1];
		}
		System.out.println(bb.length);
		RelativeXY(initialX, initialY, bb[6][0], bb[6][1]);
	}
	public void Timer(){
		Timer timerr = new Timer();
		timerr.schedule(new TimerTask() {
			
			@Override
			public void run() {
				// TODO Auto-generated method stub
				System.out.println(tt);
				chess.setLocation(600, 0);
				
				System.out.println(bb[tt][0]+","+bb[tt][1]);
				label7[tt].setBounds(bb[tt][0],bb[tt][1],43,84);
				if(tt > 0){
					label7[tt-1].setLocation(600,0);
				}
				tt = tt + 1;
				if(tt == 7){
            		tt = 0;
            		timerr.cancel();
            	}
			}
		}, new Date(),150);
		label7[6].setLocation(600, 0);	//最后一个图片需和平台平移  bb[6][0],bb[6][1]
	}
	
	public static void main(String[] args) {
		ChessRMOK cm = new ChessRMOK();
		cm.View();
	}
}
