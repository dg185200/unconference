package com.ncr.unconference.domain;

import java.time.LocalDateTime;

import javax.persistence.Entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
public class Vote extends PanacheEntity {
    public String language;
    public LocalDateTime submitedOn;    
}
