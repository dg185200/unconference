package com.ncr.unconference.domain;

import javax.inject.Singleton;

@Singleton
public class VoteService {
    public Results fetchResults() {
        return new Results();
    }    
}
