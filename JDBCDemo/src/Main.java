import java.sql.*;

public class Main {
    public static void main(String[] args) throws SQLException {
        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:orcl","c##batch11am","nareshit");
        Statement st = con.createStatement();
        ResultSet rs = st.executeQuery("select * from student48");
        while (rs.next()) {
            System.out.println(rs.getString(1) + " " + rs.getString(2) + " " + rs.getString(3) + " " + rs.getString(4) + " " + rs.getString(5));
        }
    }
}