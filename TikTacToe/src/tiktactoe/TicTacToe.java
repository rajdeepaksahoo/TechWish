package tiktactoe;

import java.util.Scanner;

public class TicTacToe {
	public static void main(String[] args) {
		Scanner s= new Scanner(System.in);
		System.out.print("Player 1 Name : ");
		String u1=s.nextLine();
		System.out.print("Player 1 Name : ");
		String u2=s.nextLine();
		
		String [][] arr = {{"1","2","3"},{"4","5","6"},{"7","8","9"}};
		for(int i=0;i<arr.length;i++) {
			for(int j=0;j<arr[i].length;j++) {
				System.out.print(arr[i][j]+" ");
			}
			System.out.println();
		}
		boolean over =false;
		int no=1;
		while(!over) {

			System.out.print("Choose A No : ");
			int choose = s.nextInt();
			String str = "";
			str=str+choose;
			for(int i=0;i<arr.length;i++) {
				for(int j=0;j<arr[i].length;j++) {
					if(arr[i][j].equals(str)) {
						if(no%2==0)
							arr[i][j]=("0");
						else
							arr[i][j]=("*");
						
						no++;
					}
					System.out.print(arr[i][j]+" ");
				}
				System.out.println();
			}
			
			System.out.println();
			
			
			if((arr[0][0].equals("*") && arr[0][1].equals("*") && arr[0][2].equals("*"))||
					(arr[1][0].equals("*") && arr[1][1].equals("*") && arr[1][2].equals("*"))||
					(arr[2][0].equals("*") && arr[2][1].equals("*") && arr[2][2].equals("*"))||
					
					(arr[0][0].equals("*") && arr[1][0].equals("*") && arr[2][0].equals("*"))||
					(arr[0][1].equals("*") && arr[1][1].equals("*") && arr[2][1].equals("*"))||
					(arr[0][2].equals("*") && arr[1][2].equals("*") && arr[2][2].equals("*"))||
					
					(arr[0][0].equals("*") && arr[1][1].equals("*") && arr[2][2].equals("*"))||
					(arr[0][2].equals("*") && arr[1][1].equals("*") && arr[2][0].equals("*"))
					
					) 
			{
				if((no-1)%2!=0)
					System.out.println(u1+" Own !!!");
					else
						System.out.println(u2+" Own !!!");
				over =true;
			}
			else if((arr[0][0].equals("0") && arr[0][1].equals("0") && arr[0][2].equals("0"))||
					(arr[1][0].equals("0") && arr[1][1].equals("0") && arr[1][2].equals("0"))||
					(arr[2][0].equals("0") && arr[2][1].equals("0") && arr[2][2].equals("0"))||
					
					(arr[0][0].equals("0") && arr[1][0].equals("0") && arr[2][0].equals("0"))||
					(arr[0][1].equals("0") && arr[1][1].equals("0") && arr[2][1].equals("0"))||
					(arr[0][2].equals("0") && arr[1][2].equals("0") && arr[2][2].equals("0"))||
					
					(arr[0][0].equals("0") && arr[1][1].equals("0") && arr[2][2].equals("0"))||
					(arr[0][2].equals("0") && arr[1][1].equals("0") && arr[2][0].equals("0"))
					
					) 
			{
				if((no-1)%2!=0)
					System.out.println(u1+" Own !!!");
					else
						System.out.println(u2+" Own !!!");
				over =true;
			}
			else if(no==10) {
				System.err.println("Tied");
				over=true;
			}

		}
		s.close();
	}
}