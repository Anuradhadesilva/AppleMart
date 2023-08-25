package com.example.ECommerceBackEnd.Service.IMPL;

import com.example.ECommerceBackEnd.Dto.CustomerDTO;
import com.example.ECommerceBackEnd.Dto.LoginDTO;
import com.example.ECommerceBackEnd.Entity.Customer;
import com.example.ECommerceBackEnd.Repo.CustomerRepo;
import com.example.ECommerceBackEnd.Response.LoginResponse;
import com.example.ECommerceBackEnd.Service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomerIMPL implements CustomerService {
    @Autowired
    private CustomerRepo customerRepo;

//    @Autowired
//    private PasswordEncoder passwordEncoder;
    @Override
    public String addCustomer(CustomerDTO customerDTO) {
        Customer customer=new Customer(
                customerDTO.getCustomerId(),
                customerDTO.getCustomerName(),
                customerDTO.getEmail(),
//                this.passwordEncoder.encode(customerDTO.getPassword())
                customerDTO.getPassword()
//                this.passwordEncoder.encode(customerDTO.getPassword())
        );
        customerRepo.save(customer);
        return  customer.getCustomerName();

    }

    @Override
    public LoginResponse loginCustomer(LoginDTO loginDTO) {
        String msg="";
        Customer customer1=customerRepo.findByEmail(loginDTO.getEmail());
        if (customer1 != null){
            String enteredPassword=loginDTO.getPassword();
            String storedPassword=customer1.getPassword();
            Boolean isMatch=enteredPassword.matches(storedPassword);
//            passwordEncoder.matches(enteredPassword,storedPassword);
            if(isMatch){
                Optional<Customer> customer=customerRepo.findOneByEmailAndPassword(loginDTO.getEmail(),storedPassword);
                if (customer.isPresent()){
                    return new LoginResponse("Login Success",true);
                }
                else {
                    return new LoginResponse("Login Failed",false);
                }
            }
            else {
                return new LoginResponse("password not match",false);
            }
        }
        else {
            return new LoginResponse("Email not exist",false);
        }
    }

}
