package hotel.edu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hotel.edu.model.Payment;

@Repository
public interface PaymentRepository extends JpaRepository<Payment,Integer>{

}
