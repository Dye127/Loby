package jump2;

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
	int min,max; //�ж�����
	int passX;  //�����ٴ�����ʱ������x
	int passY;  //�����ٴ�����ʱ������y
	
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
	public static int[] relativeXY = new int[2]; //��������ͼƬ���ƽ̨����ͼƬ������x��y�Ĳ�ֵ
	public static int[] minusXY = new int[2]; //��������ͼƬ���ƽ̨����ͼƬ������x��y�Ĳ�ֵ
	//int relativeX;	//��������ͼƬ���ƽ̨����ͼƬ������x��y�Ĳ�ֵ
	//int relativeY;
	
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
	int cbx; //���ӵײ�����x
	int cby;
	
	DisAngle dis = new DisAngle();
	double pTime;
	double distance;
	BigDecimal2 bigD2 = new BigDecimal2();
	
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
	    	dis.DisP(30.0);
		    lable[1].setBounds(initialX + (int)dis.positionP[0],initialY - (int)dis.positionP[1],107,71);
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
				if(e.getButton() == e.BUTTON1){		//������
				// TODO Auto-generated method stub
					click++;
					if(click == 1){  //��һ�����  1,1
						c = rand.nextInt(2) + 1;
						System.out.println("��һ��,1or2����1��2��"+c);
						switch(c){
						case 1:{
							first();
						}break;
						case 2:{  //�ڶ������  1,2
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
				dis.DisP(30.0);
				lable22.setBounds(initialX + (int)dis.positionP[0],initialY - (int)dis.positionP[1],107,71);
			}
		}
		relativeXY[0] = initialX + (int)dis.positionP[0];
		relativeXY[1] = initialY - (int)dis.positionP[1];
		return relativeXY;
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
				//System.out.println(initialY - n + 150 - (int)dis.position[1] );
			}
		}
	}
	
	public static void main(String[] args) {
		Pf_Move tr = new Pf_Move();
		tr.SetView();
	}
}
