package hotel.edu.model;

import java.util.Date;


import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
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
	@Temporal(TemporalType.TIMESTAMP)
	private Date userUpdateAt;
	@Temporal(TemporalType.TIMESTAMP)
	private Date userCreateAt;
	
	@ManyToOne
	@JoinColumn(name="roleId")
	@JsonIgnore
	private Role role;
	
	@PrePersist
	protected void onCreate() {
		Date now=new Date();
		userCreateAt=now;
	}
	@PreUpdate
	protected void onUpdate() {
		userUpdateAt=new Date();
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



	public void setUserLastName(String userlastName) {
		this.userLastName = userlastName;
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



	public Role getRole() {
		return role;
	}



	public void setRole(Role role) {
		this.role = role;
	}



	public User() {
		super();
	}

	public User(int userId, String userFirstName, String userLastName, String userEmail, String userPassword,
			String userContactNumber, Date userDob, String userPermanentAddress, String userTemporaryAddress,
			String userPinCode, String userCity, Date userUpdateAt, Date userCreateAt, Role role) {
		super();
		this.userId = userId;
		this.userFirstName = userFirstName;
		this.userLastName = userLastName;
		this.userEmail = userEmail;
		this.userPassword = userPassword;
		this.userContactNumber = userContactNumber;
		this.userDob = userDob;
		this.userPermanentAddress = userPermanentAddress;
		this.userTemporaryAddress = userTemporaryAddress;
		this.userPinCode = userPinCode;
		this.userCity = userCity;
		this.userUpdateAt = userUpdateAt;
		this.userCreateAt = userCreateAt;
		this.role = role;
	}



	
	
	
	

}
