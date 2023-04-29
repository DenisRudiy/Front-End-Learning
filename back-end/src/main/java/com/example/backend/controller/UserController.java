package com.example.backend.controller;

import com.example.backend.entity.UserEntity;
import com.example.backend.repository.UserRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public UserEntity createUser(@RequestBody UserEntity user) {
        return userRepository.save(user);
    }

    @GetMapping("/get")
    public List<UserEntity> getUser(){
        return userRepository.findAll();
    }

    @PutMapping("/update/{id}")
    public UserEntity putUser(@PathVariable long id, @RequestBody UserEntity newEntity){
        UserEntity updatedUser = userRepository.findById(id)
                .orElseThrow(()-> new ResourceAccessException("Not found User with id: "+id));
        updatedUser.setPassword(newEntity.getPassword());
        updatedUser.setEmail(newEntity.getEmail());
        return userRepository.save(updatedUser);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable Long id) {
        UserEntity deletedEntity = userRepository.findById(id)
                .orElseThrow(()-> new ResourceAccessException("Not found User with id: "+id));
        userRepository.deleteById(id);
    }
}

