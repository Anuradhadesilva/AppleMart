package com.example.ECommerceBackEnd.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "customer")
public class Customer {
    @Id
    @Column(name = "customer_Id",length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int customerId;

    @Column(name = "customer_Name",length =255 )
    private String customerName;

    @Column(name = "email",length =255 )
    private String email;

    @Column(name = "password",length =255 )
    private String password;

    public Customer(int customerId, String customerName, String email, String password) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.email = email;
        this.password = password;
    }

    public Customer() {
    }

    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "customerId=" + customerId +
                ", customerName='" + customerName + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
