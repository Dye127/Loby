package jump;

import java.math.BigDecimal;

public class BigDecimal2 {

	public double dis(double distance ){
		
		//�����������뱣����λС��
		BigDecimal newDis= new BigDecimal(distance);
		double dis = newDis.setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue();
		return dis;
	}
}
