package jump2;

public class JiaoDian1 {
	public static void main(String[] args) {

	    //��һ��ֱ��  
	    double x1 = 1, y1 = 1, x2 = 2, y2 = 0;   
	    double a = (y1 - y2) / (x1 - x2);  
	    double b = (x1 * y2 - x2 * y1) / (x1 - x2);  
	    System.out.println("�����ֱ�߷���Ϊ: y=" + a + "x + " + b);  
	      
	    //�ڶ���  
	    double x3 = 1, y3 = 3, x4 = 0, y4 = 0;  
	    double c = (y3 - y4) / (x3 - x4);  
	    double d = (x3 * y4 - x4 * y3) / (x3 - x4);  
	    System.out.println("�����ֱ�߷���Ϊ: y=" + c + "x + " + d);  
	      
	    double x = ((x1 - x2) * (x3 * y4 - x4 * y3) - (x3 - x4) * (x1 * y2 - x2 * y1))  
	        / ((x3 - x4) * (y1 - y2) - (x1 - x2) * (y3 - y4));  
	      
	    double y = ((y1 - y2) * (x3 * y4 - x4 * y3) - (x1 * y2 - x2 * y1) * (y3 - y4))  
	        / ((y1 - y2) * (x3 - x4) - (x1 - x2) * (y3 - y4));  
	      
	    System.out.println("���ǵĽ���Ϊ: (" + x + "," + y + ")"); 

	}
}
