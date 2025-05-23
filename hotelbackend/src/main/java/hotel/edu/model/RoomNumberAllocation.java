package hotel.edu.model;

import java.time.LocalDate;
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
	private int roomId;
	private String roomNumber;
	private String landLineNumber;
	private int  updateBy;
	private int createdBy;
	  
	private Date createDate;
	private Date updateDate;
	
	@ManyToOne
	@JoinColumn(name="locationId")
	@JsonIgnore
	private RoomLocationSetUp roomLocationSetUp;
	
	
	
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
