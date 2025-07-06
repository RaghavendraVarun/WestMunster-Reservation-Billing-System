package hotel.edu.model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "payment")
public class Payment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "payment_id")
	private Integer paymentId;

	@Column(name = "bill_date_time")
	private Date billDateTime;

	@Column(name = "payment_mode")
	private String paymentMode;

	@Column(name = "amount")
	private Double amount;

	@Column(name = "status")
	private Integer status;

	@OneToOne
	@JoinColumn(name = "reservation_id")
	private Reservation reservation;

	@PrePersist
	protected void onCreate() {
		Date now = new Date();
		billDateTime = now;
	}

}