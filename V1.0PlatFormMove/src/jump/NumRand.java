package jump;

import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.util.Random;

import javax.swing.JFrame;

public class NumRand {
	static Random rand = new Random();
	static int click = 0; //记录鼠标click次数
	static int a = 0;
	static int b = 0;  //站立平台
	static int c = 0 ;	//目标平台
	static int d = 0;
	static NumRand r = new NumRand();
	
	public static void main(String[] args) {
		
		JFrame frame = new JFrame();
		frame.setSize(300, 500);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
        frame.setResizable(false);
        
        frame.addMouseListener(new MouseListener() {
			
			@Override
			public void mouseReleased(MouseEvent e) {
				// TODO Auto-generated method stub
				
			}
			
			@Override
			public void mousePressed(MouseEvent e) {
				// TODO Auto-generated method stub
				
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
				// TODO Auto-generated method stub
				click++;
				
				if(click == 1){
					c = rand.nextInt(2) + 1;
					System.out.println("第一次,1or2产生1或2："+c);
				}else{
					if((c == 1) || (c == 4)){
						b = c;
						c = rand.nextInt(2) + 1;
						System.out.println(b+",1or4产生1或2："+c);
						
					}else if((c == 2)||(c == 3)){
						b = c;
						c = rand.nextInt(2) + 3;
						System.out.println(b+",2or3产生3或4："+c);
						
					}
				}
			}
		});
        
        
        
		/*if((a == 1) || (a == 4)){
			
		}else if((a == 2) || (a == 3)){
			b = rand.nextInt(2) + 3;
		}
		
		switch(a){
		case 1: 
		case 4:
	    {
	    	switch(b)  // switch语句中嵌套switch语句
	        {
	            case 1: r.Click14(click) ;
				c = r.Click14(click) ;
				r.Click23(c);break;
	            case 2: System.out.println(a + ","+ b);break;
	            default: System.out.println("222");
	        }
	        break;
	    }
	    case 2: 
	    case 3:
	    {
	        switch(b)  // switch语句中嵌套switch语句
	        {
	            case 3: System.out.println(a + ","+ b);break;
	            case 4: System.out.println(a + ","+ b);break;
	            default: System.out.println("222");
	        }
	        break;
	    }
	    default :
	    	System.out.println("error");
		}
	}*/
}}
