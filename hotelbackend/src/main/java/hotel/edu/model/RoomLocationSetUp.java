package hotel.edu.model;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
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
@Table(name="room_location_setup")
public class RoomLocationSetUp {
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private int locationId;
	private String direction;
	private int floorNumber;
	private int count;
	private int  updateBy;
	private int createdBy; 
	private Date createDate;
	private Date updateDate;
	
	@OneToMany(mappedBy = "roomLocationSetUp",cascade = CascadeType.ALL)
	@JsonIgnore
	private List<RoomNumberAllocation> roomNumberAllocation;
	
	@ManyToOne
	@JoinColumn(name="roomTypeId")
	@JsonIgnore
	private RoomType roomType;
	
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
