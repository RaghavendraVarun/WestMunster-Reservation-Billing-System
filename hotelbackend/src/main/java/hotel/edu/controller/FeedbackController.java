package hotel.edu.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import hotel.edu.dto.FeedbackDTO;
import hotel.edu.dto.SeasonDTO;
import hotel.edu.model.Feedback;
import hotel.edu.service.FeedbackService;
@CrossOrigin
@RestController
public class FeedbackController {
	
@Autowired
 private FeedbackService feedbackservice;
	


	@PostMapping("/saveFeedback")
	public ResponseEntity<String> createFeedback(@RequestBody FeedbackDTO feedbackdto) {
	    Feedback feedback = feedbackservice.createFeedback(feedbackdto);
	    return new ResponseEntity<>("Thank you for your feedback! It has been submitted successfully.", HttpStatus.OK);
	}
	
	@GetMapping("/fetchIdFeedback/{feedbackId}")
	public ResponseEntity<FeedbackDTO> getFetchIdFeedback(@PathVariable int feedbackId){	
		FeedbackDTO dto=feedbackservice.getFetchIdFeedback(feedbackId);
		return new ResponseEntity<>(dto,HttpStatus.OK);		
	}
	
	@GetMapping("/getFetchAllFeedback")
	public ResponseEntity<List<FeedbackDTO>> getFetchAllFeedback(){
		List<FeedbackDTO> feedbackdtolist=feedbackservice.getFetchAllFeedbacks();
		return new ResponseEntity<>(feedbackdtolist,HttpStatus.OK);
	}
}