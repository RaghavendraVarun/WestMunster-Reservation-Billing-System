package hotel.edu.dto;

import java.util.Date;

import hotel.edu.model.Role;
import lombok.Data;

@Data
public class UserDTO {
	
	private int userId;
	private  String userName;
	private String email;
	private String password;
	private String contactNumber;
	private Date dob;
	private String permanentAddress;
	private String temporaryAddress;
	private String pinCode;
	private String city;
	private int createBy;
	private Date updateDate;
	private int updateBy;
	private Date createAt;
	
	private Role role;

	

}
