package hotel.edu.model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "feedback")
public class Feedback {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "feedback_id")
	private Integer feedbackId;

	@Column(name = "comment")
	private String comment;

	@Column(name = "rating")
	private Double rating;

	@Column(name = "date_time")
	private Date dateTime;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	@PrePersist
	protected void onCreate() {
		Date now = new Date();
		dateTime = now;
	}

}