package com.project.toyple.exception;

import org.springframework.security.authentication.AccountStatusException;

public class NotAuthenticatedException extends AccountStatusException {
    public NotAuthenticatedException(String message) {
        super(message);
    }
}
