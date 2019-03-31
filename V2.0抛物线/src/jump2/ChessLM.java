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

//chess���� �� ƽ̨ �仯
public class ChessLM {
	int initialX = 30;
	int initialY = 270;
	int min,max; //�ж�����
	int passX;  //�����ٴ�����ʱ������x
	int passY;  //�����ٴ�����ʱ������y
	static int[] chessUL = new int[2];  //UL upper left ��������ͼƬ��������
	int[] lableUL = new int[2];  //ƽ̨����ͼƬ��������
	int[] minus = new int[2];
	static int A , B , C;//Ŀ��ƽ̨���±ߵ�ֱ�߷���Lab
	static double disCL;//������صĵ����������굽ֱ�ߵľ���
	double angle;//������������Ŀ��ƽ̨���ĵ����� �� ˮƽֱ�ߵ� �н�
	int CP2X,CP2Y;//������P2ƽ̨������
	int P3X,P3Y;//P3ƽ̨��������
	int SP2CX,SP2CY;//�ڶ��������������P2ƽ̨������
	int Lp0,Lp1;//�洢 �����������ƽ̨��������
	int P2X,P2Y;//�洢 ����ƽ̨�ĵڶ���ƽ̨
	int Y;//�ж������Ƿ�û����ƽ̨
	
	JFrame frame = new JFrame();
	ImageIcon p0 = new ImageIcon("images/pf0.png");
	ImageIcon p1 = new ImageIcon("images/pf1.png");
	ImageIcon p2 = new ImageIcon("images/pf2.png");
	ImageIcon p3 = new ImageIcon("images/pf3.png");
	
	JPanel panel = new JPanel();
	JLabel [] lable = new JLabel[3];
	JLabel chess = new JLabel();
	JLabel lable11 = new JLabel();	//lable11��lable22 ���ڴ洢���滻��
	JLabel lable22 = new JLabel();
	JLabel lable33 = new JLabel();
	
	double[] position = new double[2];
	
	static Random rand = new Random();
	int[] tnum = new int[3];	//���3�������
	int count = 0;	//��¼��Ч�������������ƽ̨���
	int click = 0;	//�������
	int compareX = 0;	//��¼ƽ̨����x
	int m,n;	//�洢ƽ̨��xԭ����ֵ
	int newM,newN;    //�洢Ŀ��ƽ̨������ֵ
	int mousec;		//���һ������λ���ƶ��仯
	static int b = 0;  //վ��ƽ̨
	static int c = 0 ;	//Ŀ��ƽ̨
	
	DisAngle dis = new DisAngle();
	double pTime;
	double distance;
	BigDecimal2 bigD2 = new BigDecimal2();
	AngleTwoPoint  interA = new AngleTwoPoint();// intersection angle�н�
	
	public void SetView(){
		while(count < tnum.length){
            boolean flag = true;	//������־�ı���
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
        chess.setBounds(62,223,43,84);
				
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
					long mimus = MouseEnd - MouseStart;
					if(mimus < 73.37)
					{
						System.out.println("��ѹ���ʱ����̣�"+(MouseEnd-MouseStart)+"������ʧ��");
					}else if(mimus > 1600)
					{
						chess.setLocation(600,115);
						JTextField t1 =new JTextField();
						t1.setText("over");
						t1.setBounds(15, 120, 35, 25);
						frame.add(t1);
						System.out.println("��ѹ���ʱ�����"+(MouseEnd-MouseStart)+"���ɵ���Զ");
					}else{
						pTime = (double)(MouseEnd-MouseStart)/1000;	 //pTime��갴ѹʱ��
						distance = 302.93*pTime - 22.225;  //������Ծֱ�߷���
						if(click == 1){
							JumpRight();
							Timer timerF = new Timer();
							timerF.schedule(new TimerTask() {

								@Override
								public void run() {
									// TODO Auto-generated method stub
									RelativeXY(initialX + (int)dis.positionP[0], initialY - (int)dis.positionP[1],chessUL[0],chessUL[1]);
									disCL = Math.abs((A * (chessUL[0] + 28)) + (B * (chessUL[1] + 71)) + C) / Math.sqrt(A * A + B * B);
									//�˴�Ӧ���ж��Ƿ����ƽ̨
									JiaoDian(initialX + (int)dis.positionP[0], initialY - (int)dis.positionP[1], 62,223,chessUL[0],chessUL[1],0);
									if(((chessUL[1] + 71) > Y) ||(disCL > 22*Math.sqrt(3)))
										System.out.println("fail");
									PlatformMove();
									if(c == 1){
										chess.setLocation(initialX + minus[0],initialY - minus[1]);
									}else{
										chess.setLocation((int)position[0],(int)position[1] + 150);
										SP2CX = (int)position[0];   //�ڶ������ ������������
										SP2CY = (int)position[1] + 150;
									}
								}
							},1000);
						}else if(click == 2){
							angle = interA.Angle(SP2CX + 28, SP2CY + 71, P3X + 54, P3Y + 22);
							dis.DisP(angle);
							JumpLeft(SP2CX, SP2CY ,angle);
							
							Lab(P3X,P3Y, 1);
							disCL = Math.abs((A * (chessUL[0] + 28)) + (B * (chessUL[1] + 71)) + C) / Math.sqrt(A * A + B * B);
							//�˴�Ӧ���ж��Ƿ����ƽ̨
							JiaoDian(P3X,P3Y,SP2CX,SP2CY,chessUL[0],chessUL[1],1);
							if(((chessUL[1] + 71) > Y) ||(disCL > 22*Math.sqrt(3)))
								System.out.println("fail");
							
							Timer timerT = new Timer();
							timerT.schedule(new TimerTask() {

								@Override
								public void run() {
									// TODO Auto-generated method stub
									RelativeXY(P3X, P3Y,chessUL[0], chessUL[1]);
									chess.setLocation(150 + minus[0],initialY - minus[1]);
									third();
								}
							},1000);
						}else{ //��������
							int CTakeOffX;//�����������������x
							int CTakeOffY;//�����������������y
							CTakeOffX = 150 + minus[0] + 28;
							CTakeOffY = initialY - minus[1] + 71;
							int PCenterX;//ƽ̨���ĵ�x
							int PCenterY;//ƽ̨���ĵ�y
							PCenterX = 150 - (int)dis.positionP[0] + 54;
							PCenterY = initialY - (int)dis.positionP[1] + 22;
							angle = interA.Angle(CTakeOffX, CTakeOffY, PCenterX, PCenterY);
							dis.DisP(angle);
							JumpLeft(CTakeOffX - 28, CTakeOffY - 71,angle);
							Timer timerTT = new Timer();
							timerTT.schedule(new TimerTask() {

								@Override
								public void run() {
									// TODO Auto-generated method stub
									RelativeXY(P2X,P2Y, chessUL[0], chessUL[1]);
									chess.setLocation(150 + minus[0], initialY - minus[1]);
									thirdT();
								}
							},1000);
						}
						/*if(click == 1){
							JumpRight();
							Timer timerF = new Timer();
							timerF.schedule(new TimerTask() {
								
								@Override
								public void run() {
									// TODO Auto-generated method stub
									RelativeXY(initialX + (int)dis.position[0], initialY - (int)dis.position[1]);
									
									disCL = Math.abs((A * (chessUL[0] + 28)) + (B * (chessUL[1] + 71)) + C) / Math.sqrt(A * A + B * B);
									
									if((initialX + minus[0] < (initialX + (int)dis.position[0] + 35)) || ((2 * disCL) / Math.sqrt(3) > 44)){	
										JTextField t2 =new JTextField();
										t2.setText("o");
										t2.setBounds(15, 120, 35, 25);
										panel.add(t2);
									}else{
										chess.setLocation(initialX + minus[0],initialY - minus[1]);
										first();
									}		
								}
							},1000);
						}else{
							JumpRight();
							Timer timer = new Timer();
							timer.schedule(new TimerTask() {
								
								@Override
								public void run() {
									// TODO Auto-generated method stub
									RelativeXY(lableUL[0], lableUL[1]);
									chess.setLocation(initialX + minus[0],initialY - minus[1]);
									disCL = Math.abs((A * (chessUL[0] + 28)) + (B * (chessUL[1] + 71)) + C) / Math.sqrt(A * A + B * B);
									
									if((initialX + minus[0] < (initialX + (int)dis.position[0] + 35)) || ((2 * disCL) / Math.sqrt(3) > 44)){		
										JTextField t2 =new JTextField();
										t2.setText("o");
										t2.setBounds(15, 120, 35, 25);
										panel.add(t2);
									}else{
										chess.setLocation(initialX + minus[0],initialY - minus[1]);
										first();
									}	
									//first();
								}
							},1000);
						}*/
					}
					//PlatformMove();
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
				frame.setTitle(e.getX()+","+e.getY());
				}
			}	
				);
	}
	
	public double[] SetPosition(double xDistance, double yDistance){
		if(click == 1){
		position[0] = xDistance + 62.00;
		position[1] = 223.00 - yDistance;
		//passX = (int)position[0];
		//passY = (int)position[1];
		}else{
			if(c == 1 || c == 4){
				//position[0] = initialX + minus[0] + (int)xDistance;
				//position[1] = initialY - minus[1] - (int)yDistance;
				position[0] = initialX + (int)xDistance;
				position[1] = initialY - (int)yDistance;
				//passX = (int)position[0];
				//passY = (int)position[1];
			}else{
				//position[0] = initialX + minus[0] + (int)xDistance;
				//position[1] = initialY - minus[1] - (int)yDistance;
				position[0] = initialX  + (int)xDistance;
				position[1] = initialY  - (int)yDistance;
			}
		}
		return position;
	}
	
	public void first(){
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
		lableUL[0] = initialX + (int)dis.positionP[0];
		lableUL[1] = initialY - (int)dis.positionP[1];
		Lab(lableUL[0], lableUL[1],0);
	}
	
	public void second() {
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

	public void third(){
		c = 3;
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
	public void thirdT(){
		c = 3;
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
	
	public void JumpRight(){
		//ˮƽ����  horizontal distance  hdis
		double hdis = distance * Math.sin(60*Math.PI/180);
		
		//��ֱ����  vertical distance  vdis
		double vdis = distance * Math.sin(30*Math.PI/180);
		
		double ndis = bigD2.dis(distance);
		double nhdis = bigD2.dis(hdis);
		double nvdis = bigD2.dis(vdis);
		System.out.println("��ѹ���ʱ�䣺"+pTime+"\n"+"���룺"+ndis+"\n"+"ˮƽ���룺"+nhdis+"\n"+"��ֱ���룺"+nvdis);
		
		Arrays.toString(SetPosition(hdis,vdis));
		chess.setLocation((int)position[0],(int)position[1]);
		chessUL[0] = (int)position[0];
		chessUL[1] = (int)position[1];
	}
	
	public void JumpLeft(int Cx, int Cy,double angle){ //��������������x y����ͽǶ�
		//ˮƽ����  horizontal distance  hdis
		double hdis = distance * Math.cos(angle*Math.PI/180);
		
		//��ֱ����  vertical distance  vdis
		double vdis = distance * Math.sin(angle*Math.PI/180);
		
		double ndis = bigD2.dis(distance);
		double nhdis = bigD2.dis(hdis);
		double nvdis = bigD2.dis(vdis);
		System.out.println("��ѹ���ʱ�䣺"+pTime+"\n"+"���룺"+ndis+"\n"+"ˮƽ���룺"+nhdis+"\n"+"��ֱ���룺"+nvdis);
		
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
		//click++;
		if(click == 1){  //��һ�����  1,1
			/*c = rand.nextInt(2) + 1;
			System.out.println("��һ��,1or2����1��2��"+c);
			switch(c){
			case 1:{
				first();
			}break;
			case 2:{  //�ڶ������  1,2
*/				second();
			/*}break;
			default:
				System.out.println("error");
			}*/
		}else{
			if((c == 1) || (c == 4)){
				if(c == 1){
					b = c;
					c = rand.nextInt(2) + 1;
					System.out.println(b+",1or4����1��2��"+c);
					switch(c){
					case 1:{
						System.out.println("1,1");
						first();
					}break;
					case 2:{  //�ڶ������  1,2
						System.out.println("1,2");
						second();
					}break;
					default:
						System.out.println("error");
					}
				}else{  //��һ�����  4,1
					System.out.println("4,1");
					c = 1;
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
				}
			}else if((c == 2)||(c == 3)){
				if(c == 3){
					b = c;
					c = rand.nextInt(2) + 3;
					System.out.println(b+",2or3����3��4��"+c);
					switch(c){
					case 3:{  //��������� 3,3
						System.out.println("3,3");
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
					}break;
					case 4:{  //��������� 3,4
						System.out.println("3,4");
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
								lable22.setLocation(150 - m+(int)dis.positionP[0],initialY -n+150- (int)dis.positionP[1]);
							}
						}
					}break;
					default:
						System.out.println("error");
					}
				}else{//2,3
					System.out.println("2,3");
					c = 3;
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
				}
			}
		}
	}
	public void Lab(int xc,int yc,int judge){  //�õ�ABCD�ĵ����꣬��judge�ж� ƽ̨���صķ���0��1��
		Point pa , pb, pc, pd;//Ŀ��ƽ̨�ĸ��������
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
		if(judge == 0){
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
		}else if(judge == 1){
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
		ChessLM tr = new ChessLM();
		tr.SetView();
	}
}
