package hotel.edu.model;

import java.time.DateTimeException;
import java.time.LocalDate;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="season")
public class Season {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int seasonId;
	private String seasonName;
	private double price;
	private Date startDate;
	private Date endDate;
	private int createdBy;
	private int uodateDate;
	private Date createdDate;
	private Date updateDate;
	
	@ManyToOne
	@JoinColumn(name="roomTypeId")
	@JsonIgnore
	private RoomType roomType;
	

}
