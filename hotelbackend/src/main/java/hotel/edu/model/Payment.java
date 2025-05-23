package hotel.edu.model;

import java.time.LocalDateTime;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="payment")
public class Payment {
	
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="PaymentId")
      private int paymentId;
	@Column(name="DateTime")
      private Date dateTime;
	@Column(name="PaymentMode")
      private String paymentMode;
	@Column(name="Amount")
      private Double amount;
	@Column(name="Status")
      private int status;
	
	@OneToOne(mappedBy = "payment")
	private Reservation reservation;
	
	@PrePersist
	protected void onCreate() {
		Date now=new Date();
		dateTime=now;
	}
	

      
      
}
