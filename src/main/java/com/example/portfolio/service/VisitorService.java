package com.example.portfolio.service;

import com.example.portfolio.model.Visitor;
import com.example.portfolio.repository.VisitorRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Service;

@Service
public class VisitorService {
    private final VisitorRepository repo;

    public VisitorService(VisitorRepository repo) {
        this.repo = repo;
    }

    public void saveVisitor(HttpServletRequest request) {
        String ip = request.getRemoteAddr();
        String agent = request.getHeader("User-Agent");
        Visitor visitor = new Visitor();
        visitor.setIpAddress(ip);
        visitor.setUserAgent(agent);
        repo.save(visitor);
    }

    public long getTotalViews() {
        return repo.count();
    }
}
