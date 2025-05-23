package hotel.edu.model;

import java.util.Date;


import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
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
	@Column(name="user_id")
	private int userId;
	@Column(name="user_name",length=25)
	private  String userName;
	@Column(name="email",length=25)
	private String email;
	@Column(name="password",length=25)
	private String password;
	@Column(name="contact_number",length=10)
	private String contactNumber;
	@Column(name="dob")
	private Date dob;
	@Column(name="permanent_address",length=225)
	private String permanentAddress;
	@Column(name="temporary_address",length=225)
	private String temporaryAddress;
	@Column(name="pinCode" ,length=6)
	private String pinCode;
	@Column(name="city" ,length=25)
	private String city;
	@Column(name="create_by")
	private int createBy;
	@Column(name="update_date")
	private Date updateDate;
	@Column(name="update_by")
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
	
	@PreUpdate
	protected void onUpdate() {
		updateDate=new Date();
	}

}
