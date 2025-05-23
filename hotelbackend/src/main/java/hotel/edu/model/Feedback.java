package hotel.edu.model;

import java.time.LocalDateTime;
import java.util.Date;

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
@Table(name="feedback")
public class Feedback {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="FeedbackId")
  private int feedbackId;
	@Column(name="Comment")
  private String comment;
	@Column(name="Rating")
  private Double rating;
	@Column(name="DateTime")
  private Date dateTime;

@ManyToOne
@JoinColumn(name = "userId", referencedColumnName="userId") 
private User user;

@PrePersist
protected void onCreate() {
	Date now=new Date();
	dateTime=now;
}



}
