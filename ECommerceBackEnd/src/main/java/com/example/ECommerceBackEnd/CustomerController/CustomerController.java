package com.example.ECommerceBackEnd.CustomerController;

import com.example.ECommerceBackEnd.Dto.CustomerDTO;
import com.example.ECommerceBackEnd.Dto.LoginDTO;
import com.example.ECommerceBackEnd.Response.LoginResponse;
import com.example.ECommerceBackEnd.Service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/customer")
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @PostMapping(path = "/save")
    public String saveCustomer(@RequestBody CustomerDTO customerDTO)
    {
        String id = customerService.addCustomer(customerDTO);
        return id;
    }
    @PostMapping(path = "/login")
    public ResponseEntity<?> loginCustomer(@RequestBody LoginDTO loginDTO)
    {
        LoginResponse loginResponse= customerService.loginCustomer(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }

    @GetMapping("/add")
    public String getValue(){
       return "Anuradha";
    }


}
