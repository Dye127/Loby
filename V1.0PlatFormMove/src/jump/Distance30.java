package jump;

import java.util.Random;

public class Distance30 {
	double[] position = new double[2];
	public double[] Dis(){
		Random rand = new Random();
		//产生90-150的随机数，目的：p2坐标
	    int rnum = rand.nextInt(61) + 90;
	    
	    position[0] = rnum * Math.cos(30*Math.PI/180);
	    position[1] = rnum * Math.sin(30*Math.PI/180);
	    System.out.println("两平台距离："+rnum);
		return position;
	}
}
