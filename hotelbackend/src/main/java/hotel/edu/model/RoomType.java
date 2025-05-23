package hotel.edu.model;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="room_type")
public class RoomType {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int roomTypeId;
	private String roomTypeName;
	private int totalRoom;
	private int capacity;
	private int  updateBy;
	private int createdBy; 
	private Date createDate;
	private Date updateDate;
	
	@OneToMany(mappedBy = "roomType",cascade = CascadeType.ALL)
	@JsonIgnore
	private List<RoomLocationSetUp> roomLocationSetUp;
	
	@ManyToMany(mappedBy = "roomType")
	@JsonIgnore
	private List<Amenities> amenities;
	
	@OneToMany(mappedBy = "roomType")
	@JsonIgnore
	private List<Season> season;
	
	
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
