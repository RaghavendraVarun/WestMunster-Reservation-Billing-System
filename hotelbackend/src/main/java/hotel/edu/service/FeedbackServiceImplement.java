package hotel.edu.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hotel.edu.dto.FeedbackDTO;
import hotel.edu.model.Feedback;
import hotel.edu.repository.FeedbackRepository;

@Service
public class FeedbackServiceImplement implements FeedbackService{

	@Autowired
	private FeedbackRepository feedbackrepository;

	@Override
	public Feedback createFeedback(FeedbackDTO feedbackdto) {
		// TODO Auto-generated method stub
		Feedback feedback=new Feedback();
		feedback.setFeedbackId(feedbackdto.getFeedbackId());
		feedback.setComment(feedbackdto.getComment());
		feedback.setRating(feedbackdto.getRating());
	//	feedback.setDatetime(feedbackdto.getDatetime());
		return feedbackrepository.save(feedback);
	}


}
