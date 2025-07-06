package hotel.edu.model;


import java.time.LocalDateTime;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "reservation")
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "reservation_id")
    private Integer reservationId;

    @Column(name = "booking_status")
    private String bookingStatus;

    @Column(name = "check_in_date")
    private LocalDateTime checkInDate;

    @Column(name = "check_out_date")
    private LocalDateTime checkOutDate;

    @Column(name = "number_of_guests")
    private Integer numberOfGuests;

    @Column(name = "total_cost")
    private Double totalCost;

    @Column(name = "number_of_rooms")
    private Integer numberOfRooms;

    @Column(name = "reserved_by")
    private Integer reservedBy;

    @Column(name = "updated_by")
    private Integer updatedBy;

    @Column(name = "reserved_date")
    private Date reservedDate;

    @Column(name = "update_date")
    private Date updateDate;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;
    
    @OneToOne(mappedBy = "reservation")
    private Payment payment;
    
    @PrePersist
	protected void onCreate() {
		Date now=new Date();
		reservedDate=now;
	}
	
	@PreUpdate
	protected void onUpdate() {
		updateDate=new Date();
	}
    
    
}