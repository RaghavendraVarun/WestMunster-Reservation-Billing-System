package hotel.edu.model;

import java.util.Date;
import java.util.List;

import jakarta.annotation.Generated;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="Amenities")
public class Amenities {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int amenityId;
	private String amenitiesType;

	private int  updateBy;
	private int createdBy; 
	private Date createDate;
	private Date updateDate;
	
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(
	    name = "roomType_Amenities",
	    joinColumns = @JoinColumn(name = "amenityId"),
	    inverseJoinColumns = @JoinColumn(name = "roomTypeId")
	)
	private List<RoomType> roomType;
	
	@PrePersist
	protected void onCreate() {
		Date now=new Date();
		createDate=now;
	}
	
	@PreUpdate
	protected void onUpdate() {
		updateDate=new Date();
	}

}
