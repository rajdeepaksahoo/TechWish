package beanClass;

public class Spring1 {
	private String msg;
	private String msg1;
	public String getMsg1() {
		return msg1;
	}

	public void setMsg1(String msg1) {
		this.msg1 = msg1;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	@Override
	public String toString() {
		return "Spring1 [" + msg1 + msg + "]";
	}
	
}
