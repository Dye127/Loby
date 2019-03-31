package jump2;

import java.util.Random;

public class DisAngle{ 
	double[] positionP = new double[2];
	public double[] DisP(double anglee){
		Random rand = new Random();
	    int rnum = rand.nextInt(61) + 90;
	    
	    positionP[0] = rnum * Math.cos(anglee*Math.PI/180);
	    positionP[1] = rnum * Math.sin(anglee*Math.PI/180);
	    System.out.println(positionP[0]+"llll+"+positionP[1]);
		return positionP;
	}
	double[] positionC = new double[2];
	public double[] DisC(double anglee,int cX){	
		//传来棋子落地的坐标，产生合适的随机数，使棋子退回到一个合适的点
		Random rand = new Random();
	    int rnum = rand.nextInt(230 - cX - 56) + 56;
	    
	    positionC[0] = rnum;
	    positionC[1] = rnum * Math.tan((anglee)*Math.PI/180);
	    System.out.println(positionC[0]+"rum"+positionC[1]);
		return positionC;
	}
}
