package jump;

import java.util.Random;

public class Distance30 {
	double[] position = new double[2];
	public double[] Dis(){
		Random rand = new Random();
		//����90-150���������Ŀ�ģ�p2����
	    int rnum = rand.nextInt(61) + 90;
	    
	    position[0] = rnum * Math.cos(30*Math.PI/180);
	    position[1] = rnum * Math.sin(30*Math.PI/180);
	    System.out.println("��ƽ̨���룺"+rnum);
		return position;
	}
}
