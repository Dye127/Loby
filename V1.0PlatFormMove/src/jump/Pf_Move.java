package jump;

import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.util.Random;
import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;


public class Pf_Move {
	int initialX = 30;
	int initialY = 270;
	int min,max; //判断坐标
	int passX;  //棋子再次起跳时的坐标x
	int passY;  //棋子再次起跳时的坐标y
	
	JFrame frame = new JFrame();
	ImageIcon p0 = new ImageIcon("images/pf0.png");
	ImageIcon p1 = new ImageIcon("images/pf1.png");
	ImageIcon p2 = new ImageIcon("images/pf2.png");
	ImageIcon p3 = new ImageIcon("images/pf3.png");
	
	JPanel panel = new JPanel();
	JLabel [] lable = new JLabel[3];
	JLabel chess = new JLabel();
	JLabel lable11 = new JLabel();	//lable11和lable22 用于存储（替换）
	JLabel lable22 = new JLabel();
	JLabel lable33 = new JLabel();
	
	double[] position = new double[2];
	public static int[] relativeXY = new int[2]; //棋子所在图片相对平台所在图片的坐标x、y的差值
	public static int[] minusXY = new int[2]; //棋子所在图片相对平台所在图片的坐标x、y的差值
	//int relativeX;	//棋子所在图片相对平台所在图片的坐标x、y的差值
	//int relativeY;
	
	static Random rand = new Random();
	int[] tnum = new int[3];	//存放3个随机数
	int count = 0;	//记录有效的随机数个数，平台编号
	int click = 0;	//点击次数
	int compareX = 0;	//记录平台坐标x
	int m,n;	//存储平台的x原来的值
	int newM,newN;    //存储目标平台的坐标值
	int mousec;		//随机一个数，位置移动变化
	static int b = 0;  //站立平台
	static int c = 0 ;	//目标平台
	int cbx; //棋子底部坐标x
	int cby;
	
	Distance30 dis = new Distance30();
	double pTime;
	double distance;
	BigDecimal2 bigD2 = new BigDecimal2();
	
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
        chess.setBounds(62,237,57,69);
				
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
	    	dis.Dis();
		    lable[1].setBounds(initialX + (int)dis.position[0],initialY - (int)dis.position[1],107,71);
	    }
	    MouseEvent();
	}
	
	public void MouseEvent(){
		frame.addMouseListener(new MouseListener() {
    		@Override
			public void mousePressed(MouseEvent e) {
				// TODO Auto-generated method stub

			}
    		
			public void mouseReleased(MouseEvent e) {
					// TODO Auto-generated method stub
					
			}
			
			public void mouseExited(MouseEvent e) {
				// TODO Auto-generated method stub
				
			}
			
			public void mouseEntered(MouseEvent e) {
				// TODO Auto-generated method stub
				
			}
			
			@SuppressWarnings("static-access")
			public void mouseClicked(MouseEvent e) {
				if(e.getButton() == e.BUTTON1){		//鼠标左键
				// TODO Auto-generated method stub
					click++;
					if(click == 1){  //第一种情况  1,1
						c = rand.nextInt(2) + 1;
						System.out.println("第一次,1or2产生1或2："+c);
						switch(c){
						case 1:{
							first();
						}break;
						case 2:{  //第二种情况  1,2
							second();
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
									first();
								}break;
								case 2:{  //第二种情况  1,2
									System.out.println("1,2");
									second();
								}break;
								default:
									System.out.println("error");
								}
							}else{  //第一种情况  4,1
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
										dis.Dis();
										lable22.setLocation(initialX + (int)dis.position[0],initialY - (int)dis.position[1]);
									}else{
										lable[j].setLocation(-200, initialY);
									}
								}
							}
						}else if((c == 2)||(c == 3)){
							if(c == 3){
								b = c;
								c = rand.nextInt(2) + 3;
								System.out.println(b+",2or3产生3或4："+c);
								switch(c){
								case 3:{  //第三种情况 3,3
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
											dis.Dis();
											lable22.setLocation(150 - (int)dis.position[0],initialY - (int)dis.position[1]);
										}
									}
								}break;
								case 4:{  //第四种情况 3,4
									System.out.println("3,4");
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
											dis.Dis();
											lable22.setLocation(150 - m+(int)dis.position[0],initialY -n+150- (int)dis.position[1]);
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
										dis.Dis();
										lable22.setLocation(150 - (int)dis.position[0],initialY - (int)dis.position[1]);
									}else if(compareY < initialY - n + 150){
										lable11 = lable[h];
										lable11.setLocation(150, initialY);
									}else{
										lable[h].setLocation(2000, initialY);
									}
								}
							}
						}
					}}
				}
			}	
				);
	}
	
	public double[] SetPosition(double xDistance, double yDistance){
		if(click == 1){
		position[0] = xDistance + 62.00;
		position[1] = 237.00 - yDistance;
		passX = (int)position[0];
		passY = (int)position[1];
		}else{
			position[0] = passX + (int)xDistance;
			position[1] = passY - (int)yDistance;
			passX = (int)position[0];
			passY = (int)position[1];
		}
		return position;
	}
	
	
	public int[] first(){
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
				dis.Dis();
				lable22.setBounds(initialX + (int)dis.position[0],initialY - (int)dis.position[1],107,71);
			}
		}
		relativeXY[0] = initialX + (int)dis.position[0];
		relativeXY[1] = initialY - (int)dis.position[1];
		return relativeXY;
	}
	public void second() {
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
				dis.Dis();
				lable33.setBounds(initialX + m - (int)dis.position[0] ,initialY - n + 150 - (int)dis.position[1],107,71);
				//System.out.println(initialY - n + 150 - (int)dis.position[1] );
			}
		}
	}
	
	public static void main(String[] args) {
		Pf_Move tr = new Pf_Move();
		tr.SetView();
	}
}
