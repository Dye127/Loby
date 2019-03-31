package jump2;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;
import java.util.Timer;
import java.util.TimerTask;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;

//chess坐标 随 平台变化
public class ChessMoveModify3 {
	//int initialX = 30;
	int initialY = 270;
	//boolean judgeStand;	//判断棋子的状态 站立是true 空中是false
	boolean mouseListenerIsActive;	//棋子跳到平台外 游戏结束 停止监听鼠标
	int clickTime;
	String jtContent;
	
	int[] chessJ = new int[2];//棋子起跳坐标
	int[] ps = new int[2];  //platform start起跳平台坐标
	int[] minus = new int[2];	//相对坐标
	int[] cback = new int[2];	//棋子落地后退回的坐标

	int P2X,P2Y;//三个平台中的 第二个平台
	int PTX,PTY;//目标平台坐标
	
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
	int m,n;	//存储平台的x原来的值
	static int b = 0;  //站立平台
	static int c = 0 ;	//目标平台
	
	DisAngle dis = new DisAngle();

	BigDecimal2 bigD2 = new BigDecimal2();
	AngleTwoPoint  interA = new AngleTwoPoint();// intersection angle�н�
	
	JLabel labelR7[] = new JLabel[7];//棋子Right跳的7种状态
	JLabel labelL7[] = new JLabel[7];//棋子Left跳的7种状态
	
	int T = 0;
	int tt = 0;
	int M,N;//判断状态变化，
	
	//改上面度全局变量 尽量改到局部
	
	public void View(){
		
		mouseListenerIsActive = true;
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
                //System.out.println(r);
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
        chessJ[0] = 62;
        chessJ[1] = 221;
        chess.setBounds(chessJ[0],chessJ[1],img1.getIconWidth(), img1.getIconHeight());
        
        List<String> imageR7 = new ArrayList<>();	//label7和image7
        imageR7.add("images/ChessState/chess30.png");
        imageR7.add("images/ChessState/chess90.png");
        imageR7.add("images/ChessState/chess180.png");
        imageR7.add("images/ChessState/chess210.png");
        imageR7.add("images/ChessState/chess270.png");
        imageR7.add("images/ChessState/chess300.png");
        imageR7.add("images/ChessState/chess0.png");
        ImageIcon imgChR[] = new ImageIcon[7];
        for(int i = 0;i < labelR7.length;i++){//Right 7
        	labelR7[i] = new JLabel();
        	imgChR[i] = new ImageIcon(imageR7.get(i));
        	labelR7[i].setIcon(imgChR[i]);
        	panel.add(labelR7[i]);
        }
        
        List<String> imageL7 = new ArrayList<>();	//label7和image7
        imageL7.add("images/ChessState/chess300.png");
        imageL7.add("images/ChessState/chess270.png");
        imageL7.add("images/ChessState/chess210.png");
        imageL7.add("images/ChessState/chess180.png");
        imageL7.add("images/ChessState/chess90.png");
        imageL7.add("images/ChessState/chess30.png");
        imageL7.add("images/ChessState/chess0.png");
        ImageIcon imgChL[] = new ImageIcon[7];
        for(int i = 0;i < labelL7.length;i++){//Left 7
        	labelL7[i] = new JLabel();
        	imgChL[i] = new ImageIcon(imageL7.get(i));
        	labelL7[i].setIcon(imgChL[i]);
        	panel.add(labelL7[i]);
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
	    	ps[0] = 30;
	    	ps[1] = 270;
	    	lable[0].setBounds(ps[0], ps[1], 107, 71);
	    	dis.DisP(30.0);
	    	//平台2的坐标（initialX + (int)dis.position[0],initialY - (int)dis.position[1]）
		    lable[1].setBounds(ps[0] + (int)dis.positionP[0] , ps[1] - (int)dis.positionP[1],107,71);
		    PTX = ps[0] + (int)dis.positionP[0];
		    PTY = ps[1] - (int)dis.positionP[1];
	    }
	    MouseEvent();
	}
	    	
	   // 	judgeS = true;
	   // }
	//}
	
	public void MouseEvent(){
		//judgeS=true;
		frame.addMouseListener(new MouseListener() {
			
			long MouseStart ;
    		long MouseEnd ;
    		double pressT;
    		
			@Override
			public void mousePressed(MouseEvent e) {
				// TODO Auto-generated method stub
				if(e.getButton() == e.BUTTON1){	
					MouseStart = System.currentTimeMillis();
					//if(judgeS == true)
						click++;
					System.out.println(click+",");
				}
			}
    		
			@Override
			public void mouseReleased(MouseEvent e) {
				if(mouseListenerIsActive){
					MouseEnd = System.currentTimeMillis();
					System.out.println(pressT);
					pressT = (MouseEnd-MouseStart)/1000.0;	 //pressT鼠标按压时间
					//if(judgeS == true){
					ChessJump();
						if(click == 1){
							RightMove(Distance(pressT,62,221,1));
						}else if(c == 1){
							RightMove(Distance(pressT,chessJ[0],chessJ[1],1));
						}else if(c == 2){
							LeftMove(Distance(pressT,chessJ[0],chessJ[1],-1));
						}else if(c == 3){
							LeftMove(Distance(pressT,chessJ[0],chessJ[1],-1));
						}else{
							RightMove(Distance(pressT,chessJ[0],chessJ[1],1));
						}
					}
			//	}
//				judgeS = 0;
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
				clickTime = e.getClickCount();
				System.out.println(clickTime+"ggg");
			}	});
		//judgeS=false;
	}

	//棋子起跳坐标（CQX,CQY）direction跳跃方向，左-1，右+1
	public int[][] Distance(double pressT,int CQX, int CQY, int direction) {		
		// TODO Auto-generated method stub
		int[][] sample = new int[7][2];
		//棋子跳跃轨迹依赖于鼠标按压时间
		if(pressT <= 0.19)
		{
			sample = Parabola(2,CQX,CQY,direction);
		}
		else if(pressT > 0.19 && pressT <= 0.29)
		{
			sample = Parabola(4,CQX,CQY,direction);
		}
		else if(pressT > 0.29 && pressT <= 0.40)
		{
			sample = Parabola(6,CQX,CQY,direction);
		}
		else if(pressT > 0.40 && pressT <= 0.51)
		{
			sample = Parabola(8,CQX,CQY,direction);
		}
		else if(pressT > 0.51 && pressT <= 0.61)
		{
			sample = Parabola(10,CQX,CQY,direction);
		}
		else if(pressT > 0.61 && pressT <= 0.72)
		{
			sample = Parabola(12,CQX,CQY,direction);
		}
		else if(pressT > 0.72 && pressT <= 0.83)
		{
			sample = Parabola(14,CQX,CQY,direction);
		}
		else if(pressT > 0.83 && pressT <= 0.94)
		{
			sample = Parabola(16,CQX,CQY,direction);
		}
		else if(pressT > 0.94)
		{
			sample = Parabola(18,CQX,CQY,direction);
		}
		//if(judgeStand == false){
		if(direction == 1)
			TimerR(sample);
		else
			TimerL(sample);//}
		return sample;
	}
	
	public void RightMove(int[][] bb){
		Timer timerRM = new Timer();
		timerRM.schedule(new TimerTask() {

			@Override
			public void run() {
				// TODO Auto-generated method stub
				//此处应该判断是否掉落平台
				if(click == 1){
					PTX = 30 + (int)dis.positionP[0];
					PTY = initialY - (int)dis.positionP[1];
				}
				RelativeXY(PTX, PTY, bb[6][0], bb[6][1]);
				//dis.DisC(30.0, bb[6][0]);
				boolean pointL = true;	//落点相对于边界的位置 线下false 线上true
				if(bb[6][1] + 58 > judgeXY(bb[6][0] + 28,PTX,PTY,1)){
					pointL = false;
				}
				//此处应该判断 距离 然后removeMouse
				int D;
				D = pointToLine(PTX+16, PTY+22, PTX+54, PTY+44, bb[6][0]+28, bb[6][1]+58,1);
				if(D > 38 || D < 0 || (pointL == false))
					stopMouseListner();
				
				
				
				if(mouseListenerIsActive){
					cback[0] = bb[6][0] - (int)dis.positionC[0];
					cback[1] = bb[6][1] + (int)dis.positionC[1];
					PlatformMove();
					if(c == 1 && M == 4){	//4，1
						//最后一张图，与平台平移
						//labelR7[6].setLocation(initialX + minus[0],initialY - minus[1]);
						labelR7[6].setLocation(cback[0],cback[1]);
						chess.setLocation(600, 0);
						labelL7[6].setLocation(600, 0);
						chessJ[0] = cback[0];
						chessJ[1] = cback[1];
						System.out.println(3);
					}else if(c == 1 && N == 5){
						labelR7[6].setLocation(cback[0],cback[1]);
						chessJ[0] = cback[0];
						chessJ[1] = cback[1];
					}else if(c == 1){
						//labelR7[6].setLocation(initialX + minus[0],initialY - minus[1]);
						labelR7[6].setLocation(chessJ[0],chessJ[1]);
						chessJ[0] = chessJ[0];
						chessJ[1] = chessJ[1];
					}else if(c == 2){
						labelR7[6].setLocation(bb[6][0] , bb[6][1] + 150);
						labelL7[6].setLocation(600, 0);
						chessJ[0] = bb[6][0];
						chessJ[1] = bb[6][1] + 150;
						System.out.println(4);
					}
				}
			}
		},1500);
		//judgeS = false;
	}
	
	
	public void LeftMove(int[][] bb){
		//int[] dc = new int[2];
		Timer timerLM = new Timer();
		timerLM.schedule(new TimerTask() {

			@Override
			public void run() {
				// TODO Auto-generated method stub
				
				RelativeXY(PTX,PTY, bb[6][0], bb[6][1]);
				dis.DisC(30.0, bb[6][0]);
				boolean pointL = true;	//落点相对于边界的位置 线下false 线上true
				if(bb[6][1] + 58 > judgeXY(bb[6][0] + 28,PTX,PTY,-1))
					pointL = false;
				System.out.println((bb[6][1] + 58)+"llsad"+(judgeXY(bb[6][0] + 28,PTX,PTY,-1)));
				//此处应该判断 距离 然后removeMouse
				if(pointToLine(PTX+92, PTY+22, PTX+54, PTY+44, bb[6][0]+28, bb[6][1]+58,-1) > 38 || (pointL == false))
					stopMouseListner();
				
				
				
				
				if(mouseListenerIsActive){
						cback[0] = bb[6][0]+(int)dis.positionC[0];
						cback[1] = bb[6][1]+(int)dis.positionC[1];
						PlatformMove();
					if(c == 3){
						System.out.println(cback[0]+"cb0");
						labelL7[6].setLocation(cback[0], cback[1]);
						//labelL7[6].setLocation(150 + minus[0], initialY - minus[1]);
						chessJ[0] = cback[0];
						chessJ[1] = cback[1];
						//System.out.println(bb[6][0]+",,"+(int)dis.positionC[0]);
						System.out.println("1");
					}else{
						labelL7[6].setLocation(bb[6][0], bb[6][1] + 20);
						chessJ[0] = bb[6][0];	//第四种情况 棋子起跳坐标
						chessJ[1] = bb[6][1] + 20;
						System.out.println(2);
					}
				}
			}
		},1500);
		//judgeS = false;
	}
	public void FirS(){
		for(int j = 0; j < lable.length; j++){
			int compareX = lable[j].getX();	//compareX 记录平台坐标x
			if(compareX > chessJ[0]){
				lable[j].setLocation(chessJ[0] - minus[0], chessJ[1] + minus[1]);
				ps[0] = chessJ[0] - minus[0];
				ps[1] = chessJ[1] + minus[1];
			}else if(compareX > 0 && compareX < chessJ[0]){
				lable[j].setLocation(-200, initialY);
			}else{
				//lable22 = lable[j];
				dis.DisP(30.0);
				lable[j].setBounds(ps[0] + (int)dis.positionP[0] , ps[1] - (int)dis.positionP[1],107,71);
			}
		}
		PTX = ps[0] + (int)dis.positionP[0];
		PTY = ps[1] - (int)dis.positionP[1];
	}
	
	public void SecS() {
		m = (int)dis.positionP[0];
		n = (int)dis.positionP[1];
		for(int k = 0; k < lable.length; k++){
			int compareX = lable[k].getX();
			if(compareX == ps[0]){
				lable[k].setLocation(ps[0], ps[1] + 150);
			}else if(compareX > ps[0]){
				lable[k].setLocation(ps[0] + m,ps[1] - n + 150);
			}else{
				//lable[k];
				dis.DisP(30.0);
				lable[k].setBounds(ps[0] + m - (int)dis.positionP[0] ,ps[1] - n + 150 - (int)dis.positionP[1],107,71);
			}
			
		}
		P2X = ps[0] + m;
		P2Y = ps[1] - n + 150;
		PTX = ps[0] + m - (int)dis.positionP[0];
		PTY = ps[1] - n + 150 - (int)dis.positionP[1];
	}

	public void Sec_tS(){
		for(int i = 0; i < lable.length; i++){
			int compareX = lable[i].getX();
			if(compareX == P2X){
				lable[i].setLocation(2000, P2Y);
			}else if(compareX == PTX){
				System.out.println(cback[0]+"ccbb");
				lable[i].setLocation(cback[0] - minus[0], cback[1] + minus[1]);
			}else if(compareX == ps[0]){
				//lable33 = lable[i];
				dis.DisP(30.0);
				lable[i].setLocation(cback[0] - minus[0] - (int)dis.positionP[0], cback[1] + minus[1] - (int)dis.positionP[1]);
			}
		}
		ps[0] = cback[0] - minus[0];
		ps[1] = cback[1] + minus[1];
		PTX = cback[0] - minus[0] - (int)dis.positionP[0];
		PTY = cback[1] + minus[1] - (int)dis.positionP[1];
	}
	
	public void Thr_tS(){	//third_third State
		for(int x = 0; x < lable.length; x++){
			int compareX = lable[x].getX();
			if(compareX == ps[0]){
				lable[x].setLocation(2000 , 0);
			}else if(compareX < ps[0]){				
				lable[x].setLocation(cback[0] - minus[0], cback[1] + minus[1]);
				System.out.println(minus[1]+"ppp");
			}else{
				dis.DisP(30.0);
				lable[x].setLocation(cback[0] - minus[0] - (int)dis.positionP[0], cback[1] + minus[1] - (int)dis.positionP[1]);
			}
		}
		ps[0] = cback[0] - minus[0];
		ps[1] = cback[1] + minus[1];
		PTX = cback[0] - minus[0] - (int)dis.positionP[0];
		PTY = cback[1] + minus[1] - (int)dis.positionP[0];
	}
	
	public void Thr_f(){
		m = (int)dis.positionP[0];
		n = (int)dis.positionP[1];
		for(int z = 0; z < lable.length; z++){
			int compareX = lable[z].getX();
			if(compareX == ps[0]){
				lable[z].setLocation(ps[0], ps[1] + 20);
			}else if(compareX < ps[0]){
				lable[z].setLocation(ps[0] - m, ps[1] -n + 20);
			}else{
				lable22 = lable[z];
				dis.DisP(30.0);
				lable22.setLocation(ps[0] - m + (int)dis.positionP[0] , ps[1] -n + 20- (int)dis.positionP[1]);
			}
		}
		PTX = ps[0] - m + (int)dis.positionP[0];
		PTY = ps[1] -n + 20- (int)dis.positionP[1];
	}
	public void Fou_fS(){
		int minX = 500;	//找到最小的平台坐标x
		int maxY = 0;	//找到最大的平台坐标Y
		for(int j = 0; j < lable.length; j++){
			if(maxY < lable[j].getY())
				maxY = lable[j].getY();
			if(minX > lable[j].getX())
				minX = lable[j].getX();
		}
		for(int j = 0;j < lable.length; j++){
			int compareX = lable[j].getX();
			int compareY = lable[j].getY();
			if(compareX == PTX){
				lable[j].setLocation(cback[0] - minus[0], cback[1] + minus[1]);
//				lable11 = lable[j];
				//lable11.setLocation(initialX, initialY);
			}else if(compareY == maxY){
				dis.DisP(30.0);
				lable[j].setLocation(cback[0] - minus[0] + (int)dis.positionP[0], cback[1] + minus[1] - (int)dis.positionP[1]);
				//lable[j].setLocation();;
				//lable22.setLocation(initialX + (int)dis.position[0],initialY - (int)dis.position[1]);
			}else{
				lable[j].setLocation(-200, initialY);
			}
		}
		PTX = cback[0] - minus[0] + (int)dis.positionP[0];
		PTY = cback[1] + minus[1] - (int)dis.positionP[1];
	}
	
	public int[] RelativeXY(int platX, int platY,int chessX,int chessY){ 
		//relative displacement right 棋子与目标平台的相对位移 (Lx,Ly)落地坐标，是label7[7]坐标
		minus[0] = chessX - platX;
		minus[1] = platY - chessY;
		return minus;
	}
	
	public void PlatformMove(){
		if(click == 1){  //第一种情况  1,1
			//c = rand.nextInt(2) + 1;   
			c =1;
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
					if(M == 4)
						N = 5;
					//c = 1;
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
					M = 4;
					c = 1;
					Fou_fS();
				}
			}else if((c == 2)||(c == 3)){
				if(c == 3){
					b = c;
					c = rand.nextInt(2) + 3;
					//c =3;
					System.out.println(b+",2or3产生3或4:"+c);
					switch(c){
					case 3:{  //第三种情况 3,3
						Thr_tS();
					}break;
					case 4:{  //第四种情况 3,4
						M = 4;
						System.out.println("3,4");
						Thr_f();
					}break;
					default:
						System.out.println("error");
					}
				}else{	//2,3
					System.out.println("2,3");
					M = 4;
					c = 3;
					Sec_tS();
				}
			}
		}
	}

	public int[][] Parabola(int factor,int Qx,int Qy, int direction){ //参数t 起跳坐标Qx，Qy 平移量Px Py
		int[][] b1 = new int[4][2];
		int[][] b2 = new int[4][2];
		int[][] bb = new int[b1.length-1+b2.length][2];
		int length = 20*factor + 1;
		int min = 500;
		int[][] a = new int[length][2];

		for(int t = a.length-1; t >= 0;t--){
			a[t][0] = (int)(0.7071*t-14.142*factor);
			a[t][1] = (int)((-0.4082*t + 0.8165*(100 - (t/factor-10)*(t/factor-10))/2)+8.164*factor);
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
			b1[(k1)][0] = (int)(0.7071*p-14.142*factor);
			b1[(k1)][1] = (int)((-0.4082*p + 0.8165*(100 - (p/factor-10)*(p/factor-10))/2)+8.164*factor);
		}
		int count2 = 0;
		int k2;
		for(int m = T; m >= 0; m = m - T/3){	//以最大值为分界线，后取四个点
			k2 = count2++;	
			b2[k2][0] = (int)(0.7071*m-14.142*factor);
			b2[k2][1] = (int)((-0.4082*m + 0.8165*(100 - (m/factor-10)*(m/factor-10))/2)+8.164*factor);
		}
		for(int c = 0; c < b1.length-1; c++){	//两个数组合并
			bb[c][0] = Qx - b1[c][0]*direction;
			bb[c][1] = Qy - b1[c][1];
		}
		for(int c = 0; c < b2.length; c++){
			bb[b1.length-1+c][0] = Qx - b2[c][0]*direction;
			bb[b1.length-1+c][1] = Qy - b2[c][1];
		}
		return bb;
	}
	
	public void TimerR(int[][] bb){
		Timer timerRJ = new Timer();
		timerRJ.schedule(new TimerTask() {
			
			@Override
			public void run() {
				// TODO Auto-generated method stub
				chess.setLocation(600, 0);
				labelL7[6].setLocation(600, 0);
				labelR7[tt].setBounds(bb[tt][0],bb[tt][1],43,84);
				if(tt > 0){
					labelR7[tt-1].setLocation(600,0);
				}
				tt = tt + 1;
				if(tt == 7){
            		tt = 0;
            		timerRJ.cancel();
            		//ChessStand();
            	}
			}
		}, new Date(),150);
		labelR7[6].setLocation(600, 0);	//最后一个图片需和平台平移  bb[6][0],bb[6][1]
	}
	public void TimerL(int[][] bb){
		Timer timerLJ = new Timer();	//Left Jump
		timerLJ.schedule(new TimerTask() {
			
			@Override
			public void run() {
				// TODO Auto-generated method stub
				labelR7[6].setLocation(600, 0);
				labelL7[tt].setBounds(bb[tt][0],bb[tt][1],43,84);
				if(tt > 0){
					labelL7[tt-1].setLocation(600,0);
				}
				tt = tt + 1;
				if(tt == 7){
            		tt = 0;
            		timerLJ.cancel();
            		//ChessStand();
            		//int downP;
            		//System.out.println(bb[6][0]+28+"sdsssssd");
            		
            	}
			}
		}, new Date(),150);
		labelL7[6].setLocation(600, 0);	//最后一个图片需和平台平移  bb[6][0],bb[6][1]
	}
	
	public int pointToLine(int x1, int y1, int x2, int y2, int x0, int y0, int direction){
	    double space = 0;
	    double A, B, C;	//a线段的长度 
	    A = lineSpace(x1, y1, x2, y2);// 线段的长度
	    B = lineSpace(x1, y1, x0, y0);// (x1,y1)到点的距离
	    C = lineSpace(x2, y2, x0, y0);// (x2,y2)到点的距离
	    if(direction == 1){
	    double p = (A + B + C) / 2;// 半周长
	    double s = Math.sqrt(p * (p - A) * (p - B) * (p - C));// 海伦公式求面积
	    space = 2 * s / A - 9;// 返回点到线的距离（利用三角形面积公式求高）
	    System.out.println(space+",,5");
	    }else{
	    	double p = (A + B + C) / 2;// 半周长
	 	    double s = Math.sqrt(p * (p - A) * (p - B) * (p - C));// 海伦公式求面积
	 	    space = 2 * s / A;// 返回点到线的距离（利用三角形面积公式求高）
	 	    System.out.println(space+",,4");
	    }
	    return (int)space;
	}
	// 计算两点之间的距离
	public double lineSpace(int x1, int y1, int x2, int y2) {
		double lineLength = 0;
		lineLength = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
		return lineLength;
	}
	public int judgeXY(int x,int PTX1, int PTY1,int direction){
		int y = 0;
		if(direction == 1){
			y = (11 * x - 11* PTX1 + 242 + 19 * PTY1) / 19;
		}else{
			y = (1430 - 11 * x + 19 * PTY1 + 11 * PTX1) / 19;
		}
		return y;
	}

	public void ChessStand(){
		//judgeStand = true;
	}
	public void ChessJump(){
		//judgeStand = false;
	}
	public void stopMouseListner(){
	    mouseListenerIsActive = false;
	    JLabel over = new JLabel("游戏结束，是否继续（y/n）：");	//单行文本域
	    panel.add(over);
	    JButton buttonN = new JButton("n");
	    JButton buttonY = new JButton("y");
	    panel.add(buttonN);
	    panel.add(buttonY);
	    over.setBounds(50, 100, 180, 50);
	    buttonY.setBounds(50, 140, 20, 20);
	    buttonN.setBounds(80, 140, 20, 20);
	    buttonN.addActionListener(new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				// TODO Auto-generated method stub
				jtContent = "n";
				System.out.println(jtContent);
			}
		});
	    buttonY.addActionListener(new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				// TODO Auto-generated method stub
				jtContent = "y";
				System.out.println(jtContent);
				View();
				
				//Start();
			}
		});
	}
	/*public void Start(){
		do{			
			System.out.println("进入游戏------");
			MouseEvent();
			System.out.println(jtContent+"pasda");
		}while(!jtContent.equals("n"));	//输入n时 游戏结束 	
		if(jtContent.equals("n"))
			System.out.println("nononono");
	}*/
	public static void main(String[] args) {
		ChessMoveModify3 cm = new ChessMoveModify3();
		cm.View();
		//cm.Start();
	}
}
