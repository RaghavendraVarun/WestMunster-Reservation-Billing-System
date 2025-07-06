package hotel.edu.model;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "room_location_setup")
public class RoomLocationSetUp {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "location_id")
	private Integer locationId;

	@Column(name = "direction")
	private String direction;

	@Column(name = "floor_number")
	private Integer floorNumber;

	@Column(name = "count")
	private Integer count;

	@Column(name = "update_by")
	private Integer updateBy;

	@Column(name = "create_by")
	private Integer createdBy;

	@Column(name = "create_date")
	private Date createDate;

	@Column(name = "update_date")
	private Date updateDate;

	@JsonIgnore
	@OneToMany(mappedBy = "roomLocationSetUp", cascade = CascadeType.ALL)
	private List<RoomNumberAllocation> roomNumberAllocation;

	@ManyToOne
	@JoinColumn(name = "room_type_id")
	private RoomType roomType;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	@PrePersist
	protected void onCreate() {
		Date date = new Date();
		createDate = date;
	}

	@PreUpdate
	protected void onUpdate() {
		updateDate = new Date();
	}

}