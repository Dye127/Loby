package jump2;

public class AngleTwoPoint {//����������Ŀ��ƽ̨���� �� ˮƽֱ�߼н�
	public double Angle(int CX ,int CY ,int PX ,int PY){
		double a = (double)(PY - CY)/ (double)(PX - CX);
		double angle = Math.toDegrees(Math.atan(a));//�Ƕ�
		return angle;
	}
}
