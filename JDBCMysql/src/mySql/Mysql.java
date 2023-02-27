package mySql;

import java.sql.*;

public class Mysql {
    public static void main(String[] args) throws SQLException {
        Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/blood", "root", "razdeepak");
        Statement st = con.createStatement();
        ResultSet rs = st.executeQuery("select * from blood ");

        while (rs.next()) {
            System.out.println(rs.getString(1)+"       "+rs.getString(2)+"           "+rs.getString(3)+"        "+rs.getString(4));
        }
    }
}
