package jump;

import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.util.Timer;
import java.util.TimerTask;

import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;

@SuppressWarnings("serial")
public class ChessJump extends JFrame{
	static ChessJump frame = new ChessJump();
	ImageIcon ch1 = new ImageIcon("images/ChessState/chess0.png");
	ImageIcon ch2 = new ImageIcon("images/ChessState/chess30.png");
	ImageIcon ch3 = new ImageIcon("images/ChessState/chess90.png");
	ImageIcon ch4 = new ImageIcon("images/ChessState/chess180.png");
	ImageIcon ch5 = new ImageIcon("images/ChessState/chess210.png");
	ImageIcon ch6 = new ImageIcon("images/ChessState/chess270.png");
	ImageIcon ch7 = new ImageIcon("images/ChessState/chess300.png");
	
	ImageIcon[] image1 = new ImageIcon[6];
	
	JPanel panel = new JPanel();
	
    
	JLabel lable [] = new JLabel[8];
	JLabel lable1= new JLabel();
	JLabel jp1 = new JLabel();
	JLabel jp2 = new JLabel();
	public void View(){
		image1[0] = ch2;
		image1[1] = ch3;
		image1[2] = ch4;
		image1[3] = ch5;
		image1[4] = ch6;
		image1[5] = ch7;
		
		frame.setSize(300, 500);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setVisible(true);
		frame.setResizable(false);
		panel.setLayout(null);
        frame.add(panel);
        for(int i = 0 ; i < lable.length - 2 ; i++){
        	lable[i] = new JLabel();
        	panel.add(lable[i]);
        	lable[i].setIcon(image1[i]);
        }
        panel.add(lable1);
        lable1.setIcon(ch1);
        lable1.setBounds(40, 200, 41, 71);
        
        ImageIcon p11 = new ImageIcon("images/pf3.png");
		jp1.setIcon(p11);
	    panel.add(jp1);
	    jp1.setBounds(11, 233, 107, 71);

		ImageIcon pl2 = new ImageIcon("images/pf2.png");
	    jp2.setIcon(pl2);
	    panel.add(jp2);
	    jp2.setBounds(97, 183, 107, 71);
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
				
				lable1.setLocation(2000, 0);
				Timer timer0 = new Timer();
				timer0.schedule(new TimerTask() {
					
					@Override
					public void run() {
						// TODO Auto-generated method stub
						lable[0].setBounds(62,170,41,71);
					}
				},200);
				Timer timer01 = new Timer();
				timer01.schedule(new TimerTask() {
					
					@Override
					public void run() {
						// TODO Auto-generated method stub
						panel.remove(lable[0]);
						panel.repaint();
						lable[1].setBounds(92, 149, 41,71);
					}
				},600);
				Timer timer1 = new Timer();
				timer1.schedule(new TimerTask() {
					
					@Override
					public void run() {
						// TODO Auto-generated method stub
						panel.remove(lable[1]);
						panel.repaint();
						lable[2].setBounds(108, 146, 41,71);
					}
				},900);
				Timer timer2 = new Timer();
				timer2.schedule(new TimerTask() {
					
					@Override
					public void run() {
						// TODO Auto-generated method stub
						panel.remove(lable[2]);
						panel.repaint();
						lable[3].setBounds(111, 147, 41,71);
					}
				},1200);
				Timer timer22 = new Timer();
				timer22.schedule(new TimerTask() {
					
					@Override
					public void run() {
						// TODO Auto-generated method stub
						panel.remove(lable[3]);
						panel.repaint();
						lable[4].setBounds(114, 147, 41,71);
					}
				},1500);
				Timer timer24 = new Timer();
				timer24.schedule(new TimerTask() {
					
					@Override
					public void run() {
						// TODO Auto-generated method stub
						panel.remove(lable[4]);
						panel.repaint();
						lable[5].setBounds(118, 147, 41,71);
					}
				},1800);
				Timer timer23 = new Timer();
				timer23.schedule(new TimerTask() {
					
					@Override
					public void run() {
						// TODO Auto-generated method stub
						panel.remove(lable[5]);
						panel.repaint();
						lable1.setLocation(126,148);
					}
				},2100);
				Timer timer25 = new Timer();
				timer25.schedule(new TimerTask() {
					
					@Override
					public void run() {
						// TODO Auto-generated method stub
						lable1.setLocation(126,150);
					}
				},2700);
				
			}
		});
	}

	public static void main(String[] args){   
		frame.View();
	}
}
