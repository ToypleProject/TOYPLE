package com.project.toyple;

import org.jasypt.encryption.pbe.StandardPBEStringEncryptor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ToypleApplication {

    public static void main(String[] args) {
        SpringApplication.run(ToypleApplication.class, args);
    }

}
