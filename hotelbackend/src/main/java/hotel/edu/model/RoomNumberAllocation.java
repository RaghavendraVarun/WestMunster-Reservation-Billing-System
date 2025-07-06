package hotel.edu.model;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import hotel.edu.dto.ReservationAvailableRoomtypeNumberDTO;
import hotel.edu.dto.RoomTypeDTO;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "roomNumber_allocation")
public class RoomNumberAllocation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "room_id")
    private Integer roomId;

    @Column(name = "room_number")
    private String roomNumber;

    @Column(name = "land_line_number")
    private String landLineNumber;

    @Column(name = "update_by")
    private Integer updateBy;

    @Column(name = "created_by")
    private Integer createdBy;

    @Column(name = "create_date")
    private Date createDate;

    @Column(name = "update_date")
    private Date updateDate;

    @ManyToOne
    @JoinColumn(name = "location_id")
    @JsonIgnore
    private RoomLocationSetUp roomLocationSetUp;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "roomNumberAllocation", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<ReservationRoomAllocation> reservationRoomAllocations;

    @PrePersist
    protected void onCreate() {
        createDate = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        updateDate = new Date();
    }





		
}

