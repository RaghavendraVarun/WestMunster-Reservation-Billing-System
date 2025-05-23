package hotel.edu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import hotel.edu.dto.FeedbackDTO;
import hotel.edu.model.Feedback;
import hotel.edu.service.FeedbackService;

@Controller
public class FeedbackController {
	
	@Autowired
 private FeedbackService feedbackservice;
	


	@PostMapping("/save")
	public ResponseEntity<String> createFeedback(@RequestBody FeedbackDTO feedbackdto) {
	    Feedback feedback = feedbackservice.createFeedback(feedbackdto);
	    return new ResponseEntity<>("Thank you for your feedback! It has been submitted successfully.", HttpStatus.OK);
	}
}
