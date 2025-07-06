package hotel.edu.model;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;

@Data
@Entity
@Table(name = "user")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Integer userId;

	@Column(name = "user_name", length = 50)
	private String userName;

	@Column(name = "email", length = 50)
	private String email;

	@Column(name = "password", length = 15)
	private String password;

	@Column(name = "contact_number", length = 10)
	private String contactNumber;

	@Column(name = "dob")
	private Date dob;

	@Column(name = "permanent_address", length = 225)
	private String permanentAddress;

	@Column(name = "temporary_address", length = 225)
	private String temporaryAddress;

	@Column(name = "pinCode", length = 6)
	private String pinCode;

	@Column(name = "city", length = 25)
	private String city;
	
	@Column(name = "created_by")
	private Integer createdBy;
	
	@Column(name = "create_date")
	private Date createDate;

	@Column(name = "updated_by")	
	private Integer updatedBy;

	@Column(name = "update_date")
	private Date updateDate;

	@ManyToOne
	@JoinColumn(name = "role_id")
	private Role role;

	@OneToMany(mappedBy = "user")
	@JsonIgnore
	private List<Reservation> reservation;

	@OneToMany(mappedBy = "user")
	@JsonIgnore
	private List<Feedback> feedback;

	@OneToMany(mappedBy = "user")
	@JsonIgnore
	private List<RoomType> roomType;

	@PrePersist
	protected void onCreate() {
		Date now = new Date();
		createDate = now;
	}

	@PreUpdate
	protected void onUpdate() {
		updateDate = new Date();
	}
}