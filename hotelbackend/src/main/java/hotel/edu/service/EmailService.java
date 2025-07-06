package hotel.edu.service;

import java.time.LocalDateTime;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;


@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    private static final String FROM_EMAIL = "your_email@gmail.com";
   

    public void sendReservationConfirmation(
            String toEmail,
            String userName,
            String bookingStatus,
            LocalDateTime checkInDate,
            LocalDateTime checkOutDate,
            int noOfGuests,
            int noOfRooms,
            List<Integer> roomIds
    ) {
        String roomIdList = roomIds.stream()
                .map(String::valueOf)
                .collect(Collectors.joining(", "));

        String emailBody = String.format(
            "Dear %s,\n\n" +
            "Your reservation is %s.\n\n" +
            "Check-In Date: %s\n" +
            "Check-Out Date: %s\n" +
            "Number of Guests: %d\n" +
            "Number of Rooms: %d\n" +
            "Allocated Room IDs: %s\n\n" +
            "Thank you for choosing us!\n\n" +
            "Regards,\nHotel Management Team",
            userName,
            bookingStatus,
            checkInDate,
            checkOutDate,
            noOfGuests,
            noOfRooms,
            roomIdList
        );

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(FROM_EMAIL);
        message.setTo(toEmail);
        message.setSubject("Reservation Confirmation");
        message.setText(emailBody);

        mailSender.send(message);
    }
}