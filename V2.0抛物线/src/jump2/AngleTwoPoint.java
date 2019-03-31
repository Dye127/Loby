package jump2;

public class AngleTwoPoint {//求起跳点与目标平台连线 与 水平直线夹角
	public double Angle(int CX ,int CY ,int PX ,int PY){
		double a = (double)(PY - CY)/ (double)(PX - CX);
		double angle = Math.toDegrees(Math.atan(a));//角度
		return angle;
	}
}
