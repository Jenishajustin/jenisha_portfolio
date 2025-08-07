package com.example.portfolio.controller;

import com.example.portfolio.service.VisitorService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/visitor")
public class VisitorController {
    private final VisitorService service;

    public VisitorController(VisitorService service) {
        this.service = service;
    }

    @PostMapping
    public void trackVisitor(HttpServletRequest request) {
        service.saveVisitor(request);
    }

    @GetMapping("/count")
    public long getCount() {
        return service.getTotalViews();
    }

    
}
