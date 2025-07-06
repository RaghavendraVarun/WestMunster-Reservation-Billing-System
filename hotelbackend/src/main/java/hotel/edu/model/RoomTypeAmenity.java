package hotel.edu.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "room_type_amenity")
@Data
public class RoomTypeAmenity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="room_type_amenity_id")
	private Long room_type_amenity_id;

	@ManyToOne(optional = false)
	@JoinColumn(name = "room_type_id", nullable = false)
	private RoomType roomType;

	@ManyToOne(optional = false)
	@JoinColumn(name = "amenity_id", nullable = false)
	private Amenities amenities;

//	@Column(name = "assigned_date")
//	private Date assignedDate;

//	@PrePersist
//	protected void onCreate() {
//		this.assignedDate = new Date();
//	}
}
