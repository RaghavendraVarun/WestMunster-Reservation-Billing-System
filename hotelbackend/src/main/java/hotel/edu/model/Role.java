package hotel.edu.model;

import java.util.List;


import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Role {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int roleId;
	private String roleEmail;
	private String rolePassword;
	
	@OneToMany(mappedBy="role",cascade=CascadeType.ALL)
	@JsonIgnore
	private List<User> user;
	
	
	public List<User> getUser() {
		return user;
	}
	public void setUser(List<User> user) {
		this.user = user;
	}
	public int getRoleId() {
		return roleId;
	}
	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}


	public String getRoleEmail() {
		return roleEmail;
	}
	public void setRoleEmail(String roleEmail) {
		this.roleEmail = roleEmail;
	}
	public String getRolePassword() {
		return rolePassword;
	}
	public void setRolePassword(String rolePassword) {
		this.rolePassword = rolePassword;
	}
	public Role() {
		super();
	}
	public Role(int roleId, String roleEmail, String rolePassword, List<User> user) {
		super();
		this.roleId = roleId;
		this.roleEmail = roleEmail;
		this.rolePassword = rolePassword;
		this.user = user;
	}
	

}
