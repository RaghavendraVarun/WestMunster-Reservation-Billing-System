package hotel.edu.service;

import java.util.List;

import hotel.edu.dto.FeedbackDTO;
import hotel.edu.dto.SeasonDTO;
import hotel.edu.model.Feedback;

public interface FeedbackService {

	Feedback createFeedback(FeedbackDTO feedbackdto);

	FeedbackDTO getFetchIdFeedback(int feedbackId);

	List<FeedbackDTO> getFetchAllFeedbacks();

	

}