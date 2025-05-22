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
import lombok.Data;


@Data
@Entity
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	
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
	private int updateBy;
	@Temporal(TemporalType.TIMESTAMP)
	private Date createAt;
	
	@ManyToOne
	@JoinColumn(name="roleId")
	@JsonIgnore
	private Role role;
	
	@PrePersist
	protected void onCreate() {
		Date now=new Date();
		createAt=now;
	}
	
	

}
