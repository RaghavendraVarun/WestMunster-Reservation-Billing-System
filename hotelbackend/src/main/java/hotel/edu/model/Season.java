package hotel.edu.model;

import java.time.DateTimeException;
import java.time.LocalDate;
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
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="season")
public class Season {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="season_id")
	private int seasonId;
	@Column(name="season_name")
	private String seasonName;
	@Column(name="price")
	private double price;
	@Column(name="startdate")
	private Date startDate;
	@Column(name="end_date")
	private Date endDate;
	@Column(name="created_by")
	private int createdBy;
	@Column(name="updated_by")
	private int updatedBy;
	@Column(name="created_date")
	private Date createdDate;
	@Column(name="update_date")
	private Date updateDate;
	
	@ManyToOne
	@JoinColumn(name="roomTypeId")
	@JsonIgnore
	private RoomType roomType;
	
	@ManyToOne
	@JoinColumn(name="userId")
	@JsonIgnore
	private User user;
	
	@PrePersist
	protected void onCreate() {
		Date date=new Date();
		createdDate=date;
	}
	
	@PreUpdate
	protected void onUpdate() {
		updateDate=new Date();
	}
	

}
