package hotel.edu.model;

import java.time.LocalDateTime;
import java.util.Date;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
    @Column(name = "ReservationId")
    private int reservationId;

    @Column(name = "BookingStatus")
    private String bookingStatus;

    @Column(name = "check_in_date")
    private LocalDateTime checkInDate;

    @Column(name = "check_out_date")
    private LocalDateTime checkOutDate;

    @Column(name = "NumberOfGuests")
    private int noOfGuests;

    @Column(name = "Totalcost")
    private double totalCost;

    @Column(name = "number_of_rooms")
    private int noOfRooms;

    @Column(name = "ReservedBy")
    private int reservedBy;

    @Column(name = "UpdatedBy")
    private int updatedBy;

    @Column(name = "ReservedDate")
    private Date reservedDate;

    @Column(name = "updateDate")
    private Date updateDate;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "payment_id", referencedColumnName = "paymentId")
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