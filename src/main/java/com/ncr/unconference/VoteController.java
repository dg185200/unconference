package com.ncr.unconference;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import java.time.LocalDateTime;

import javax.transaction.Transactional;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import com.ncr.unconference.domain.Results;
import com.ncr.unconference.domain.Vote;
import com.ncr.unconference.domain.VoteService;

@Path("") 
@ApplicationScoped
public class VoteController {

    @Inject
    private VoteService voteService;

    @POST @Path("/vote")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Transactional
    public Results submitVote(Vote vote) throws InterruptedException {
        vote.language = vote.language.toLowerCase();
        vote.submitedOn = LocalDateTime.now();
        
        vote.persist();
        
        return voteService.fetchResults();
    }

    @GET @Path("/results")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Results results() {
        return voteService.fetchResults();
    }
}