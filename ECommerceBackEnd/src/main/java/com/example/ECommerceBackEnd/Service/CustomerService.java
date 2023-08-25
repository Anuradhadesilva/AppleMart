package com.example.ECommerceBackEnd.Service;

import com.example.ECommerceBackEnd.Dto.CustomerDTO;
import com.example.ECommerceBackEnd.Dto.LoginDTO;
import com.example.ECommerceBackEnd.Response.LoginResponse;
import org.springframework.stereotype.Service;


public interface CustomerService {
    String addCustomer(CustomerDTO customerDTO);

    LoginResponse loginCustomer(LoginDTO loginDTO);
}
