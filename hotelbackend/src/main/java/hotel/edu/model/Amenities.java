package hotel.edu.model;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.annotation.Generated;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
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
	@Column(name="amenity_id")
	private int amenityId;
	@Column(name="amenities_type")
	private String amenitiesType;
	@Column(name="update_by")

	private int  updateBy;
	@Column(name="created_by")

	private int createdBy; 
	@Column(name="create_date")

	private Date createDate;
	@Column(name="update_date")
	private Date updateDate;
	
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(
	    name = "roomType_Amenities",
	    joinColumns = @JoinColumn(name = "amenityId"),
	    inverseJoinColumns = @JoinColumn(name = "roomTypeId")
	)
	private List<RoomType> roomType;
	
	@ManyToOne
	@JoinColumn(name="userId")
	@JsonIgnore
	private User user;
	
	
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
