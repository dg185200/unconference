package com.ncr.unconference;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("")
public class GreetingResource {

    @GET @Path("/hello")
    @Produces(MediaType.TEXT_HTML)
    public String hello() {
        var message = "<h1>What is your favorite best programming language in your opinion?</h1>";
        System.out.println("Tests");
        return message;
    }

    @GET @Path("/world")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Language language() {
        return new Language("my new user", "desdfsdfsdsc");
    }

}