package hotel.edu.serviceimpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import hotel.edu.dto.FeedbackDTO;
import hotel.edu.dto.SeasonDTO;
import hotel.edu.model.Feedback;
import hotel.edu.model.User;
import hotel.edu.repository.FeedbackRepository;
import hotel.edu.repository.UserRepository;
import hotel.edu.service.FeedbackService;

@Service
public class FeedbackServiceImplement implements FeedbackService{

	@Autowired
	private FeedbackRepository feedbackrepository;
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public Feedback createFeedback(FeedbackDTO feedbackdto) {
		Feedback feedback=new Feedback();
		
		int userId=feedbackdto.getUserId();
		User user=userRepository.findById(userId).orElse(null);
		
		feedback.setUser(user);
		
//		feedback.setFeedbackId(feedbackdto.getFeedbackId());
		feedback.setComment(feedbackdto.getComment());
		feedback.setRating(feedbackdto.getRating());
		return feedbackrepository.save(feedback);
	}

	@Override
	public FeedbackDTO getFetchIdFeedback(int feedbackId) {
	    Feedback feedback = feedbackrepository.findById(feedbackId).orElse(null);


	    FeedbackDTO feedbackDTO = new FeedbackDTO();
//	    feedbackDTO.setFeedbackId(feedback.getFeedbackId());
	    feedbackDTO.setComment(feedback.getComment());
	    feedbackDTO.setRating(feedback.getRating());
	    feedbackDTO.setUserId(feedback.getUser().getUserId());
	    feedbackDTO.setDateTime(feedback.getDateTime());


	    return feedbackDTO;
	}

	@Override
	public List<FeedbackDTO> getFetchAllFeedbacks() {
	    List<Feedback> feedbackList = feedbackrepository.findAll();
	    List<FeedbackDTO> dtoList = new ArrayList<>();

	    for (Feedback feedback : feedbackList) {
	        FeedbackDTO dto = new FeedbackDTO();
//	        dto.setFeedbackId(feedback.getFeedbackId());
	        dto.setComment(feedback.getComment());
	        dto.setRating(feedback.getRating());
	        dto.setDateTime(feedback.getDateTime());
	        dto.setUserId(feedback.getUser().getUserId());

	        dtoList.add(dto);
	    }

	    return dtoList;
	}



}