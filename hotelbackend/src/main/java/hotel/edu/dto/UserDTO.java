package hotel.edu.dto;

import java.util.Date;

import hotel.edu.model.Role;

public class UserDTO {
	
	private int userId;
	private String userFirstName;
	private String userLastName;
	private String userEmail;
	private String userPassword;
	private String userContactNumber;
	private Date userDob;
	private String userPermanentAddress;
	private String userTemporaryAddress;
	private String userPinCode;
	private String userCity;
	private Date userUpdateAt;
	private Date userCreateAt;
	
	private Role role;



	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUserFirstName() {
		return userFirstName;
	}

	public void setUserFirstName(String userFirstName) {
		this.userFirstName = userFirstName;
	}

	public String getUserLastName() {
		return userLastName;
	}

	public void setUserLastName(String userLastName) {
		this.userLastName = userLastName;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public String getUserContactNumber() {
		return userContactNumber;
	}

	public void setUserContactNumber(String userContactNumber) {
		this.userContactNumber = userContactNumber;
	}

	public Date getUserDob() {
		return userDob;
	}

	public void setUserDob(Date userDob) {
		this.userDob = userDob;
	}

	public String getUserPermanentAddress() {
		return userPermanentAddress;
	}

	public void setUserPermanentAddress(String userPermanentAddress) {
		this.userPermanentAddress = userPermanentAddress;
	}

	public String getUserTemporaryAddress() {
		return userTemporaryAddress;
	}

	public void setUserTemporaryAddress(String userTemporaryAddress) {
		this.userTemporaryAddress = userTemporaryAddress;
	}

	public String getUserPinCode() {
		return userPinCode;
	}

	public void setUserPinCode(String userPinCode) {
		this.userPinCode = userPinCode;
	}

	public String getUserCity() {
		return userCity;
	}

	public void setUserCity(String userCity) {
		this.userCity = userCity;
	}

	public Date getUserUpdateAt() {
		return userUpdateAt;
	}

	public void setUserUpdateAt(Date userUpdateAt) {
		this.userUpdateAt = userUpdateAt;
	}

	public Date getUserCreateAt() {
		return userCreateAt;
	}

	public void setUserCreateAt(Date userCreateAt) {
		this.userCreateAt = userCreateAt;
	}

	

	
	
		

}
