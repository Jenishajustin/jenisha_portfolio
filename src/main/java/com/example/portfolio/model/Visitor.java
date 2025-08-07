package com.example.portfolio.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Visitor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String ipAddress;

    private String userAgent;

    private LocalDateTime visitTime;

    public Visitor() {
        this.visitTime = LocalDateTime.now();
    }

    // --- Getters ---

    public Long getId() {
        return id;
    }

    public String getIpAddress() {
        return ipAddress;
    }

    public String getUserAgent() {
        return userAgent;
    }

    public LocalDateTime getVisitTime() {
        return visitTime;
    }

    // --- Setters ---

    public void setId(Long id) {
        this.id = id;
    }

    public void setIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
    }

    public void setUserAgent(String userAgent) {
        this.userAgent = userAgent;
    }

    public void setVisitTime(LocalDateTime visitTime) {
        this.visitTime = visitTime;
    }
}
