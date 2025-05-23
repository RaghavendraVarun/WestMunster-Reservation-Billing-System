package hotel.edu.model;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;

@Data
@Entity
@Table(name="roomNumber_allocation")
public class RoomNumberAllocation {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="room_id")
	private int roomId;
	@Column(name="room_number")
	private String roomNumber;
	@Column(name="land_line_number")
	private String landLineNumber;
	@Column(name="update_by")
	private int  updateBy;
	@Column(name="created_by")
	private int createdBy;
	@Column(name="create_date")
	private Date createDate;
	@Column(name="update_date")
	private Date updateDate;
	
	
	@ManyToMany(mappedBy = "Reservation",cascade = CascadeType.ALL)
	@JsonIgnore
	private List<RoomNumberAllocation> roomNumberAllocation;
	
	@ManyToOne
	@JoinColumn(name="locationId")
	@JsonIgnore
	private RoomLocationSetUp roomLocationSetUp;
	
	@ManyToOne
	@JoinColumn(name="userId")
	@JsonIgnore
	private User user;
	
	
	@PrePersist
	protected void onCreate() {
		Date date=new Date();
		createDate=date;
	}
	
	@PreUpdate
	protected void onUpdate() {
		updateDate=new Date();
	}

	
}
