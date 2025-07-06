package hotel.edu.model;

import java.util.Date;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "amenities")
public class Amenities {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "amenity_id")
	    private Integer amenityId;

	    @Column(name = "amenity_type")
	    private String amenityType;

	    @Column(name = "update_by")
	    private Integer updateBy;

	    @Column(name = "created_by")
	    private Integer createdBy;

	    @Column(name = "create_date")
	    private Date createDate;

	    @Column(name = "update_date")
	    private Date updateDate;

	    @OneToMany(mappedBy = "amenities", cascade = CascadeType.ALL)
	    private List<RoomTypeAmenity> roomTypeAmenities;

	    @ManyToOne
	    @JoinColumn(name = "user_id")
	    private User user;

	    @PrePersist
	    protected void onCreate() {
	        this.createDate = new Date();
	    }

	    @PreUpdate
	    protected void onUpdate() {
	        this.updateDate = new Date();
	    }
}